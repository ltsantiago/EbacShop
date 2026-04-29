import { test, expect } from "@playwright/test";
import { RegisterPage } from "../support/pages/RegisterPage";
import { LoginPage } from "../support/pages/LoginPage";
import { LogoutPage } from "../support/pages/LogoutPage";
import { MessageComponent } from "../support/pages/Components";
import { faker } from '@faker-js/faker';

let loginPage;
let registerPage;
let logoutPage;
let messageComponent;

test.beforeEach(({ page }) => {
  loginPage = new LoginPage(page);
  registerPage = new RegisterPage(page);
  logoutPage = new LogoutPage(page);
  messageComponent = new MessageComponent(page);
});

test.describe("Registro de usuário", () => {
  test("Deve registrar um usuário com credenciais válidas", async ({
    page,
  }) => {
    const randomName = faker.internet.email(); 
    const randomPassword = faker.internet.password(); 

    await loginPage.visit();
    await registerPage.createUser(randomName, randomPassword);
    await loginPage.isLoggedIn();
  });

  test("Não deve registrar um usuário com os campos vazios", async ({
    page,
  }) => {
    await loginPage.visit();
    await registerPage.createUser("", "");
    const message = "Erro: Informe um endereço de e-mail válido.";
    await messageComponent.haveText(message);
  });

  test("Não deve registrar um usuário com campo:[email] vazio", async ({
    page,
  }) => {
    await loginPage.visit();
    await registerPage.createUser("", "testestes");
    const message = "Erro: Informe um endereço de e-mail válido.";
    await messageComponent.haveText(message);
  });

  test("Não deve registrar um usuário com campo:[senha] vazio", async ({
    page,
  }) => {
    await loginPage.visit();
    await registerPage.createUser("test@test.com", "");
    const message = "Erro: Digite a senha da conta.";
    await messageComponent.haveText(message);
  });

  test("Não deve registrar um usuário com e-mail já cadastrado", async ({
    page,
  }) => {
    const user = {
      email: process.env.USERFULL,
      password: process.env.PASSWORD,
    };
        
    await loginPage.visit();
    await registerPage.createUser(user.email, user.password);
    const message =
      "Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.";
    await messageComponent.haveText(message);
  });
});
