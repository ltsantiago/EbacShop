import { test, expect} from "../support/index";

test('Deve acessar a página inicial', async ({ page }) => {
  await page.home.visitHomePage();
});

