import { expect } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;
  }

  async visitHomePage() {
    await this.page.goto("/");
    await expect(this.page).toHaveTitle(/EBAC/);
  }

  //   async selectProductByName(productName) {
  //     const productLink = this.page.locator('.product-block').first().locator('a');
  //     await productLink.click();
  //   }
}
