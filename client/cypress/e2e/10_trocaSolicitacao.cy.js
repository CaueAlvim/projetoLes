describe('cliente visualiza e solicita troca ou devolucao', () => {
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

        cy.get('#cypress-user-solicitar-troca-2').click();

        cy.get('#cypress-modal-troca-checkbox-item-4').click();

        cy.wait(500);

        cy.get('#cypress-modal-troca-checkbox-item-5').click();

        cy.get('#cypress-modal-troca-textfield-item-4').then(($element) => {
            cy.wrap($element).type(1);
        });

        cy.get('#cypress-modal-troca-textfield-item-5').then(($element) => {
            cy.wrap($element).type(1);
        });
        
        cy.contains('button', 'Seguir').click();

        cy.wait(2000);

        cy.get('#cypress-logout').click();
    })
})