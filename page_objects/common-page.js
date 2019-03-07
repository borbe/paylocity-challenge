const { PageObject } = require('paylocity-test-fwk');

module.exports = class CommonPage extends PageObject {
  constructor(name = 'Common', url = '/INVALID URL/') {
    super(name, url);
    this.TITLE = element(by.id('page-title'));
  }
};
