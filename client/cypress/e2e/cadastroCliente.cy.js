describe('cadastro de cliente', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('button', 'Login').click();
    cy.contains('button', 'Registrar').click();

    cy.get('#name').type('Usuario teste');
    cy.get('#cpf').type('123.456.789-11');
    cy.get('#dtnasc').type('2000-01-01');
    cy.get('#generoCadastro').parent().click().get('ul > li[data-value="Masculino"]').click();
    cy.get('#telefone').type('(11)93456-7890');
    cy.get('#email').type('teste@mail.com');
    cy.get('#password').type('1234');
    cy.contains('button', 'Continuar Cadastro').click();

    cy.get('#cep').type('12345-678');
    cy.get('#rua').type('Rua Teste');
    cy.get('#numero').type('123');
    cy.get('#bairro').type('Bairro Teste');
    cy.get('#cidade').type('Cidade Teste');
    cy.get('#estadoCadastro')
      .parent()
      .click()
      .get('ul > li[data-value="SP"]')
      .click();
    cy.get('#pais').type('Brasil');
    cy.get('#tipoResidencia').type('Casa');
    cy.get('#tipoLogradouro').type('Rua');
    cy.get('#observacoes').type('Teste obs');
    cy.contains('button', 'Continuar Cadastro').click();
    
    cy.get('#nomeCartao').type('Nome Cartao teste');
    cy.get('#numCartao').type('1234 5678 9101 1121');
    cy.get('#cartaoCvc').type('123');
    cy.get('#bandeiraCartao')
    .parent()
    .click()
    .get('ul > li[data-value="Visa"]')
    .click();
    cy.contains('button', 'Finalizar Cadastro').click();

  })
})