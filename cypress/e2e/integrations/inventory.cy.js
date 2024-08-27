import LoginPage from "../../pageObjects/LoginPage"
import InventoryPage from "../../pageObjects/InventoryPage"
import ItemPage from "../../pageObjects/ItemPage"
import testData from "../../fixtures/credentials.json"



describe('Inventory page functionalities', () => {

    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(Cypress.env('USER_NAME'), Cypress.env('PASSWORD'));
        cy.url().should('include', '/inventory.html');
      });

      it('Verify UI elements on the Inventory Page', () => {
        InventoryPage.menu.should('be.visible');
        InventoryPage.shoppingCart.should('be.visible');
        InventoryPage.sortDropdown.should('be.visible');
      });

      it('Sorting dropdown is contained 4 options', () => {
        InventoryPage.sortDropdown.children('option').should('have.length', 4);
      })

      it('User can open Shopping Cart page', () => {
        InventoryPage.clickOnCart();
        cy.url().should('include', '/cart.html');
      })

      it('User open Item page by clicking on Item', () => {
        InventoryPage.selectItemByName("Sauce Labs Backpack");
        ItemPage.itemImage.should('be.visible');
        ItemPage.itemPrice.should('be.visible');
        ItemPage.itemName.should('be.visible');
        ItemPage.addToCartBtn.click();
        ItemPage.removeBtn.should('be.visible');
        ItemPage.removeBtn.click();
        ItemPage.addToCartBtn.should('be.visible');
      })

});