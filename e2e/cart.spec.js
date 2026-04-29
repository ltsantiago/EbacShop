import { test, expect } from "@playwright/test";
import { CartPage } from "../support/pages/CartPage";
import { HomePage } from "../support/pages/HomePage";
import { ProductPage } from "../support/pages/ProductPage";
import { MessageComponent } from "../support/pages/Components";

let homePage;
let productPage;
let cartPage;
let messageComponent;
test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  productPage = new ProductPage(page);
  cartPage = new CartPage(page);
  messageComponent = new MessageComponent(page);
});

test.describe("Carrinho de compras", () => {
  test("Deve adicionar produto ao carrinho", async ({ page }) => {
    // abrir home
    await homePage.visitHomePage();

    const productName = "Augusta Pullover Jacket";

    await homePage.visitHomePage();
    await productPage.selectProductByName(productName);
    await productPage.validateProductPage(productName);

  
    await productPage.selectSize("XS");
    await productPage.selectColor("Blue");

  
    await productPage.validateAddToCartEnabled();

    // clicar em adicionar ao carrinho
    await cartPage.addCart();

    // validar resultado
    const message = '“Augusta Pullover Jacket” foi adicionado no seu carrinho.';
    await messageComponent.haveSuccessText(message);
  });

  test("Deve acessar a página do carrinho", async ({ page }) => {
    await page.goto("/cart");
    await expect(page).toHaveURL(/cart/);
  });

  test("Deve alterar a quantidade do item no carrinho", async ({ page }) => {});
});
