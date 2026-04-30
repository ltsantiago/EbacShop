import { test, expect } from "@playwright/test";
import { HomePage } from "../support/pages/HomePage";
import { ProductPage } from "../support/pages/ProductPage";
import { CartPage } from "../support/pages/CartPage";
import { LoginPage } from "../support/pages/LoginPage";
import { CheckoutPage } from "../support/pages/CheckoutPage";
import { MessageComponent } from "../support/pages/Components";

let homePage;
let productPage;
let cartPage;
let checkoutPage;
let loginPage;
let messageComponent;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  productPage = new ProductPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);
  loginPage = new LoginPage(page);
  messageComponent = new MessageComponent(page);
});

test.describe("Checkout", () => {
  test("Deve estar na tela de checkout", async ({ page }) => {
    await homePage.visitHomePage();

    const productName = "Josie Yoga Jacket";

    await productPage.selectProductByName(productName);
    await productPage.validateProductPage(productName);

    await page.waitForTimeout(2000);
    await productPage.selectOptions();
    await cartPage.addCart();
    const successMessage = `foi adicionado no seu carrinho.`;
    await messageComponent.haveSuccessText(successMessage);
    await cartPage.checkButtonCart();
    await cartPage.checkButtonCheckout();
  });

  test("Deve realizar o pagamento via cheque com sucesso", async ({ page }) => {
    await homePage.visitHomePage();

    const productName = "Josie Yoga Jacket";

    await productPage.selectProductByName(productName);
    await productPage.validateProductPage(productName);

    await page.waitForTimeout(2000);
    await productPage.selectOptions();
    await cartPage.addCart();
    const successMessage = `foi adicionado no seu carrinho.`;
    await messageComponent.haveSuccessText(successMessage);
    await cartPage.checkButtonCart();
    await cartPage.checkButtonCheckout();

    await checkoutPage.fillCheckoutForm();
    await checkoutPage.haveOrderReceivedMessage();
  });
});
