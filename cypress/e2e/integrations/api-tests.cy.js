describe('API Tests with cy.request()', () => {

    it('GET Posts - Verify status and response', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(100); // Assuming 100 posts
        });
    });

    it('POST a new Post - Verify creation', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.include({
                title: 'foo',
                body: 'bar',
                userId: 1
            });
        });
    });

    it('DELETE a Post - Verify deletion', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            expect(response.status).to.eq(200);
        });
    });

});
