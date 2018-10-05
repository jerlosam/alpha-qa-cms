var utils = require('../utils/utilities');
var addImageHeader = element(by.className('imageselector-header'));
var addImageLink = element(by.css('div.widget-upload')).element(by.className('custom-link'));
describe('Beatrix CMS: Add an Image', function() {



  utils.loginToCms()
  browser.waitForAngular();


  it('For New Content, Add Image Section With Header And Tertiary Link Should Be Displayed In Image Page', function(){
    utils.goToAddImagePage();
    browser.waitForAngular();
    addImageLink.click();
    browser.waitForAngular();
  });

});
