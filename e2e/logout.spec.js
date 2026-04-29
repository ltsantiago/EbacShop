import { test } from "@playwright/test";
import { LoginPage } from "../support/pages/LoginPage";
import { LogoutPage } from "../support/pages/LogoutPage";
import { RegisterPage } from "../support/pages/RegisterPage";
import { faker } from "@faker-js/faker";    
let loginPage;
let logoutPage;
let registerPage;

test.beforeEach(({ page }) => {
  loginPage = new LoginPage(page);
  logoutPage = new LogoutPage(page);
  registerPage = new RegisterPage(page);
});

test.describe("Logout de usuário", () => {
  test("Deve permitir logout de um usuário logado", async ({ page }) => {
    const email = faker.internet.email();
    const password = `Qa@${faker.internet.password(8, false, /[A-Z0-9]/)}`
    // Registrar o usuário
    await loginPage.visit();
    await registerPage.createUser(email, password);
    await loginPage.isLoggedIn();

    // Realizar o logout
    await logoutPage.logout();
  });
});
