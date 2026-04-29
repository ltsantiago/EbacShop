import { expect } from "@playwright/test";

export class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async validateCheckoutPage() {
    await expect(this.page).toHaveURL(/checkout/);
  }
}