import { test, expect } from '@playwright/test';
import { MenuComponent } from '../components/menu.component';


test('Test 10: Open the category', async ({ page }) => {
    const menu = new MenuComponent(page);
    await page.goto('/');

    await menu.apparelMenuButton.click();
    await expect(page).toHaveURL(/category&path=68/);

    await menu.makeupMenuButton.click();
    await expect(page).toHaveURL(/category&path=36/);

    await menu.skincareMenuButton.click();
    await expect(page).toHaveURL(/category&path=43/);

    await menu.fragranceMenuButton.click();
    await expect(page).toHaveURL(/category&path=49/);

    await menu.menMenuButton.click();
    await expect(page).toHaveURL(/category&path=58/);

    await menu.hairCareMenuButton.click();
    await expect(page).toHaveURL(/category&path=52/);

    await menu.booksMenuButton.click();
    await expect(page).toHaveURL(/category&path=65/);

});


test('Test 20: Open all Apparel & accessories subcategories sequentially', async ({ page }) => {
    const menu = new MenuComponent(page);
    await page.goto('/');

    const subcategories = [
        { locator: menu.shoesSubCategory, urlPart: 'path=68_69' },
        { locator: menu.tShirtsSubCategory, urlPart: 'path=68_70' },
    ];

    for (const sub of subcategories) {
        await menu.apparelMenuButton.first().hover();
        await sub.locator.click();
        await expect(page).toHaveURL(new RegExp(sub.urlPart));
    }
});


test('Test 30: Open all Makeup subcategories sequentially', async ({ page }) => {
    const menu = new MenuComponent(page);
    await page.goto('/');

    const subcategories = [
        { locator: menu.cheeksSubCategory, urlPart: 'path=36_40' },
        { locator: menu.eyesSubCategory, urlPart: 'path=36_39' },
        { locator: menu.faceSubCategory, urlPart: 'path=36_38' },
        { locator: menu.lipsSubCategory, urlPart: 'path=36_41' },
        { locator: menu.nailsSubCategory, urlPart: 'path=36_42' },
        { locator: menu.valueSetsSubCategory, urlPart: 'path=36_37' },
    ];

    for (const sub of subcategories) {
        await menu.makeupMenuButton.first().hover();
        await sub.locator.click();
        await expect(page).toHaveURL(new RegExp(sub.urlPart));
    }
});


test('Test 40: Open all Skincare subcategories sequentially', async ({ page }) => {
    const menu = new MenuComponent(page);
    await page.goto('/');

    const subcategories = [
        { locator: menu.eyesSkincareSubCategory, urlPart: 'path=43_47' },
        { locator: menu.faceSkincareSubCategory, urlPart: 'path=43_46' },
        { locator: menu.giftIdeasSkincareSubCategory, urlPart: 'path=43_45' },
        { locator: menu.handsNailsSkincareSubCategory, urlPart: 'path=43_48' },
    ];

    for (const sub of subcategories) {
        await menu.skincareMenuButton.first().hover();
        await sub.locator.click();
        await expect(page).toHaveURL(new RegExp(sub.urlPart));
    }
});


test('Test 50: Open all Fragrance subcategories sequentially', async ({ page }) => {
    const menu = new MenuComponent(page);
    await page.goto('/');

    const subcategories = [
        { locator: menu.menFragranceSubCategory, urlPart: 'path=49_51' },
        { locator: menu.womenFragranceSubCategory, urlPart: 'path=49_50' },
    ];

    for (const sub of subcategories) {
        await menu.fragranceMenuButton.first().hover();
        await sub.locator.click();
        await expect(page).toHaveURL(new RegExp(sub.urlPart));
    }
});


test('Test 60: Open all Men subcategories sequentially', async ({ page }) => {
    const menu = new MenuComponent(page);
    await page.goto('/');

    const subcategories = [
        { locator: menu.bodyShowerMenSubCategory, urlPart: 'path=58_63' },
        { locator: menu.fragranceSetsMenSubCategory, urlPart: 'path=58_59' },
        { locator: menu.preShaveShavingMenSubCategory, urlPart: 'path=58_61' },
        { locator: menu.skincareMenSubCategory, urlPart: 'path=58_60' },
    ];

    for (const sub of subcategories) {
        await menu.menMenuButton.first().hover();
        await sub.locator.click();
        await expect(page).toHaveURL(new RegExp(sub.urlPart));
    }
});


test('Test 70: Open all Hair Care subcategories sequentially', async ({ page }) => {
    const menu = new MenuComponent(page);
    await page.goto('/');

    const subcategories = [
        { locator: menu.hairCareShampooSubCategory, urlPart: 'path=52_53' },
        { locator: menu.hairCareConditionerSubCategory, urlPart: 'path=52_54' },
    ];

    for (const sub of subcategories) {
        await menu.hairCareMenuButton.first().hover();
        await sub.locator.click();
        await expect(page).toHaveURL(new RegExp(sub.urlPart));
    }
});


test('Test 80: Open all Books subcategories sequentially', async ({ page }) => {
    const menu = new MenuComponent(page);
    await page.goto('/');

    const subcategories = [
        { locator: menu.booksAudioCDSubCategory, urlPart: 'path=65_66' },
        { locator: menu.booksPaperbackSubCategory, urlPart: 'path=65_67' },
    ];

    for (const sub of subcategories) {
        await menu.booksMenuButton.first().hover();
        await sub.locator.click();
        await expect(page).toHaveURL(new RegExp(sub.urlPart));
    }
});
