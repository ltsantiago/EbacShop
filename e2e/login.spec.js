import { test, expect } from "@playwright/test";
import { LoginPage } from "../support/pages/LoginPage";
import { MessageComponent } from "../support/pages/Components";
import { faker } from '@faker-js/faker';

let loginPage;
let messageComponent;

test.beforeEach(({ page }) => {
  loginPage = new LoginPage(page);
  messageComponent = new MessageComponent(page);
});


test.describe("Login de usuário", () => {
  test("Deve permitir login com credenciais válidas", async ({ page }) => {
    const user = {
      name: process.env.NAME,
      username: process.env.USERFULL,
      password: process.env.PASSWORD,
    };
  
    await loginPage.visit();
    await loginPage.submitForm(user.username, user.password);
    await loginPage.isLoggedIn();
  });
  
  test("Não deve permitir login com credenciais inválidas", async ({ page }) => {
    const user = {
      username: "lucas",
      password: "123456",
    };
  
    await loginPage.visit();
    await loginPage.submitForm(user.username, user.password);
    const message = `Erro: O usuário ${user.username} não está registrado neste site. Se você não está certo de seu nome de usuário, 
    experimente o endereço de e-mail.`;
    await messageComponent.haveText(message);
  });
  
  test("Não deve permitir logar com campos vazios", async ({ page }) => {
    await loginPage.visit();
    await loginPage.submitForm("", "");
    const message = `Erro: Nome de usuário é obrigatório.`;
    await messageComponent.haveText(message);
  });
  
  test("Não deve permitir logar com campo: [Username] vazio", async ({
    page,
  }) => {
    await loginPage.visit();
    await loginPage.submitForm("", "123213213");
    const message = `Erro: Nome de usuário é obrigatório.`;
    await messageComponent.haveText(message);
  });
  
  test("Não deve permitir logar com campo: [Password] vazio", async ({
    page,
  }) => {
    const user = {
      username: process.env.USERFULL,
      password: "",
    };
    await loginPage.visit();
    await loginPage.submitForm(user.username, "");
    const message = `Erro: O campo da senha está vazio.`;
    await messageComponent.haveText(message);
  });
  
  test("Não deve permitir logar com email inválido", async ({ page }) => {
    await loginPage.visit();
    await loginPage.submitForm("invalid@email.com", "testestes");
    const message = `Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.`;
    await messageComponent.haveText(message);
  });
});
