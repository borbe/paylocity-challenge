const CommonPage = require('../common-page');

module.exports = class extends CommonPage {
  constructor() {
    super('Login', '/login.html');
    this.USERNAME = element(by.css("input[name='form-username']"));
    this.PASSWORD = element(by.css("input[name='form-password']"));
    this.LOGIN = element(by.css("button[id='btnLogin']"));
    this.CREDENTIALS_ERROR = element(by.css("div[id='validation-errors']"));
  }
};
