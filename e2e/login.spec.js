import { test,expect } from "../support/index";
import {formatLoginMessage, requiredUser, requiredPassword, invalidEmail} from "../support/utils/formatter";


test.describe("Login de usuário", () => {
  test("Deve permitir login com credenciais válidas", async ({ page }) => {
    const user = {
      name: process.env.NAME,
      username: process.env.USERFULL,
      password: process.env.PASSWORD,
    };
  
    await page.login.visit();
    await page.login.submitForm(user.username, user.password);
    await page.login.isLoggedIn();
  });
  
  test("Não deve permitir login com credenciais inválidas", async ({ page }) => {
    const user = {
      username: "lucas",
      password: "123456",
    };
  
    await page.login.visit();
    await page.login.submitForm(user.username, user.password);
    const message = formatLoginMessage(user.username);
    await page.message.haveText(message);
  });
  
  test("Não deve permitir logar com campos vazios", async ({ page }) => {
    await page.login.visit();
    await page.login.submitForm("", "");
    const message = requiredUser;
    await page.message.haveText(message);
  });
  
  test("Não deve permitir logar com campo: [Username] vazio", async ({
    page,
  }) => {
    await page.login.visit();
    await page.login.submitForm("", "123213213");
    const message = requiredUser
    await page.message.haveText(message);
  });
  
  test("Não deve permitir logar com campo: [Password] vazio", async ({
    page,
  }) => {
    const user = {
      username: process.env.USERFULL,
      password: "",
    };
    await page.login.visit();
    await page.login.submitForm(user.username, "");
    const message = requiredPassword;
    await page.message.haveText(message);
  });
  
  test("Não deve permitir logar com email inválido", async ({ page }) => {
    await page.login.visit();
    await page.login.submitForm("invalid@email.com", "testestes");
    const message = invalidEmail;
    await page.message.haveText(message);
  });
});
