import { expect } from "@playwright/test";


export class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async selectProductByName(productName) {
    const product = this.page.getByRole("link", { name: productName }).nth(2);
    await expect(product).toBeVisible();
    await product.click();
  }

  async validateProductPage() {
    await expect(this.page).toHaveURL(/product/);
  }

  async selectSize(size) {
    const sizeOption = this.page.locator(`[data-value="${size}"]`);
    await sizeOption.click();
  }

  async selectColor(color) {
  const option = this.page.locator(`[data-value="${color}"]`)
  await option.click();
}

 async validateAddToCartEnabled() {
   const enableButton = this.page.getByRole('button', { name: 'Comprar' });
   await expect(enableButton).toBeEnabled();
 }
}
