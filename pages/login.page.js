import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.continueButton = page.getByRole('button', {name: 'Continue'});
  }

}
