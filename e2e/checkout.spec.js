import { test, expect } from "../support/index";
import { formatProductName } from "../support/utils/formatter";


test.describe("Checkout", () => {
  const productName = "Josie Yoga Jacket";
  
  test.beforeEach(async ({ page }) => {
    await page.home.visitHomePage();
    // Ações repetidas antes de cada teste do describe
    await page.products.selectProductByName(productName);
    await page.products.validateProductPage(productName);
    // pequena espera para garantir renderização de opções (evitar flakiness)
    await page.waitForTimeout(2000);
    await page.products.selectOptions();
    await page.cart.addCart();
    const successMessage = formatProductName(productName);
    await page.message.haveSuccessText(successMessage);
    await page.cart.checkButtonCart();
    await page.cart.checkButtonCheckout();
  });

  test("Deve estar na tela de checkout", async ({ page }) => {
    await expect(page).toHaveURL(/checkout/);
  });

  test("Deve realizar o pagamento via cheque com sucesso", async ({ page }) => {
    await page.checkout.fillCheckoutForm();
    await page.checkout.haveOrderReceivedMessage();
  });

});
