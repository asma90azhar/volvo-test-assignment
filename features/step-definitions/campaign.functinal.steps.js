const { Given,Then, When } = require("@wdio/cucumber-framework");

const CampaignPage = require('../pageobjects/campaignHome.page')


When(/^I open the Campaign page$/, async () => {
	await CampaignPage.open()
});

Then(/^I expect cookie popup is displayed$/, async () => {
	await expect(CampaignPage.cookieAlert).toBeExisting()
});

When(/^I click accept button$/, async () => {
	await CampaignPage.acceptTheCookies()
});

Then(/^I expect cookie popup is not displayed$/, async() => {
	await expect(CampaignPage.cookieAlert).toBeExisting();
});

When(/^I clicked Our Cars from hearder$/, async() => {
	await CampaignPage.openOursCars()
});

Then(/^I expect the Model items is displayed$/, async() => {
	await expect(CampaignPage.carModelScreen).toBeExisting();
});
