import { test, expect} from "../support/index";
import { formatProductName } from "../support/utils/formatter";


test.describe("Checkout", () => {
  test("Deve estar na tela de checkout", async ({ page }) => {
    await page.home.visitHomePage();

    const productName = "Josie Yoga Jacket";

    await page.products.selectProductByName(productName);
    await page.products.validateProductPage(productName);

    await page.waitForTimeout(2000);
    await page.products.selectOptions();
    await page.cart.addCart();
    const successMessage = formatProductName(productName);
    await page.message.haveSuccessText(successMessage);
    await page.cart.checkButtonCart();
    await page.cart.checkButtonCheckout();
  });

  test("Deve realizar o pagamento via cheque com sucesso", async ({ page }) => {
    await page.home.visitHomePage();
    const productName = "Josie Yoga Jacket";

    await page.products.selectProductByName(productName);
    await page.products.validateProductPage(productName);
    await page.waitForTimeout(2000);
    await page.products.selectOptions();
    await page.cart.addCart();
    const successMessage = formatProductName(productName);
    await page.message.haveSuccessText(successMessage);
    await page.cart.checkButtonCart();
    await page.cart.checkButtonCheckout();

    await page.checkout.fillCheckoutForm();
    await page.checkout.haveOrderReceivedMessage();
  });
});
