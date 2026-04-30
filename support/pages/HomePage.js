import { expect } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;
  }

  async visitHomePage() {
    await this.page.goto("/");
    await expect(this.page).toHaveTitle(/EBAC/);
  }
}
