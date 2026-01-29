import { BasePage } from './base.page';

export class CartPage extends BasePage {
    constructor(page) {
        super(page);

        //button
        this.removeFromCartButton = page.locator('a[href*="checkout/cart&remove="]');

        //message
        this.emptyCartMessage = page.locator('div.contentpanel', { hasText: 'Your shopping cart is empty!' });
    }

}