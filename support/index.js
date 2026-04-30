const { test: base, expect } = require("@playwright/test");

import { ProductPage } from "./pages/ProductPage";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { MessageComponent } from "./pages/Components";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";    
import { LogoutPage } from "./pages/LogoutPage";
import dotenv from 'dotenv';
dotenv.config();


const test = base.extend({
  page: async ({ page }, use) => {
    const context = page;
    context["products"] = new ProductPage(page);
    context["home"] = new HomePage(page);
    context["register"] = new RegisterPage(page);
    context["login"] = new LoginPage(page);
    context["message"] = new MessageComponent(page);
    context["cart"] = new CartPage(page);
    context["checkout"] = new CheckoutPage(page);
    context["logout"] = new LogoutPage(page);

    await use(context);
  },
});

export { test, expect };