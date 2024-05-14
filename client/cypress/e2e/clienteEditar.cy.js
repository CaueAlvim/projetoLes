describe('editar cliente', () => {
    it('passes', () => {
      cy.viewport(1280, 720)
      cy.visit('http://localhost:5173/')
      cy.contains('button', 'Login').click();
  
      cy.get('#email').type('cypress@gmail.com');
      cy.get('#password').type('1234');

      cy.wait(1000);

      cy.get('#cypress-login').click();

      cy.wait(1000);

      cy.get('#cypress-myaccount').click();

      cy.wait(1000);
      
      cy.get('#cypress-minhacontaedit').click();

      cy.wait(2000);

      cy.get('#name').clear().type('Cypress alterar');
      cy.get('#cypress-editarcliente').click();
      cy.get('#cypress-minhacontaedit').click();

      cy.wait(3000);
      cy.get('#cypress-logout').click();

    })
  })