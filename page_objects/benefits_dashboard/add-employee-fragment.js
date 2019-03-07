const firstNameInput = element(by.xpath('//div[label[@for="firstname"]]//input'));
const lastNameInput = element(by.xpath('//div[label[@for="lastname"]]//input'));
const dependantsInput = element(by.xpath('//div[label[@for="dependents"]]//input'));
const submitButton = element(by.xpath("//button[text()='Submit']"));
const closeButton = element(by.xpath("//button[text()='Close']"));

class AddEmployee {
  constructor(pageObject) {
    pageObject.FIRST_NAME = firstNameInput;
    pageObject.LAST_NAME = lastNameInput;
    pageObject.DEPENDENTS = dependantsInput;
    pageObject.SUBMIT = submitButton;
    pageObject.CLOSE = closeButton;
  }
}

module.exports = AddEmployee;
