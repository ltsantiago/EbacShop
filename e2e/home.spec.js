// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from '../support/pages/HomePage';

test('Deve acessar a página inicial', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.visitHomePage();
 
});

