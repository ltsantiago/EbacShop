import { test, expect } from "@playwright/test";
import { HomePage } from "../support/pages/HomePage";
import { ProductPage } from "../support/pages/ProductPage";

let homePage;
let productPage;
test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  productPage = new ProductPage(page);
});

test.describe("Vitrine de produtos", () => {
  test("Deve escolher um produto da vitrine", async ({ page }) => {
    const productName = "Augusta Pullover Jacket";

    await homePage.visitHomePage();
    await productPage.selectProductByName(productName);
    await productPage.validateProductPage(productName);
  });
  test("Deve selecionar tamanho e cor do produto", async ({ page }) => {
    const productName = "Augusta Pullover Jacket";

    await homePage.visitHomePage();
    await productPage.selectProductByName(productName);
    await productPage.validateProductPage(productName);

    await productPage.selectOptions();

    await productPage.validateAddToCartEnabled();
  });
  test("Deve selecionar todas as opções do produto", async ({ page }) => {
    const productName = "Augusta Pullover Jacket";

    await homePage.visitHomePage();
    await productPage.selectProductByName(productName);
    await productPage.validateProductPage(productName);

    await productPage.selectOptions();
    await productPage.validateAddToCartEnabled();
  });
});
