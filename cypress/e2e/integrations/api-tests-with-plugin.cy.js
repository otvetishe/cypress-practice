import 'cypress-plugin-api';

describe('API Tests with Cypress Plugin', () => {

    it('GET Users - Verify status and response', () => {
        cy.api('https://jsonplaceholder.typicode.com/users').its('status').should('eq', 200);
    });

    it('POST a new Comment - Verify creation', () => {
        cy.api('POST', 'https://jsonplaceholder.typicode.com/comments', {
            name: 'foo',
            email: 'foo@bar.com',
            body: 'bar'
        }).its('body').should('include', {
            name: 'foo',
            email: 'foo@bar.com',
            body: 'bar'
        });
    });

    it('PUT a Post - Verify update', () => {
        cy.api('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'updated title',
            body: 'updated body',
            userId: 1
        }).its('body').should('include', {
            title: 'updated title',
            body: 'updated body'
        });
    });

});
