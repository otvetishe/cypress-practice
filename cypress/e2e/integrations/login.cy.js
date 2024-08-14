describe('Login Functionality', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
      });
  

    it('Log in with valid credentials', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
    });
  

    it('Can not log in with an invalid username', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').type('JohnDoe');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('.error-message-container').contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    });
  
    
    it('Can not log in with an invalid password', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('blabla123');
      cy.get('#login-button').click();
      cy.get('.error-message-container').contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    });
  
    
    it('Should not log in with empty credentials', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('#login-button').click();
      cy.get('.error-message-container').contains('Epic sadface: Username is required').should('be.visible');
    });
  
    
    it('Should not log in with a locked-out user', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').type('locked_out_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('.error-message-container').contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible');
    });
  });
  