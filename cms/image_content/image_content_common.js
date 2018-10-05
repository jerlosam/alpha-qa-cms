var utils = require('../../utils/utilities');
var gameResources = require('../game_content/game_common');

var image_content_common = function(){
this.createImageContent = function(cta)
{
  utils.goToCreateImageContent();
  var x = utils.autoGenerateString(3);
  let titleName = "testAuto-" + x +new Date().toISOString().slice(0, 10);
  gameResources.addInternalAndTitle(titleName);
  utils.uploadImageFile('image_en');
  element(by.id('image_en.alt')).sendKeys('test');
  element(by.buttonText(cta)).click();
  browser.sleep(3000);
  return  titleName;
}




};
module.exports = new image_content_common ();
