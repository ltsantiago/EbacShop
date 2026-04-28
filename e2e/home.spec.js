// @ts-check
import { test, expect } from '@playwright/test';

test('Deve acessar a página inicial', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/EBAC/);
});