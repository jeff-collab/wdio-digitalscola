import { expect } from "expect-webdriverio";


describe('User succes login test', () => {
    it('User succes login test', async() => {
        await browser.url('https://www.saucedemo.com/')

        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@value="Login"]')
        const cartIcon = await browser.$("#shopping_cart_container")
        const AddItem = await browser.$("#add-to-cart-sauce-labs-bolt-t-shirt")
        const Remove = await browser.$("#remove-sauce-labs-bolt-t-shirt")
        const cartButton= await browser.$('//a[@data-test="shopping-cart-link"]')
        
        // Login
        await usernameTextbox.setValue("standard_user")
        await passwordTextbox.setValue("secret_sauce")
        await loginButton.click()

        // Dashboard
        await expect(cartIcon).toBeDisplayed()

        //Add Item Sauce Labs Bolt T-Shirt
        await AddItem.click()

        //Validate item sukses ditambahkan ke cart
        await cartButton.click()
        await expect(Remove).toBeDisplayed()
    });
});