var utils = require('../../utils/utilities');
var gameResources = require('../game_content/game_common');

var content_block_common = function(){
this.createContentBlock = function(cta)
{
  utils.goToCreateContentBlock();
  var x = utils.autoGenerateString(3);
  let titleName = "testAuto-" + x +new Date().toISOString().slice(0, 10);
  gameResources.addInternalAndTitle(titleName);
  gameResources.addRichText();
  element(by.buttonText(cta)).click();
  browser.sleep(3000);
  return  titleName;
}
this.createContentBlockWithoutTitle = function(cta){
  utils.goToCreateContentBlock();
  utils.waitForVisibilityOf(element(by.id(browser.params.cmsInternalNameId)));
  var x = utils.autoGenerateString(3);
  let titleName = "testAuto-" + x +new Date().toISOString().slice(0, 10);
  element(by.id(browser.params.cmsInternalNameId)).sendKeys(titleName);
  gameResources.addRichText();
  element(by.buttonText(cta)).click();
  browser.sleep(3000);
  return  titleName;
}

};
module.exports = new content_block_common ();
