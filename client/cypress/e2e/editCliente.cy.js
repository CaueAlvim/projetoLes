describe('editar cliente', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/')
      cy.contains('button', 'Login').click();
  
      cy.get('#email').type('teste@mail.com');
      cy.get('#password').type('1234');
      cy.get('#cypress-login').click();
      cy.get('#cypress-myaccount').click();
      cy.get('#cypress-minhacontaedit').click();
  
      cy.get('#name').clear().type('Nome teste alterar');
      cy.get('#cypress-editarcliente').click();
      cy.get('#cypress-minhacontaedit').click();

      cy.wait(2000);
      cy.get('#cypress-logout').click();

    })
  })