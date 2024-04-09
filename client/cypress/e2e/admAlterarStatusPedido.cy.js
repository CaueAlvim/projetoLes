describe('adm atualizar status pedido', () => {
    it('passes', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:5173/')
        cy.contains('button', 'Login').click();

        cy.get('#email').type('caue@mail.com');
        cy.get('#password').type('1234');
        cy.get('#cypress-login').click();

        cy.wait(1000);

        cy.get('#cypress-myaccount').click();

        cy.wait(1000);

        cy.get('#cypress-usuaripedidos').click();

        cy.wait(1000);

        cy.get('#cypress-moreoptionpedidos').click();

        cy.wait(1000);

        cy.get('#cypress-adm-alterar-status-pedido').click({ force: true });

        cy.wait(1000);

        cy.get('#alterarStatus')
            .parent()
            .click()
            .get('ul > li[data-value="ENCAMINHADO"]')
            .click();

        cy.wait(1000);

        cy.get('#alterarStatus')
            .parent()
            .click()
            .get('ul > li[data-value="AGUARDANDO PAGAMENTO"]')
            .click();

        cy.wait(1000);

        cy.get('#alterarStatus')
            .parent()
            .click()
            .get('ul > li[data-value="FINALIZADO"]')
            .click();

        cy.wait(1000);

        cy.get('button').contains('OK').click();

        cy.wait(2500);

        cy.get('#cypress-logout').click();
    })
})