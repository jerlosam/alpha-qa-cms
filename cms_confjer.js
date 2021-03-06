let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var jasmineReporters = require('jasmine-reporters');
var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html'
});
exports.config = {
  _seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumAddress: 'http://10.207.32.66/wd/hub',
  suites: {
    LoginAndHomepage: '**/*LoginAndHomepage_spec.js',
    CreateMarketingPage: '**/*CreateMarketingPage_spec.js',
    CreateContentPage: '**/*CreateContentPage_spec.js',

    ALPHAPLTF_138: '**/*ALPHAPLTF-138_spec.js',
    ALPHAPLTF_139: '**/*ALPHAPLTF-139_spec.js',
    ALPHAPLTF_143: '**/*ALPHAPLTF-143_spec.js',
    ALPHAPLTF_145: '**/*ALPHAPLTF-145_spec.js',
    ALPHAPLTF_166: '**/*ALPHAPLTF-166_spec.js',
    ALPHAPLTF_189: '**/*ALPHAPLTF-189_spec.js',
    ALPHAPLTF_205: '**/*ALPHAPLTF-205_spec.js',
    ALPHAPLTF_209: '**/*ALPHAPLTF-209_spec.js',
    ALPHAPLTF_213: '**/*ALPHAPLTF-213_spec.js',
    ALPHAPLTF_214: '**/*ALPHAPLTF-214_spec.js',
    ALPHAPLTF_215: '**/*ALPHAPLTF-215_spec.js',
    ALPHAPLTF_222: '**/*ALPHAPLTF-222_spec.js',
    ALPHAPLTF_224: '**/*ALPHAPLTF-224_spec.js',
    ALPHAPLTF_227: '**/*ALPHAPLTF-227_spec.js',
    ALPHAPLTF_239: '**/*ALPHAPLTF-239_spec.js',
    ALPHAPLTF_243: '**/*ALPHAPLTF-243_spec.js',
    ALPHAPLTF_244: '**/*ALPHAPLTF-244_spec.js',
    ALPHAPLTF_245: '**/*ALPHAPLTF-245_spec.js',
    ALPHAPLTF_249: '**/*ALPHAPLTF-249_spec.js',
    ALPHAPLTF_274: '**/*ALPHAPLTF-274_spec.js',
    ALPHAPLTF_276: '**/*ALPHAPLTF-276_spec.js',
    ALPHAPLTF_275: '**/*ALPHAPLTF-275_spec.js',
    ALPHAPLTF_277: '**/*ALPHAPLTF-277_spec.js',
    ALPHAPLTF_278: '**/*ALPHAPLTF-278_spec.js',
    ALPHAPLTF_279: '**/*ALPHAPLTF-279_spec.js',
    ALPHAPLTF_298: '**/*ALPHAPLTF-298_spec.js',
    ALPHAPLTF_299: '**/*ALPHAPLTF-299_spec.js',
    ALPHAPLTF_300: '**/*ALPHAPLTF-300_spec.js',
    ALPHAPLTF_303: '**/*ALPHAPLTF-303_spec.js',
    ALPHAPLTF_305: '**/*ALPHAPLTF-305_spec.js',
    ALPHAPLTF_308: '**/*ALPHAPLTF-308_spec.js',
    ALPHAPLTF_319: '**/*ALPHAPLTF-319_spec.js',
    ALPHAPLTF_321: '**/*ALPHAPLTF-321_spec.js',
    ALPHAPLTF_332: '**/*ALPHAPLTF-332_spec.js',
    ALPHAPLTF_334: '**/*ALPHAPLTF-334_spec.js',
    ALPHAPLTF_335: '**/*ALPHAPLTF-335_spec.js',
    ALPHAPLTF_369: '**/*ALPHAPLTF-369_spec.js',
    ALPHAPLTF_371: '**/*ALPHAPLTF-371_spec.js',
    ALPHAPLTF_372: '**/*ALPHAPLTF-372_spec.js',
    ALPHAPLTF_373: '**/*ALPHAPLTF-373_spec.js',
    ALPHAPLTF_449: '**/*ALPHAPLTF-449_spec.js',
    ALPHAPLTF_450: '**/*ALPHAPLTF-450_spec.js',
    ALPHAPLTF_451: '**/*ALPHAPLTF-451_spec.js',
    ALPHAPLTF_452: '**/*ALPHAPLTF-452_spec.js',
    ALPHAPLTF_453: '**/*ALPHAPLTF-453_spec.js',
    ALPHAPLTF_158: '**/*ALPHAPLTF-158_spec.js',
    ALPHAPLTF_346: '**/*ALPHAPLTF-346_spec.js',
    ALPHAPLTF_466: '**/*ALPHAPLTF-466_spec.js',
    ALPHAPLTF_348: '**/*ALPHAPLTF-348_spec.js',
    ALPHAPLTF_499: '**/*ALPHAPLTF-499_spec.js',
     ALPHAPLTF_500: '**/*ALPHAPLTF-500_spec.js',
    ALPHAPLTF_506: '**/*ALPHAPLTF-506_spec.js',
  ALPHAPLTF_507: '**/*ALPHAPLTF-507_spec.js',
   ALPHAPLTF_508: '**/*ALPHAPLTF-508_spec.js',
   ALPHAPLTF_357: '**/*ALPHAPLTF-357_spec.js',
   ALPHAPLTF_258: '**/*ALPHAPLTF-258_spec.js',
   ALPHAPLTF_360: '**/*ALPHAPLTF-360_spec.js',
   ALPHAPLTF_580: '**/*ALPHAPLTF-580_spec.js',
   ALPHAPLTF_641: '**/*ALPHAPLTF-641_spec.js',
   ALPHAPLTF_704: '**/*ALPHAPLTF-704_spec.js',
   ALPHAPLTF_727: '**/*ALPHAPLTF-727_spec.js',
   ALPHAPLTF_519: '**/*ALPHAPLTF-519_spec.js',
    game_content: '**/*game_content.js',
    content_block: '**/*content_block.js',
    image_content: '**/*image_content.js',
    general_cms: '**/*general_cms.js',
    runner_test: '**/*Runner.js',
    menu_content: '**/*menu_content.js',
    slide_content: '**/*slide_content.js',
    content_page: '**/*content_page.js',
    all_cms: [
      '**/*ALPHAPLTF-138_spec.js',
      '**/*ALPHAPLTF-139_spec.js',
      '**/*ALPHAPLTF-143_spec.js',
      '**/*ALPHAPLTF-145_spec.js',
      '**/*ALPHAPLTF-346_spec.js',
      '**/*ALPHAPLTF-166_spec.js',
      '**/*ALPHAPLTF-189_spec.js',
      '**/*ALPHAPLTF-205_spec.js',
      '**/*ALPHAPLTF-209_spec.js',
      '**/*ALPHAPLTF-213_spec.js',
      '**/*ALPHAPLTF-214_spec.js',
      '**/*ALPHAPLTF-215_spec.js',
      '**/*ALPHAPLTF-222_spec.js',
      '**/*ALPHAPLTF-224_spec.js',
      '**/*ALPHAPLTF-227_spec.js',
      '**/*ALPHAPLTF-239_spec.js',
      '**/*ALPHAPLTF-243_spec.js',
      '**/*ALPHAPLTF-244_spec.js',
      '**/*ALPHAPLTF-245_spec.js',
      '**/*ALPHAPLTF-249_spec.js',
      '**/*ALPHAPLTF-274_spec.js',
      '**/*ALPHAPLTF-276_spec.js',
      '**/*ALPHAPLTF-279_spec.js',
      '**/*ALPHAPLTF-298_spec.js',
      '**/*ALPHAPLTF-299_spec.js',
      '**/*ALPHAPLTF-300_spec.js',
      '**/*ALPHAPLTF-305_spec.js',
      '**/*ALPHAPLTF-308_spec.js',
      '**/*ALPHAPLTF-334_spec.js',
      '**/*ALPHAPLTF-335_spec.js',
      '**/*ALPHAPLTF-369_spec.js',
      '**/*ALPHAPLTF-373_spec.js',
      '**/*ALPHAPLTF-449_spec.js',
      '**/*ALPHAPLTF-450_spec.js',
      '**/*ALPHAPLTF-215_spec.js',
      '**/*ALPHAPLTF-451_spec.js',
      '**/*ALPHAPLTF-453_spec.js',
      '**/*ALPHAPLTF-158_spec.js',
      '**/*ALPHAPLTF-466_spec.js',
      '**/*ALPHAPLTF-346_spec.js',
      '**/*ALPHAPLTF-499_spec.js',
      '**/*ALPHAPLTF-500_spec.js',
      '**/*ALPHAPLTF-506_spec.js',
 '**/*ALPHAPLTF-507_spec.js',
        '**/*ALPHAPLTF-508_spec.js',
        '**/*ALPHAPLTF-357_spec.js',
        '**/*ALPHAPLTF-258_spec.js',
        '**/*ALPHAPLTF-360_spec.js',
        '**/*ALPHAPLTF-580_spec.js',
        '**/*ALPHAPLTF-704_spec.js',
        '**/*ALPHAPLTF-727_spec.js',
        '**/*ALPHAPLTF-519_spec.js,',
    ]
  },

  params: {
    cmsUrl: 'https://contentmanager.makdev.intra-apps.com/', //CMS URL
    cmsUsernameId: 'internalLogin-username', //CMS USERNAME FIELD by ID
    cmsPasswordId: 'internalLogin-password', //CMS PASSWORD FIELD by ID
    cmsUsername: 'alphajirapd', //CMS VALID USERNAME CREDENTIAL
    cmsPassword: '@lphaplatform1!', //CMS VALID PASSWORD CREDENTIAL
    cmsCreateNewContentCss: '[href="/content/new"]', //CMS Create New Content by css
    cmsSlideTypeCss: 'a.bx-content-type-button.bx-slide-type', //CMS Create New Slide Type by css
    cmsSlideShowTypeCss: 'a.bx-content-type-button.bx-slideshow-type', //CMS Create New Slideshow Type by css
    cmsGamePageTypeCss: 'a.bx-content-type-button.bx-casino_game_page-type', //CMS Create New GamePage Type by css
    cmsMarketingPageTypeCss: 'a.bx-content-type-button.bx-marketing_page-type', //CMS Create New Marketing Page Type by css
    cmsContentPageTypeCss: 'a.bx-content-type-button.bx-content_page-type', //CMS Create New Content Page Type by css
    cmsInternalNameId: 'internal_name', //CMS Create New Content : Internal Name Field by ID
    cmsShortDescriptionId: 'short_description', //CMS Create New Content : Short Description Field by ID
    cmsTitleFieldId: 'title', //CMS Create New Content Title Field by ID
    cmsBylineFieldId: 'byline', // CMS Create New Content Byline Field by ID
    cmsPageTypeDropdownId: 'page_type', // CMS Create New Content Page Type Dropdown by ID
    cmsBackgroundId: 'background_color',
    cmsTextColorId: 'text_color',
    cmsLinkId: 'link_url',
    cmsSaveDraftCss: 'button.custom-cta.tertiary.cta-large', //CMS Create New Contents Save as Draft  Button by css
    cmsPublishedCss: 'button.custom-cta.primary.cta-large', //CMS Create New Contents Publish Button by css
    cmsSaveAsDraftButtonText: 'SAVE AS DRAFT', //CMS Create New Contents Save as Draft  Button by buttonText
    cmsDiscardButtonText: 'DISCARD', //CMS Create New Contents Discard Button by buttonText
    cmsPublishButtonText: 'PUBLISH', //CMS Create New Contents Publish Button by buttonText
    cmsSearchComponentId: 'new_slide', //CMS Create New Slide from Slideshow
    cmsSearchComponentCss: 'div.content-selector', //CMS Search Component from Slideshow by css
    cmsAddCss: 'button.custom-cta.tertiary.cta-medium', //CMS Add New Slide by css
    cmsDeleteCss: 'button.custom-cta.secondary.cta-medium', //CMS Delete Slide by css
    cmsComponentsHeaderXpath: '//*[contains(h4,"Components")]', //CMS Component Header by xpath
    cmsComponentsListHeaderText: 'Components List', //CMS Component Header by Text
    cmsDeleteIconCss: 'i.icon.icon-delete-text', //CMS Delete Icon in the List by css
    cmsNoSlidesAddedXpath: '//*[contains(text(),"You have no slides added.")]', //CMS Copy for No Slides Added by xpath
    cmsNoComponentsAddedXpath: '//*[contains(text(),"You have no components added.")]', //CMS Copy for No Components Added by xpath
    cmsLongDescriptionId: 'tinymce', //CMS Create New Content  : Long Description Field by ID
    cmsLongDescriptionContainerId: 'body_en', //CMS Create New Content  : Long Description Container by ID
    cmsRTFBoldId: 'mceu_3-button', //CMS Create New Content : RTF Bold Format ID
    cmsRTFItalicId: 'mceu_4-button', //CMS Create New Content : RTF Italic Format ID
    cmsRTFCenterAlignId: 'mceu_6-button', //CMS Create New Content : RTF Center Align Format ID
    cmsAddNewImageCss: 'a.bx-content-type-button.bx-image-type',
    cmsCardImageId: 'card_image_en', //CMS Create New Content : Card Image by ID
    cmsPageImageId: 'page_image_en', //CMS Create New Content : Page Image by ID
    cmsAddImageId: 'add_image_en', //CMS Create New Content : Add Image by ID
    cmsMetaDataFieldContainerCss: 'div.metafield-container', //CMS Create New Content : MetaData Field Container by Css
    cmsArrowDownCss: 'i.icon.icon-arrow-down', //CMS Create New Content : MetaData Arrow Down by Css
    cmsArrowUpCss: 'i.icon.icon-arrow-up', //CMS Create New Content : MetaData Arrow Up by Css
    cmsMetadataHeaderCss: 'header.metafield-label', //CMS Create New Content : MetaData Header  by Css
    cmsDescriptionId: 'description', //CMS Create New Content : MetaData Description Field by Id
    cmsOGSiteNameId: 'og:site_name', //CMS Create New Content : MetaData Site Name Field by Id
    cmsOGURLId: 'og:url', //CMS Create New Content : MetaData URL Field by Id
    cmsOGDescriptionId: 'og:description', //CMS Create New Content : MetaData OG Description Field by Id
    cmsOGTitleId: '', //CMS Create New Content : MetaData OG Title Field by Id
    cmsTwitterCardId: 'twitter:card', //CMS Create New Content : MetaData Twitter Card Field by Id
    cmsTwitterURLId: 'twitter:url', //CMS Create New Content : MetaData Twitter URL Field by Id
    cmsTwitterTitleId: 'twitter:title', //CMS Create New Content : MetaData Twitter Title Field by Id
    cmsTwitterDescriptionId: 'twitter:description', //CMS Create New Content : MetaData Twitter Description Field by Id
    cmsMetadataErrorCss: 'header.metafield-label > span.error-msg', //CMS Create New Content : MetaData Metadata Error Field by Css
    cmsExistingMenuXpath: '//div[2]/nav/a[1]', //CMS Menu Tab : Existing Menus Tab by xpath
    cmsCreateNewMenuXpath: '//div[2]/nav/a[2]', //CMS Menu Tab : Create New Menu Tab by xpath
    cmsPublishedMenuXpath: '//div/nav/ul/li[1]', //CMS Menu Tab : Published Menus Tab by xpath
    cmsDraftMenuXpath: '//div/nav/ul/li[2]', //CMS Menu Tab : Draft Menus Tab by xpath
    cmsUnpublishedMenu: '//div/nav/ul/li[3]', //CMS Menu Tab : Unpublished Menus Tab by xpath
    cmsDisabledArrowDownCss: ':disabled > i.icon.icon-arrow-down.static-icon', //CMS Create New Content : MetaData Arrow Down by Css
    cmsDisabledArrowUpCss: ' :disabled > i.icon.icon-arrow-up.static-icon', //CMS Create New Content : MetaData Arrow Up by Css
    cmsMenuCss: 'nav > a:nth-child(2)', //CMS Menu Tab by Css
    cmsSlugField: 'slug',
    cmsLastUpdate: 'contentManagementListUpdateTitle', //CMS Unpublished Tab: Last Update field by Id
    cmsUnpublishedName: 'contentManagementListNameTitle', //CMS Unpublished Tab: Name field by Id
    cmsUnpublishedAuthor: 'contentManagementListAuthorTitle', //CMS Unpublished Tab: Author field by Id
    cmsUnpublishedType: 'contentManagementListTypeTitle ', //CMS Unpublished Tab: Type field by Id
    cmsUnpublishedLanguage: 'contentManagementListLanguagesTitle', //CMS Unpublished Tab: Language field by Id
    cmsUnpublishedActions: 'contentManagementListActionsTitle',
    cmsCreateMenuTabCss: '[href="/menu"]', //CMS Create New Menu Tab CSS
    cmsCreateNewMenuCss: '[href="/menu/new"]', //CMS Create New Menu CSS
    cmsMenuItemsClassName: 'content-selector-panel', //CMS Menu Item Block ClassName
    cmsMenuItemsId: 'menu_items_en', // CMS Menu Item Id
    cmsAddMenuItemsClassName: 'content-selector-container', //CMS Add Menu Block Css
    displayAddMenuItemButtonText: 'Add Menu Item', //CMS Add Menu link by buttonText
    cmsAddInternalPage: 'SELECT INTERNAL PAGE', //CMS Select Internal Page by buttonText
    cmsSearchByName: 'searchBy', //CMS Search By Name by Id
    cmsNoSearchResult: '[placeholder]', //CMS By Id No search result
    cmsMultiSelectDropdownByCss: 'input.selected-elements', //CMS Multi Select Dropdown by CSS
    cmsMultiSelectContainerByCss: 'div.multi-select-container', //CMS Multi Select Contaitner by CSS
    cmsImageContentPageTypeCss: 'a.bx-content-type-button.bx-image-type',
 cmsLastUpdate : 'contentManagementListUpdateTitle',                           //CMS Unpublished Tab: Last Update field by Id
   cmsUnpublishedName : 'contentManagementListNameTitle',                        //CMS Unpublished Tab: Name field by Id
   cmsUnpublishedAuthor: 'contentManagementListAuthorTitle',                     //CMS Unpublished Tab: Author field by Id
   cmsUnpublishedType: 'contentManagementListTypeTitle',                         //CMS Unpublished Tab: Type field by Id
   cmsUnpublishedLanguage: 'contentManagementListLanguagesTitle',                //CMS Unpublished Tab: Language field by Id
   cmsContentPageTypeTitle: 'contentManagementListPageTypeTitle',                //CMS Content Page Type Title by Id
   cmsUnpublishedActions: 'contentManagementListActionsTitle',                   //CMS Slug By ID
   cmsTitleLabelXpath: '//div[2]/div/bx-content-type-selector-outlet/bx-content-type-form/bx-panel/div/div[2]/div/bx-content-type-form-body/bx-form/form/bx-tabs/div/bx-form-group[1]/div/bx-input-field-container/div/label',         //CMS Title Label by Xpath
   cmsPublishedContentTabXpath: '//div/bx-tabs/div/nav/ul/li[1]',                //CMS Published Content Tab by xpath
   cmsDraftContentTabXpath:  '//div/bx-tabs/div/nav/ul/li[2]',                   //CMS Draft Content by Xpath
   cmsUnpublishedTabXpath:  '//div/bx-tabs/div/nav/ul/li[3]',                    //CMS Unpublished Content Tab by Xpath
   cmsSearchSlideXpath:  '//div/bx-dynamic-loader-component/bx-content-selector/div/div[2]/div[2]/div/button',    //CMS Content Search Slide Link by Xpath
   cmsLanguageColumnCss: 'th.bx-content-languages',                              // CMS Language Column for Component / Slides By Css
   cmsArrowNextPaginationXpath: '//div/nav/span[2]',                        // CMS Pagination Next Arrow by Xpath
   cmsMenuThirdDraftListId: '7543db60-8b13-4ad4-8584-2353844910b4',      //Draft Menu
   cmsMenuContentListXpath: '//*/tr[1]/td[2]/span',                                       //CMS Menu Content List by Xpath
   cmsSaveChangesModalXpath: '//div/bx-dialog/div/div',                           //CMS Menu Save Changes Modal by Xpath
   cmsSaveChangesNoButtonXpath: '//div/div/section/div/button[1]',                      //CMS Save Changes No Button by Xpath
   cmsSaveChangesYesButtonXpath: '//div/div/section/div/button[2]',                       //CMS Save Changes Yes Button by Xpath
   cmsSaveChangesCloseButtonCss: 'button.close-btn'                              //CMS Save Changes Close Button by css


 },

 capabilities: {
   'browserName': 'chrome',
   //'chromeOptions': {
    //args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
  //
 },
   framework: 'jasmine2',
   onPrepare: function() {
     var browserName = browser.driver.session_.value_.caps_.map_.get("browserName");
     var junitReporter = new jasmineReporters.JUnitXmlReporter({
         savePath: 'target/junit/' + browserName + "/",
         consolidateAll: true
     });
     jasmine.getEnv().addReporter(junitReporter);

       jasmine.getEnv().addReporter(new SpecReporter({
           spec: {
               displayStacktrace: true
           }
       }));
       jasmine.getEnv().addReporter(reporter);
   },
   beforeLaunch: function() {
       return new Promise(function(resolve) {
           reporter.beforeLaunch(resolve);
       });
   },
   afterLaunch: function(exitCode) {
       return new Promise(function(resolve) {
           reporter.afterLaunch(resolve.bind(this, exitCode));
       });
   }
};
