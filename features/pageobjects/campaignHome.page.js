const Page = require('./page');

class CampaignHomePage extends Page{

    get cookieAlert () {
        return $('.//div[@role="alertdialog"]')
    }

    get acceptCookieBtn () {
        return $('.//button[@id="onetrust-accept-btn-handler"]')
    }

    get carModelScreen () {
        return $('.//div[@id="nav:carMenuDesktop"]')
    }

    get ourCarsMenu () {
        return $('.//button[@data-autoid="nav:topNavCarMenu"]/em')
    }

    async acceptTheCookies () {
        await this.acceptCookieBtn.click();
    }

    async openOursCars () {
        await this.ourCarsMenu.click();
    }

    async open () {
        return super.open();
    }

}

module.exports = new CampaignHomePage();