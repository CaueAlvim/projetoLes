describe('adm atualizar status pedido', () => {
    it('passes', () => {
        cy.viewport(1366, 768)
        cy.visit('http://localhost:5173/')
        cy.contains('button', 'Login').click();

        cy.get('#email').type('admin');
        cy.get('#password').type('1234');
        cy.get('#cypress-login').click();

        cy.wait(1000);

        cy.get('#cypress-myaccount').click();

        cy.wait(1000);

        cy.get('#cypress-usuaripedidos').click();

        cy.wait(1000);

        cy.get('#cypress-adm-alterar-status-pedido-1').click();

        cy.wait(1000);

        cy.get('#alterarStatus')
            .parent()
            .click()
            .get('ul > li[data-value="APROVADO"]')
            .click();

        cy.get('button').contains('OK').click();

        cy.wait(1000);

        cy.get('#cypress-adm-alterar-status-pedido-1').click();

        cy.get('#alterarStatus')
            .parent()
            .click()
            .get('ul > li[data-value="EM TRANSPORTE"]')
            .click();

        cy.get('button').contains('OK').click();

        cy.wait(1000);

        cy.get('#cypress-adm-alterar-status-pedido-1').click();

        cy.get('#alterarStatus')
            .parent()
            .click()
            .get('ul > li[data-value="ENTREGUE"]')
            .click();

        cy.get('button').contains('OK').click();

        cy.wait(2000);

        cy.get('#cypress-logout').click();
    })
})