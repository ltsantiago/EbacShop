import { test, expect } from "../support/index";
import { formatProductName } from "../support/utils/formatter";

test.describe("Carrinho de compras", () => {
  const productName = "Josie Yoga Jacket";
  test("Deve adicionar produto ao carrinho", async ({ page }) => {
    await page.home.visitHomePage();
    await page.products.selectProductByName(productName);
    await page.products.validateProductPage(productName);
    await page.products.selectOptions();
    await page.cart.addCart();
    const successMessage = formatProductName(productName);
    await page.message.haveSuccessText(successMessage);
  });

  test("Deve adicionar produto e acessar a tela do carrinho", async ({
    page,
  }) => {
    await page.home.visitHomePage();

    await page.products.selectProductByName(productName);
    await page.products.validateProductPage(productName);

    await page.products.selectOptions();
    await page.cart.addCart();
    const successMessage = formatProductName(productName);
    await page.message.haveSuccessText(successMessage);
    await page.cart.checkButtonCart();
  });

  test("Deve alterar a quantidade de item no carrinho", async ({ page }) => {
    await page.home.visitHomePage();
    await page.products.selectProductByName(productName);
    await page.products.validateProductPage(productName);

    await page.products.selectOptions();
    await page.cart.addCart();
    const successMessage = formatProductName(productName);
    await page.message.haveSuccessText(successMessage);
    await page.cart.checkButtonCart();

    await page.cart.updateQuantity();
    const successMessageUpdate = `Carrinho atualizado.`;
    await page.message.haveSuccessText(successMessageUpdate);
  });
});
