import { expect } from "@playwright/test";
const elements = {
  emailInput: "#reg_email",
  passwordInput: "#reg_password",
};

export class RegisterPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  async createUser(email, password) {
    await this.page.locator(elements.emailInput).fill(email);
    await this.page.locator(elements.passwordInput).fill(password);
    await this.page.getByRole("button", { name: "Register" }).click();
  }
}
