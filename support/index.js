const { test: base, expect } = require("@playwright/test");

import { ProductsPage } from "./pages/ProductPage";
import { HomePage } from "./pages/RegisterPage";
import { RegisterPage } from "node:module";
import { LoginPage } from "./pages/LoginPage";
import { MessageError } from "./pages/Components";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";    
import dotenv from 'dotenv';
dotenv.config();


const test = base.extend({
  page: async ({ page }, use) => {
    const context = page;
    context["products"] = new ProductsPage(page);
    context["home"] = new HomePage(page);
    context["register"] = new RegisterPage(page);
    context["login"] = new LoginPage(page);
    context["errorMessage"] = new MessageError(page);
    context["cart"] = new CartPage(page);
    context["checkout"] = new CheckoutPage(page);

    await use(context);
  },
});

export { test, expect };