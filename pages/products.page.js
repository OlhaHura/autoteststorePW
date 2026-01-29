import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
    constructor(page) {
        super(page);

        //title
        this.productTitle = page.locator('//a[contains(@class,"prdocutname")]');

        // tabs
        this.descriptionTab = page.locator('//a[@href="#tab-description" or contains(text(),"Description")]');
        this.reviewsTab = page.locator('//a[@href="#review" and contains(.,"Reviews")]');

        // product info
        this.productPrice = page.locator('//div[contains(@class,"product_price") or contains(.,"$")]');
        this.quantityInput = page.locator('//input[@name="quantity" or contains(@id,"qty")]');

        //buttons
        this.addToCartButton = page.locator('ul.productpagecart', { hasText: 'Add to Cart' });
        this.printButton = page.locator('//a[contains(text(),"Print") or contains(@onclick,"print")]');

    }

    async openProductPageByTitle(title) {
        const product = this.productTitle.filter({ hasText: title });
        await product.first().waitFor({ state: 'visible' });
        await product.first().click();
    }


    async addToCart(quantity) {
        await this.quantityInput.clear();
        await this.quantityInput.fill(String(quantity));
        await this.addToCartButton.click();
    }
}
