describe('adm atualizar gerar cupom troca', () => {
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

        cy.get('#cypress-usuariopedidos-troca').click();

        cy.wait(1000);

        cy.get('#cypress-adm-alterar-status-pedido-troca-2').click();

        cy.wait(1000);

        cy.get('#alterarStatusTroca')
            .parent()
            .click()
            .get('ul > li[data-value="TROCADO"]')
            .click();

        cy.wait(500);
        
        cy.get('button').contains('OK').click();

        cy.wait(2000);

        cy.get('#cypress-logout').click();
    })
})