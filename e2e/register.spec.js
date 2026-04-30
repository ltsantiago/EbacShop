import { test, expect} from "../support/index";
import { faker } from '@faker-js/faker';
import { registerEmailRequired,registerPasswordRequired,duplicateEmailRegister} from "../support/utils/formatter";


test.describe("Registro de usuário", () => {
  test("Deve registrar um usuário com credenciais válidas", async ({
    page,
  }) => {
    const randomName = faker.internet.email(); 
    const randomPassword = faker.internet.password(); 

    await page.login.visit();
    await page.register.createUser(randomName, randomPassword);
    await page.login.isLoggedIn();
  });

  test("Não deve registrar um usuário com os campos vazios", async ({
    page,
  }) => {
    await page.login.visit();
    await page.register.createUser("", "");
    const message = registerEmailRequired;
    await page.message.haveText(message);
  });

  test("Não deve registrar um usuário com campo:[email] vazio", async ({
    page,
  }) => {
    await page.login.visit();
    await page.register.createUser("", "testestes");
    const message = registerEmailRequired;
    await page.message.haveText(message);
  });

  test("Não deve registrar um usuário com campo:[senha] vazio", async ({
    page,
  }) => {
    await page.login.visit();
    await page.register.createUser("test@test.com", "");
    const message = registerPasswordRequired;
    await page.message.haveText(message);
  });

  test("Não deve registrar um usuário com e-mail já cadastrado", async ({
    page,
  }) => {
    const user = {
      email: process.env.USERFULL,
      password: process.env.PASSWORD,
    };
        
    await page.login.visit();
    await page.register.createUser(user.email, user.password);
    const message = duplicateEmailRegister;
    await page.message.haveText(message);
  });
});
