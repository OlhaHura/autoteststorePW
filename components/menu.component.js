export class MenuComponent {
  constructor(page) {
    this.page = page;

    this.loginOrRegisterButton = page.locator('a', {
      hasText: 'Login or register'
    });
  }

  async clickLoginOrRegister() {
    await this.loginOrRegisterButton.click();
  }
}
