import LoginPage from "../../pageObjects/LoginPage"
import testData from "../../fixtures/credentials.json"

describe('Login Functionality', () => {

    beforeEach(() => {
        LoginPage.open();
      });
  

    it('Log in with valid credentials', () => {
      LoginPage.login(testData.userName, testData.password);
      cy.url().should('include', '/inventory.html');
    });
  

    it('Can not log in with an invalid username', () => {
      LoginPage.login(testData.invalidName, testData.password);
      LoginPage.errorMessage.should('be.visible')
    });
  
    
    it('Can not log in with an invalid password', () => {
        LoginPage.login(testData.userName, testData.invalidPassword);
        LoginPage.errorMessage.should('be.visible');
    });
  
    
    it('Should not log in with empty credentials', () => {
      LoginPage.open('https://www.saucedemo.com/');
      LoginPage.loginButton.click();
      LoginPage.errorMessage.should('be.visible');
    });
  
    
    it('Should not log in with a locked-out user', () => {
        LoginPage.login(testData.lockedUser, testData.invalidPassword);
        LoginPage.errorMessage.should('be.visible');
    });
  });
  