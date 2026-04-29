import { expect } from "@playwright/test";

export class LogoutPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  async logout() {
    const logoutButton = this.page
      .locator(".woocommerce-MyAccount-navigation")
      .getByRole("link", { name: "Sair" });

    await expect(logoutButton).toBeVisible();
    await logoutButton.click();
    await expect(this.page).toHaveURL(/minha-conta/);
  }
}
