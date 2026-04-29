import { test} from "@playwright/test";
import { CartPage } from "../support/pages/CartPage";
import { HomePage } from "../support/pages/HomePage";
import { ProductPage } from "../support/pages/ProductPage";
import { MessageComponent } from "../support/pages/Components";
import { LoginPage } from "../support/pages/LoginPage";

let homePage;
let productPage;
let cartPage;
let messageComponent;
let loginPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  productPage = new ProductPage(page);
  cartPage = new CartPage(page);
  messageComponent = new MessageComponent(page);
  loginPage = new LoginPage(page);
});

test.describe("Carrinho de compras", () => {
  test("Deve adicionar produto ao carrinho", async ({ page }) => {
    await homePage.visitHomePage();

    const productName = "Augusta Pullover Jacket";

    await productPage.selectProductByName(productName);
    await productPage.validateProductPage(productName);

    await page.waitForTimeout(2000);
    await productPage.selectOptions();


    await cartPage.addCart();

    
    const successMessage = `foi adicionado no seu carrinho.`;
    await messageComponent.haveSuccessText(successMessage);
  });

  test("Deve adicionar produto e acessar a tela do carrinho", async ({
    page,
  }) => {
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
  });

  test("Deve alterar a quantidade de item no carrinho", async ({ page }) => {
  
    //Adicionar produto no carrinho
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

    //Alterar quantidade do item
    await cartPage.updateQuantity();
    const successMessageUpdate = `Carrinho atualizado.`;
    await messageComponent.haveSuccessText(successMessageUpdate);
    await page.waitForTimeout(2000);
  });
});
