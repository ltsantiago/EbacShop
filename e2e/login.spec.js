// @ts-check
import { test, expect } from "@playwright/test";

import dotenv from "dotenv";
dotenv.config();

import { LoginPage } from "../support/pages/LoginPage";



test("Deve permitir login com credenciais válidas", async ({ page }) => {
  const loginPage = new LoginPage(page);

  const user = {
    name: process.env.NAME,
    username: process.env.USERFULL,
    password: process.env.PASSWORD,
  };

  await loginPage.visit();

  await loginPage.submitForm(user.username, user.password);
  const title = page.locator("h1").filter({ hasText: "Minha conta" });
  await expect(title).toContainText("Minha conta");

});

test("Não deve permitir login com credenciais inválidas", async ({ page }) => {
  const user = {
    username: "lucas",
    password: "123456",
  };

  await page.goto("http://lojaebac.ebaconline.art.br/minha-conta/");

  await page.locator("#username").fill(user.username);
  await page.locator("#password").fill(user.password);
  await page.getByRole("button", { name: "Login" }).click();
  await expect(
    page.getByText(
      `Erro: O usuário ${user.username} não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.`,
    ),
  ).toBeVisible();
});

test("Não deve permitir logar com campos vazios", async ({ page }) => {
  const user = {
    username: "",
    password: "",
  };

  await page.goto("http://lojaebac.ebaconline.art.br/minha-conta/");

  await page.locator("#username").fill(user.username);
  await page.locator("#password").fill(user.password);
  await page.getByRole("button", { name: "Login" }).click();
  await expect(
    page.getByText(`Erro: Nome de usuário é obrigatório.`),
  ).toBeVisible();
});

test("Não deve permitir logar com campo: [Username] vazio", async ({
  page,
}) => {
  const user = {
    username: "",
    password: "123213213",
  };

  await page.goto("http://lojaebac.ebaconline.art.br/minha-conta/");

  await page.locator("#username").fill(user.username);
  await page.locator("#password").fill(user.password);
  await page.getByRole("button", { name: "Login" }).click();
  await expect(
    page.getByText(`Erro: Nome de usuário é obrigatório.`),
  ).toBeVisible();
});

test("Não deve permitir logar com campo: [Password] vazio", async ({
  page,
}) => {
  const user = {
    username: "lucastiago_silva@hotmail.com",
    password: "",
  };

  await page.goto("http://lojaebac.ebaconline.art.br/minha-conta/");

  await page.locator("#username").fill(user.username);
  await page.locator("#password").fill(user.password);
  await page.getByRole("button", { name: "Login" }).click();
  await expect(
    page.getByText(`Erro: O campo da senha está vazio.`),
  ).toBeVisible();
});

test("Não deve permitir logar com email inválido", async ({ page }) => {
  const user = {
    username: "lucastiago_silva@noutfond.com",
    password: "testestes",
  };

  await page.goto("http://lojaebac.ebaconline.art.br/minha-conta/");

  await page.locator("#username").fill(user.username);
  await page.locator("#password").fill(user.password);
  await page.getByRole("button", { name: "Login" }).click();
  await expect(
    page.getByText(`Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.`),).toBeVisible();
});
