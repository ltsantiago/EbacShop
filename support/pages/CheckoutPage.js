import { expect } from "@playwright/test";

export class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async gotoCheckout() {
    await this.page.goto("/checkout/");
  }
}