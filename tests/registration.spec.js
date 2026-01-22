import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { RegistrationPage } from '../pages/registration.page';

test('Test 10: Open the registration form.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await page.waitForSelector('.logo');

    await loginPage.menu.clickLoginOrRegister();
    await expect(page).toHaveURL(/account|login/);

    await loginPage.clickContinue();
    await expect(page).toHaveURL(/account|create/);

});


test('Test 20: Fill the registration form. Field by field.', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await page.goto('/index.php?rt=account/create');
    await registrationPage.fillFirstName('Marco');
    await registrationPage.fillLastName('Polo');
    await registrationPage.fillEmail('marco.polo.1254@gmail.com');
    await registrationPage.fillPhone('+420 224 965 344');
    await registrationPage.fillFax('+420 224 923 077');
    await registrationPage.fillComapny('MDM');
    await registrationPage.fillAddress1('5th Ave');
    await registrationPage.fillAddress2('1023/32');
    await registrationPage.fillCity('Some City');
    await registrationPage.selectRegion('Bristol');
    await registrationPage.fillZIP('20493');
    await registrationPage.selectCountry('Uganda');
    await registrationPage.fillLoginName('marco_polo_1254');
    await registrationPage.fillPassword('123456');
    await registrationPage.fillPasswordConfirm('123456');
    await registrationPage.subscribeNewsletter(false);
    await registrationPage.agreePrivacyPolicy(true);

    //check the fileds
    await expect(registrationPage.firstNameInput).toHaveValue('Marco');
    await expect(registrationPage.lastNameInput).toHaveValue('Polo');
    await expect(registrationPage.emailInput).toHaveValue('marco.polo.1254@gmail.com');
    await expect(registrationPage.phoneInput).toHaveValue('+420 224 965 344');
    await expect(registrationPage.faxInput).toHaveValue('+420 224 923 077');
    await expect(registrationPage.companyInput).toHaveValue('MDM');
    await expect(registrationPage.address1Input).toHaveValue('5th Ave');
    await expect(registrationPage.address2Input).toHaveValue('1023/32');
    await expect(registrationPage.cityInput).toHaveValue('Some City');
    await expect(registrationPage.zipInput).toHaveValue('20493');
    await expect(registrationPage.loginNameInput).toHaveValue('marco_polo_1254');
    await expect(registrationPage.passwordInput).toHaveValue('123456');
    await expect(registrationPage.passwordConfirmInput).toHaveValue('123456');
    await expect(registrationPage.subscribeNo).toBeChecked();
    await expect(registrationPage.subscribeYes).not.toBeChecked();
    await expect(registrationPage.privacyPolicyCheckbox).toBeChecked();

});


test('Test 30: Empty registration form. Validation errors.', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await page.goto('/index.php?rt=account/create');

    await expect(registrationPage.firstNameInput).toBeVisible();
    await expect(registrationPage.emailInput).toBeVisible();

    await registrationPage.agreePrivacyPolicy(true);
    await registrationPage.clickContinueButton();

    const alertText = await registrationPage.getAlertText();

    const expectedMessages = [
        'Login name must be alphanumeric only and between 5 and 64 characters!',
        'First Name must be between 1 and 32 characters!',
        'Last Name must be between 1 and 32 characters!',
        'Email Address does not appear to be valid!',
        'Address 1 must be between 3 and 128 characters!',
        'City must be between 3 and 128 characters!',
        'Zip/postal code must be between 3 and 10 characters!',
        'Password must be between 4 and 20 characters!'
    ];

    for (const message of expectedMessages) {
        expect(alertText).toContain(message);
    }
});


test('Test 40: Error: You must agree to the Privacy Policy!', async ({ page }) => {
   const registrationPage = new RegistrationPage(page);

    await page.goto('/index.php?rt=account/create');

    await expect(registrationPage.firstNameInput).toBeVisible();
    await expect(registrationPage.emailInput).toBeVisible();

    await registrationPage.clickContinueButton();

    const alertText = await registrationPage.getAlertText();

    const expectedMessages = [
        'Error: You must agree to the Privacy Policy!',
    ];

    for (const message of expectedMessages) {
        expect(alertText).toContain(message);
    }

});
