import { expect } from "@playwright/test";

export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async addCart() {
    const checktButtonAddCart = this.page.getByRole("button", { name: "Comprar" });
    await expect(checktButtonAddCart).toBeVisible();
    await checktButtonAddCart.click();
  }

  async validateMessageCartPage() {
    await expect(this.page).toHaveURL(/cart/);
  }
}