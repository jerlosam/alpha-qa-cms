var utils = require('../../utils/utilities');
var gameResources = require('../game_content/game_common');


var section_common = function(){
this.searchSectionComponent = function (internalName)
{
    utils.goToCreateSectionForm();
    browser.sleep(3000);
    utils.scrollDown();
    element(by.css(browser.params.cmsSearchComponentCss)).click();
    utils.searchByName(internalName);
}
this.createSectionContent =function(cta){
    utils.goToCreateSectionForm();
    var x = utils.autoGenerateString(3);
    let titleName = "testAuto-" + x + new Date().toISOString().slice(0, 10);
    gameResources.addInternalAndTitle(titleName);
    element.all(by.id(browser.params.cmsSlugField)).first().click();
    element(by.buttonText(cta)).click();
    browser.sleep(3000);
    return titleName;
}

this.completeFormAndReturnFieldValues = function(cta){
  utils.goToCreateSectionForm();
  var x = utils.autoGenerateString(3);
  let titleName = "testAuto-" + x + new Date().toISOString().slice(0, 10);
  gameResources.addInternalAndTitle(titleName);
  element.all(by.id(browser.params.cmsSlugField)).first().click();
  var x = this.getFormValues();
  element(by.buttonText(browser.params.cmsPublishButtonText)).click();
  browser.waitForAngular();
  return x;
}

this.getFormValues = function() {
  var el = element.all(by.css('bx-form')).map(function(el) {
    return {
      int_name: el.element(by.id(browser.params.cmsInternalNameId)).getAttribute('value'),
      title_name: el.element(by.css(browser.params.cmsTitleCss)).getAttribute('value'),
      slug_field: el.element(by.css(browser.params.slugCss)).getAttribute('value')
    }
  });
  return el;
}
};module.exports = new section_common ();
