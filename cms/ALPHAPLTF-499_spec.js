var utils = require('../utils/utilities');

describe('Beatrix CMS: Homepage', function() {
  var cmsExistingMenu = element(by.xpath(browser.params.cmsExistingMenuXpath));
  var cmsCreateNewMenu = element(by.xpath(browser.params.cmsCreateNewMenuXpath));
  var cmsPublishedMenu = element(by.xpath(browser.params.cmsPublishedMenuXpath));
  var cmsDraftMenu = element(by.xpath(browser.params.cmsDraftMenuXpath));
  var cmsUnplublishedMenu = element(by.xpath(browser.params.cmsUnpublishedMenu));

it('Should Have Menus in tabs', function(){
  browser.manage().deleteAllCookies();
  utils.loginToCms();
  element(by.xpath('/html/body/bx-app/bx-app/div[1]/bx-navigation/div/div[1]/nav/a[2]')).click();
  var cmsMenusTab = element(by.className('bx-navigation')).element(by.className('nav-link active'));
  expect(cmsMenusTab.getText()).toEqual('MENUS');
  browser.sleep(3000);
});

it('Should Have Existing Menus as default main tab', function(){
  expect(cmsExistingMenu.getText()).toEqual('Existing Menus');
  browser.sleep(3000);
});

it('Should Have Create New Menu in the subheader', function(){
  expect(cmsCreateNewMenu.getText()).toEqual('Create New Menu');
  browser.sleep(3000);
});

it('Should Have Published Menus in the secondary tab', function(){
  expect(cmsPublishedMenu.getText()).toEqual('Published Menus');
  browser.sleep(3000);
});

it('Should Have Draft Menus in the secondary tab', function(){
  expect(cmsDraftMenu.getText()).toEqual('Draft Menus');
  browser.sleep(3000);
});

it('Should Have Unpublished Menus in the secondary tab', function(){
  expect(cmsUnplublishedMenu.getText()).toEqual('Unpublished Menus');
  browser.sleep(3000);
});

});
