const CommonPage = require('../common-page');

const AddEmployeeFragment = require('./add-employee-fragment');
const DashboardFragment = require('./dashboard-fragment');

module.exports = class extends CommonPage {
  constructor() {
    super('Benefits Dashboard', '/home.html?username=testUser');
    this.dashboard = new DashboardFragment(this);
    this.addEmployee = new AddEmployeeFragment(this);
  }
};
