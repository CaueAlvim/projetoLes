describe('cliente ver cupom gerado apos troca', () => {
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

      cy.wait(3000);
      
      cy.get('#cypress-logout').click();

    })
  })