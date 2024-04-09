describe('processo de compra', () => {
    it('passes', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:5173/')
        cy.contains('button', 'Login').click();

        cy.get('#email').type('teste@mail.com');
        cy.get('#password').type('1234');
        cy.get('#cypress-login').click();

        cy.wait(1000);

        cy.get('#cypress-shoppingcart').click();

        cy.wait(1500);

        cy.contains('button', 'Ir para checkout').click();

        cy.wait(1500);
        cy.contains('button', 'Salvar').click();


        cy.get('#label-select-card')
            .parent()
            .click()
            .get('ul > li[data-value="1"]')
            .click();

        cy.wait(1500);

        cy.get('#label-select-address')
            .parent()
            .click()
            .get('ul > li[data-value="10"]')
            .click();

        cy.wait(1500);

        cy.contains('button', 'Finalizar Compra').click();

        cy.wait(1500);

        cy.contains('button', 'Voltar à tela inicial').click();

        cy.wait(1500);

        cy.get('#cypress-myaccount').click();

        cy.wait(2500);

        cy.get('#cypress-logout').click();
    })
})