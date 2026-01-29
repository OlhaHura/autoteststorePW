import { test, expect } from '@playwright/test';
import { MenuComponent } from '../components/menu.component';
import { ProductsPage } from '../pages/products.page';
import { CartPage} from '../pages/cart.page'

test('Test 10: Open the product page', async ({ page }) => {
    const menu = new MenuComponent(page);
    const product = new ProductsPage(page);
    await page.goto('/');

    //open subcategory page to select product
    await menu.booksMenuButton.first().hover();
    await menu.booksPaperbackSubCategory.click();
    await expect(page).toHaveURL(/path=65_67/);

    //open page by title
    await product.openProductPageByTitle('Paper Towns by John Green');
    await expect(page).toHaveURL(/product&path=65_67&product_id=113/);

});


test('Test 20: Then add the product to the cart', async ({ page }) => {
    const menu = new MenuComponent(page);
    const product = new ProductsPage(page);
    const cart = new CartPage(page);
    await page.goto('/');

    //open subcategory page to select product
    await menu.booksMenuButton.first().hover();
    await menu.booksPaperbackSubCategory.click();
    await expect(page).toHaveURL(/path=65_67/);

    //open page by title
    await product.openProductPageByTitle('Paper Towns by John Green');
    await expect(page).toHaveURL(/product&path=65_67&product_id=113/);

    //add the product to the cart
    await product.addToCart(2);
    await expect(page).toHaveURL(/cart/);

    //remove product from the cart
    await cart.removeFromCartButton.click();
    await expect(cart.emptyCartMessage).toBeVisible();

});
