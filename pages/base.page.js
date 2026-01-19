import { MenuComponent } from '../components/menu.component';

export class BasePage {
  constructor(page) {
    this.page = page;
    this.menu = new MenuComponent(page);
  }

  async waitForPageLoaded() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async getTitle() {
    return await this.page.title();
  }

  async getUrl() {
    return this.page.url();
  }
}