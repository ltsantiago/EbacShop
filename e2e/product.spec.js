import { test, expect } from "../support/index";

test.describe("Vitrine de produtos", () => {
  const productName = "Augusta Pullover Jacket";

  test("Deve escolher um produto da vitrine", async ({ page }) => {
    await page.home.visitHomePage();
    await page.products.selectProductByName(productName);
    await page.products.validateProductPage(productName);
  });
  test("Deve selecionar tamanho e cor do produto", async ({ page }) => {
    await page.home.visitHomePage();
    await page.products.selectProductByName(productName);
    await page.products.validateProductPage(productName);

    await page.products.selectOptions();
    await page.products.validateAddToCartEnabled();
  });
  test("Deve selecionar todas as opções do produto", async ({ page }) => {
    await page.home.visitHomePage();
    await page.products.selectProductByName(productName);
    await page.products.validateProductPage(productName);

    await page.products.selectOptions();
    await page.products.validateAddToCartEnabled();
  });
});
