describe('processo de compra', () => {
    it('passes', () => {
        cy.viewport(1366, 768)
        cy.visit('http://localhost:5173/')
        cy.contains('button', 'Login').click();

        cy.get('#email').type('teste');
        cy.get('#password').type('1234');
        cy.get('#cypress-login').click();

        cy.wait(1000);

        cy.get('.MuiGrid-root')
            .find('.MuiGrid-item')
            .eq(1)
            .find('#cypress-add-item-cart')
            .click();

        cy.wait(500);

        cy.get('.MuiGrid-root')
            .find('.MuiGrid-item')
            .eq(2)
            .find('#cypress-add-item-cart')
            .click();

        cy.wait(500);

        cy.get('.MuiGrid-root')
            .find('.MuiGrid-item')
            .eq(3)
            .find('#cypress-add-item-cart')
            .click();

        cy.get('#cypress-shoppingcart').click();

        cy.wait(1500);

        cy.contains('button', 'Ir para checkout').click();

        cy.wait(1500);

        cy.get('#selecionarEnderecoCheckout')
            .parent()
            .click()
            .get('ul > li')
            .first()
            .click();

        cy.wait(1500);

        cy.get('#selecionarCartaoCheckout-1')
            .parent()
            .click()
            .get('ul > li')
            .contains('1111.1111.1111.1111')
            .first()
            .click();

        cy.contains('button', 'Finalizar Compra').click();

        cy.wait(1000);

        cy.get('#cypress-finalizar-pagamento-modal-1').clear().type('149.97');

        cy.wait(500);

        cy.get('#cypress-modal-finalizar-compra').click();

        cy.wait(2500);

        cy.get('#cypress-go-back-index').click();

    })
})