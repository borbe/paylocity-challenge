const { Then } = require('cucumber');
const chai = require('chai');
chai.use(require('chai-string'));

const expect = chai.expect;
const assumptions = require('../resources/assumptions-data.json');

Then(/^user waits for modal to appear$/, async () => {
  await browser.wait((pageMap['Benefits Dashboard'].FIRST_NAME).isDisplayed, 5000);
});

Then(/^the employee has a 10% discount$/, async () => {
  global.localStorage.setItem('DISCOUNT', 10);
});

Then(/^user validates that employee is (added|edited) in row (\d+) of the table$/, async (option, row) => {
  const employeeTable = pageMap['Benefits Dashboard'].EMPLOYEE_TABLE;
  await browser.wait((employeeTable).isDisplayed, 5000);

  const actualFirstName = await employeeTable.element(by.xpath(`//tr[${row}]/td[2]`)).getText();
  const actualLastName = await employeeTable.element(by.xpath(`//tr[${row}]/td[3]`)).getText();
  const expectedFirstName = global.localStorage.getItem('FIRSTNAME');
  const expectedLastName = global.localStorage.getItem('LASTNAME');

  expect(actualFirstName, `Actual First Name ${actualFirstName} is different than Expected First Name 
  ${expectedFirstName}`).to.equal(expectedFirstName);
  expect(actualLastName, `Actual Last Name ${actualLastName} is different than Expected Last Name 
  ${expectedLastName}`).to.equal(expectedLastName);
});

Then(/^user validates that the benefit cost calculation is correct$/, async () => {
  const employeeTable = pageMap['Benefits Dashboard'].EMPLOYEE_TABLE;
  await browser.wait((employeeTable).isDisplayed, 5000);

  const salary = assumptions.baseSalary * assumptions.paychecksPerYear;
  const dependents = global.localStorage.getItem('DEPENDENTS');
  const discount = global.localStorage.getItem('DISCOUNT') / 100;
  const totalDependentsCost = dependents * assumptions.dependentCostPerYear;
  const totalCostPerYearPreDiscount = assumptions.benefitCostPerYear + totalDependentsCost;
  const totalCostPerYearPostDiscount = totalCostPerYearPreDiscount - (totalCostPerYearPreDiscount * discount);
  const expectedBenefitCost = (totalCostPerYearPostDiscount / assumptions.paychecksPerYear).toFixed(2);
  const expectedNetPay = ((salary - totalCostPerYearPostDiscount) / assumptions.paychecksPerYear).toFixed(2);
  const actualBenefitCost = await employeeTable.element(by.xpath('//tr[2]/td[7]')).getText();
  const actualNetPay = await employeeTable.element(by.xpath('//tr[2]/td[8]')).getText();

  expect(actualBenefitCost, `Actual Benefit Cost ${actualBenefitCost} is different than Expected Benefit Cost 
  ${expectedBenefitCost}`).to.equal(expectedBenefitCost);
  expect(actualNetPay, `Actual Net Pay ${actualNetPay} is different than Expected Net Pay 
  ${expectedNetPay}`).to.equal(expectedNetPay);
});

Then(/^user validates employee is deleted$/, async () => {
  const employeeTable = pageMap['Benefits Dashboard'].EMPLOYEE_TABLE;
  await browser.wait((employeeTable).isDisplayed, 5000);

  const actualTableSize = await element.all(by.xpath('//tbody/tr')).count();
  expect(actualTableSize, `Actual Table Size ${actualTableSize} is different than Expected Table Size 0`).to.equal(0);
});
