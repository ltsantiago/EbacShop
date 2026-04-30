import { vi } from "@faker-js/faker";
import { expect } from "@playwright/test";

export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async gotoCart() {
    await this.page.goto("/carrinho/");
  }
  async addCart() {
    const checktButtonAddCart = this.page.getByRole("button", {
      name: "Comprar ",
    });
    await expect(checktButtonAddCart).toBeVisible();
    await checktButtonAddCart.click();
  }

  async validateMessageCartPage() {
    await expect(this.page).toHaveURL(/product/);
  }

  async validateCartItem(productName) {
    const cartItems = this.page.locator(".cart_item");
    cartItems.first().waitFor();
    const cartItemName = cartItems.first().locator(".product-name a");
    await expect(cartItemName).toHaveText(productName);
  }

  async checkButtonCart() {
    this.page.getByRole("link", { name: "Ver carrinho" }).click();
    await expect(this.page).toHaveURL(/carrinho/);
  }

  async updateQuantity() {
    await this.page.getByRole("spinbutton", { name: "Qty" }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("spinbutton", { name: "Qty" }).fill("5");
    await this.page.getByRole("button", { name: "Update Cart", visible: true }).click();
  }

  async checkButtonCheckout() {
    const checkoutButton = this.page.getByRole("link", {
      name: "Concluir compra",
    });
    await expect(checkoutButton).toBeVisible();
    await checkoutButton.click();
    await expect(this.page).toHaveURL(/checkout/);
  }
}
