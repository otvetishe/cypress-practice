import BasePage from './BasePage';


class InventoryPage extends BasePage{

    get menu() {
        return cy.get('#react-burger-menu-btn');
    }

    get shoppingCart() {
        return cy.get('.shopping_cart_link');
    }

    get sortDropdown() {
        return cy.get('.product_sort_container');
    }

    get errorMessage() {
        return cy.get('[data-test="error"]');
    }

    // selectItemByIndex(index) {
    //     cy.get('.inventory_item').eq(index).click();
    //   }

    selectItemByName(name) {
        cy.contains('.inventory_item_name', name).click();
      }

    clickOnCart() {
        cy.get('.shopping_cart_link').click();
      }

}

export default new InventoryPage();