import { expect } from "@playwright/test";

export class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async gotoCheckout() {
    await this.page.goto("/checkout/");
  }

  async fillCheckoutForm() {
    await this.page
      .getByRole("textbox", { name: "Nome *", exact: true })
      .fill("Lucas");

    await this.page.getByRole("textbox", { name: "Sobrenome *" }).fill("Silva");

    await this.page
      .getByRole("textbox", { name: "Nome da empresa (opcional)" })
      .fill("QA Tech");

    await this.page.getByRole("textbox", { name: "Brasil" }).click();
    await this.page.getByRole("option", { name: "Brasil" }).click();

    await this.page
      .getByRole("textbox", { name: "Endereço *" })
      .fill("Rua Teste 123");

    await this.page
      .getByRole("textbox", { name: "Apartamento, suíte, unidade," })
      .fill("Apto 101");

    await this.page.getByRole("textbox", { name: "CEP *" }).fill("40000-000");

    await this.page.getByRole("textbox", { name: "Cidade *" }).fill("Salvador");

    await this.page
      .getByRole("textbox", { name: "Telefone *" })
      .fill("71999999999");

    await this.page
      .getByRole("textbox", { name: "Endereço de e-mail *" })
      .fill("lucas.qa@test.com");

    await this.page
      .getByRole("checkbox", { name: "Li e concordo com o(s) termos" })
      .check();

    await this.page.getByText("Cheque", { exact: true }).click();

    await this.page.getByRole("button", { name: "Finalizar compra" }).click();
  }

  async haveOrderReceivedMessage() {
    const orderReceivedMessage = this.page.locator(
      ".woocommerce-thankyou-order-received",
    );
    await expect(orderReceivedMessage).toBeVisible();
    await expect(this.page).toHaveURL(/order-received/);
  }
}
