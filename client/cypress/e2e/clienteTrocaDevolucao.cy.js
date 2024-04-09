describe('cliente visualiza e solicita troca ou devolucao', () => {
    it('passes', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:5173/')
        cy.contains('button', 'Login').click();

        cy.get('#email').type('teste@mail.com');
        cy.get('#password').type('1234');
        cy.get('#cypress-login').click();

        cy.wait(1000);

        cy.get('#cypress-myaccount').click();

        cy.wait(1000);

        cy.get('#cypress-usuaripedidos').click();

        cy.wait(1000);

        cy.get('#cypress-moreoptionpedidos').click();

        cy.wait(1000);

        cy.get('#cypress-solicitartroca').click({ force: true });

        cy.wait(1000);

        cy.get('#label-troca-devolucao')
            .parent()
            .click()
            .get('ul > li[data-value="Troca"]')
            .click();

        cy.wait(1000);


        cy.get('#label-troca-devolucao')
            .parent()
            .click()
            .get('ul > li[data-value="Devolucao"]')
            .click();

        cy.wait(1000);

        cy.get('button').contains('Seguir').click();

        cy.wait(2500);

        cy.get('#cypress-logout').click();
    })
})