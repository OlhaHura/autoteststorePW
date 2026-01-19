import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('Open the registration form', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await page.waitForSelector('.logo');

    await loginPage.menu.clickLoginOrRegister();
    await expect(page).toHaveURL(/account|login/);

    await loginPage.clickContinue();
    await expect(page).toHaveURL(/account|create/);

});
