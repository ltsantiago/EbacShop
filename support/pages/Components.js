import { expect } from "@playwright/test";

export class MessageComponent {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  async haveText(message) {
    const toastMessage = this.page.locator(".woocommerce-error");
    await expect(toastMessage).toContainText(message), { timeout: 5000 };
  }

  async haveSuccessText(message) {
    const toastMessageSuccess = this.page.locator('.woocommerce-message');
    await expect(toastMessageSuccess).toContainText(message, { timeout: 5000 });
  }
}
