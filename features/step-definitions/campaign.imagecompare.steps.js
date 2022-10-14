const { Given, When, Then } = require("@wdio/cucumber-framework");
const CampaignPage= require("../pageobjects/campaignHome.page");


Given(/^I open the campaign page$/, async () => {
	await CampaignPage.open()
    await browser.maximizeWindow();
    await CampaignPage.acceptTheCookies();
});

When(/^Page gets loaded capture screen$/,async() => {
	await browser.saveFullPageScreen('Campaign-Home'),{
        //hideAfterFirstScroll: [$('.//div[@id,"site-nav-topbar-wrapper"]/nav')],
        fullPageScrollTimeout: 1500,
        disableCSSAnimation: true}
});

Then(/^captured image compared with baseline$/, async() => {
	expect(await browser.checkFullPageScreen('Campaign-Home',{
        //hideAfterFirstScroll: [$('.//div[@id,"site-nav-topbar-wrapper"]/nav')],
        fullPageScrollTimeout: 1500,
        disableCSSAnimation: true
    })).toEqual(0)
});
