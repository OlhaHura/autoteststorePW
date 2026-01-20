import { BasePage } from './base.page';

export class RegistrationPage extends BasePage {
    constructor(page) {
        super(page);

        //buttons
        this.openLoginPageButton = page.getByRole('button', { name: 'login page' });

        //input
        this.firstNameInput = page.locator('#AccountFrm_firstname');
        this.lastNameInput = page.locator('#AccountFrm_lastname');
        this.emailInput = page.locator('#AccountFrm_email');
        this.phoneInput = page.locator('#AccountFrm_telephone');
        this.faxInput = page.locator('#AccountFrm_fax');
        this.companyInput = page.locator('#AccountFrm_company');
        this.address1Input = page.locator('#AccountFrm_address_1');
        this.address2Input = page.locator('#AccountFrm_address_2');
        this.cityInput = page.locator('#AccountFrm_city');
        this.zipInput = page.locator('#AccountFrm_postcode');
        this.loginNameInput = page.locator('#AccountFrm_loginname');
        this.passwordInput = page.locator('#AccountFrm_password');
        this.passwordConfirmInput = page.locator('#AccountFrm_confirm');

        //dropdowns
        this.regionDropdown = page.locator('#AccountFrm_zone_id');
        this.countryDropdown = page.locator('#AccountFrm_country_id');

        //radiobuttons
        this.subscribeYes = page.locator('#AccountFrm_newsletter1');
        this.subscribeNo = page.locator('#AccountFrm_newsletter0');

        //checbox
        this.privacyPolicyCheckbox = page.locator('#AccountFrm_agree');





    }

    async clickOpenLoginPageButton() {
        await this.openLoginPageButton.click();
    }

    async fillFirstName(firstName) {
        await this.firstNameInput.fill(firstName);
    }

    async fillLastName(lastName) {
        await this.lastNameInput.fill(lastName);
    }

    async fillEmail(email) {
        await this.emailInput.fill(email);
    }

    async fillPhone(phone) {
        await this.phoneInput.fill(phone);
    }

    async fillFax(fax) {
        await this.faxInput.fill(fax);
    }

    async fillComapny(company) {
        await this.companyInput.fill(company);
    }

    async fillAddress1(address1) {
        await this.address1Input.fill(address1);
    }

    async fillAddress2(address2) {
        await this.address2Input.fill(address2);
    }

    async fillCity(city) {
        await this.cityInput.fill(city);
    }

    async selectRegion(region) {
        await this.regionDropdown.selectOption(region);
    }

    async fillZIP(postcode) {
        await this.zipInput.fill(postcode);
    }

    async selectCountry(country) {
        await this.countryDropdown.selectOption(country);
    }

    async fillLoginName(loginName) {
        await this.loginNameInput.fill(loginName);
    }

    async fillPassword(password) {
        await this.passwordInput.fill(password);
    }

    async fillPasswordConfirm(passwordConfirm) {
        await this.passwordConfirmInput.fill(passwordConfirm);
    }

    async subscribeNewsletter(subscribe = true) {
        await (subscribe ? this.subscribeYes : this.subscribeNo).check();
    }

    async agreePrivacyPolicy(agree = true) {
        if (agree) {
            await this.privacyPolicyCheckbox.check();
        }
    }


}