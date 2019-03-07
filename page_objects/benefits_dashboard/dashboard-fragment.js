const addEmployeeButton = element(by.css('#btnAddEmployee'));
const employeeTable = element(by.xpath('//table[@id=\'employee-table\']/tbody'));
const editEmployeeButton = element(by.xpath('//span[@id=\'btnEdit\']'));
const deleteEmployeeButton = element(by.xpath('//span[@id=\'btnDelete\']'));


class Dashboard {
  constructor(pageObject) {
    pageObject.ADD_EMPLOYEE = addEmployeeButton;
    pageObject.EMPLOYEE_TABLE = employeeTable;
    pageObject.EDIT_EMPLOYEE = editEmployeeButton;
    pageObject.DELETE_EMPLOYEE = deleteEmployeeButton;
  }
}

module.exports = Dashboard;
