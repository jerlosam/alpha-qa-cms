var utils = require('../utils/utilities');

describe('Beatrix CMS: Add Card and Page Image', function() {
  var cmsAddCardImageLabel = element.all(by.className('imageselector-label')).get(0);
  var cmsAddPageImageLabel = element.all(by.className('imageselector-label')).get(1);
  var cmsUploadCardImageIcon = element.all(by.css('div.widget.widget-upload')).get(0);
  var cmsUploadPageImageIcon = element.all(by.css('div.widget.widget-upload')).get(1);
  var cmsCardImageDeleteIcon = element.all(by.css('i.icon.icon-delete-text')).get(1);
  var cmsPageImageDeleteIcon = element.all(by.css('i.icon.icon-delete-text')).get(2);
  var cmsCardImageAlt = element(by.id('card_image_en.alt'));
  var cmsPageImageAlt = element(by.id('page_image_en.alt'));
  var cmsCardImagePreview = element.all(by.css('div.imageselector-preview')).get(0);
  var cmsPageImagePreview = element.all(by.css('div.imageselector-preview')).get(1);

  it('Card and Page Image sections should display correct header and CTAs when no image is added', function(){
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.createContentPage();
    browser.driver.sleep(5000);
    expect(cmsAddCardImageLabel.getText()).toContain('Add Card Image*');
    expect(cmsAddPageImageLabel.getText()).toContain('Add Page Image*');
    expect(cmsUploadCardImageIcon.isPresent()).toBe(true);
    expect(cmsUploadPageImageIcon.isPresent()).toBe(true);
  });

  it('Card and Page Image sections should display correct header and CTAs when an image is uploaded', function(){
    utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
    expect(cmsAddCardImageLabel.getText()).toContain('Card Image Added');
    expect(cmsCardImageDeleteIcon.isPresent()).toBe(true);
    expect(cmsCardImagePreview.isPresent()).toBe(true);
    expect(cmsCardImageAlt.isPresent()).toBe(true);
    utils.uploadImageFile('page_image_en', '../data_files/testuploadfile.png');
    expect(cmsAddPageImageLabel.getText()).toContain('Page Image Added');
    expect(cmsPageImageDeleteIcon.isPresent()).toBe(true);
    expect(cmsPageImagePreview.isPresent()).toBe(true);
    expect(cmsPageImageAlt.isPresent()).toBe(true);
  });

  it('Card and Page Image sections should display correct header and CTAs when an image is deleted', function(){
    element(by.linkText('Delete')).click();
    element(by.linkText('Delete')).click();
    expect(cmsCardImagePreview.isPresent()).toBe(false);
    expect(cmsPageImagePreview.isPresent()).toBe(false);
    expect(cmsUploadCardImageIcon.isPresent()).toBe(true);
    expect(cmsUploadPageImageIcon.isPresent()).toBe(true);
    expect(cmsAddCardImageLabel.getText()).toContain('Add Card Image*');
    expect(cmsAddPageImageLabel.getText()).toContain('Add Page Image*');
  });
});
