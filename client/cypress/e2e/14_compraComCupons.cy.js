describe('processo de compra', () => {
    it('passes', () => {
        cy.viewport(1366, 768)
        cy.visit('http://localhost:5173/')
        cy.contains('button', 'Login').click();

        cy.get('#email').type('teste');
        cy.get('#password').type('1234');

        cy.wait(1000);
        cy.get('#cypress-login').click();
        cy.wait(1000);
        cy.get('#cypress-myaccount').click();
        cy.wait(1000);
        cy.get('#cypress-minhacontaedit').click();
        cy.wait(1000);
        cy.get('#cypress-minhaconta-cupom-tab').click();
        cy.wait(1000);

        //Copia ultimo cupom da lista

        cy.get('table tbody tr:last')
            .find('th:first')
            .then(($td) => {
                const codigoCupom = $td.text().trim();
                $td.addClass('highlighted-column');
                cy.wrap(codigoCupom).as('lastCodigoCupom');
            });

        cy.wait(1000);

        cy.get('#cypress-user-home').click();

        //Processo compra

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

        cy.get('@lastCodigoCupom').then((lastCodigoCupom) => {
            cy.get('#cypress-checkout-cupom-field')
                .clear()
                .type(lastCodigoCupom);
        });
        cy.wait(1000);
        cy.get('#cypress-checkout-cupom-ok-button').click();
        cy.wait(2000);
        cy.contains('button', 'Finalizar Compra').click();
        cy.wait(1000);
        cy.get('#cypress-finalizar-pagamento-modal-1').clear().type('30');
        cy.wait(2500);
        cy.get('#cypress-modal-finalizar-compra').click();
        cy.wait(2500);
        cy.get('#cypress-go-back-index').click();
    })
})