import { test, expect } from "@playwright/test";    
import { HomePage } from "../support/pages/HomePage";
import { ProductPage } from "../support/pages/ProductPage";
import { CartPage } from "../support/pages/CartPage";
import { LoginPage } from "../support/pages/LoginPage";
import { CheckoutPage } from "../support/pages/CheckoutPage";


let homePage;
let productPage;
let cartPage;
let checkoutPage;
let loginPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  productPage = new ProductPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);
  loginPage = new LoginPage(page);
});

test.describe("Checkout", () => {
  test("Deve estar na tela de checkout", async ({ page }) => {
    // abrir home
    await homePage.visitHomePage();

    // selecionar produto
    const productName = "Augusta Pullover Jacket";

    await productPage.selectProductByName(productName);
    await productPage.validateProductPage(productName);

    //selecionar opções do produto

    await productPage.selectOptions();

    await cartPage.addCart();

    
    // acessar carrinho
    await checkoutPage.gotoCheckout();
  });
});