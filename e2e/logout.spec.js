import { test, expect} from "../support/index";
import { faker } from "@faker-js/faker";    


test.describe("Logout de usuário", () => {
  test("Deve permitir logout de um usuário logado", async ({ page }) => {
    const email = faker.internet.email();
    const password = `Qa@${faker.internet.password(8, false, /[A-Z0-9]/)}`
   
    await page.login.visit();
    await page.register.createUser(email, password);
    await page.login.isLoggedIn();
    await page.logout.logout();
  });
});
