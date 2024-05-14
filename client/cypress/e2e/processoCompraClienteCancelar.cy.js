describe('cliente cancelar pedido', () => {
    it('passes', () => {
        cy.viewport(1366, 768)
        cy.visit('http://localhost:5173/')
        cy.contains('button', 'Login').click();

        cy.get('#email').type('teste');
        cy.get('#password').type('1234');
        cy.get('#cypress-login').click();

        cy.wait(1000);

        cy.get('#cypress-myaccount').click();

        cy.wait(1000);

        cy.get('#cypress-usuaripedidos').click();

        cy.wait(1000);

        cy.get('#cypress-cancelar-pedido-1').click();

        cy.wait(2000);

        cy.get('#cypress-logout').click();
    })
})