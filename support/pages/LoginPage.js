const elements = {
    usernameInput: "#username",
    passwordInput: "#password",
};

export class  LoginPage {
     /**
   * @param {import('playwright').Page} page
   */

    constructor(page) {
        this.page = page;
    }

    async visit(){
        await this.page.goto("/minha-conta/");
    }

    async submitForm(username, password){
        await this.page.locator(elements.usernameInput).fill(username);
        await this.page.locator(elements.passwordInput).fill(password);
        await this.page.getByRole("button", { name: "Login" }).click();
    }
}