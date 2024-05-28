describe('processo de compra cadastrando novo cartão e endereço', () => {
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
            .eq(3)
            .find('#cypress-add-item-cart')
            .click();
        cy.wait(500);
        cy.get('.MuiGrid-root')
            .find('.MuiGrid-item')
            .eq(4)
            .find('#cypress-add-item-cart')
            .click();
        cy.wait(500);
        cy.get('.MuiGrid-root')
            .find('.MuiGrid-item')
            .eq(5)
            .find('#cypress-add-item-cart')
            .click();
        cy.get('#cypress-shoppingcart').click();
        cy.wait(1500);
        cy.contains('button', 'Ir para checkout').click();
        cy.wait(1500);

        //Cadastro novos dados

        cy.get('#cypress-checkout-cadastrar-endereco').click();

        cy.get('#cep').type('12345-678');
        cy.get('#rua').type('Checkout teste endereco');
        cy.get('#numero').type('345');
        cy.get('#bairro').type('Checkout novo bairro');
        cy.get('#cidade').type('Checkout nova cidade');
        cy.get('#estadoCadastro')
          .parent()
          .click()
          .get('ul > li[data-value="RJ"]')
          .click();
        cy.get('#pais').type('Brasil');
        cy.get('#tipoResidencia').type('Casa');
        cy.get('#tipoLogradouro').type('Rua');
        cy.get('#observacoes').type('Teste obs 2');
        cy.contains('button', 'Finalizar Cadastro').click();

        cy.wait(3000);

        cy.get('#cypress-checkout-cadastrar-cartao').click();

        cy.get('#nomeCartao').type('Cartao checkout');
        cy.get('#numCartao').type('6666 6666 6666 6666');
        cy.get('#cartaoCvc').type('321');
        cy.get('#bandeiraCartao')
          .parent()
          .click()
          .get('ul > li[data-value="Mastercard"]')
          .click();
        cy.contains('button', 'Finalizar Cadastro').click();
    
        cy.wait(3000);
        
        //Checkout

        cy.get('#selecionarEnderecoCheckout')
            .parent()
            .click()
            .get('ul > li')
            .contains('Checkout novo bairro')
            .first()
            .click();

        cy.wait(1500);

        cy.get('#selecionarCartaoCheckout-1')
            .parent()
            .click()
            .get('ul > li')
            .contains('2222.2222.2222.2222')
            .first()
            .click();

        cy.get('#cypress-checkout-add-card').click();

        cy.wait(1500);

        cy.get('#selecionarCartaoCheckout-2')
            .parent()
            .click()
            .get('ul > li')
            .contains('6666.6666.6666.6666')
            .first()
            .click();

        cy.contains('button', 'Finalizar Compra').click();

        cy.wait(1000);

        cy.get('#cypress-finalizar-pagamento-modal-1').clear().type('139.00');

        cy.get('#cypress-finalizar-pagamento-modal-2').clear().type('10.97');

        cy.wait(500);

        cy.get('#cypress-modal-finalizar-compra').click();

        cy.wait(2500);

        cy.get('#cypress-go-back-index').click();

    })
})