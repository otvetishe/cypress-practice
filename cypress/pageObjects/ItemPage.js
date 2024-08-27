import BasePage from './BasePage';


class ItemPage extends BasePage{

    get itemImage() {
        return cy.get('.inventory_details_img');
    }

    get itemDescription() {
        return cy.get('.inventory_details_desc');
    }

    get itemPrice() {
        return cy.get('.inventory_details_price');
    }

    get itemName() {
        return cy.get('.inventory_details_name');
    }

    get addToCartBtn() {
        return cy.get('.btn_inventory').contains('Add to cart');
      }

    get removeBtn() {
        return cy.get('.btn_inventory').contains('Remove');
    }

    selectItemByIndex(index) {
        cy.get('.inventory_item').eq(index).click();
      }

    clickOnCart() {
        cy.get('.shopping_cart_link').click();
      }
    

    

}

export default new ItemPage();