describe('adm visualiza e deleta algum usuario', () => {
    it('passes', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:5173/')
        cy.contains('button', 'Login').click();

        cy.get('#email').type('caue@mail.com');
        cy.get('#password').type('1234');
        cy.get('#cypress-login').click();

        cy.wait(1000);
        
        cy.get('#cypress-myaccount').click();

        cy.get('#cypress-usuarioscadastrados').click();
        cy.get('#cypress-admusersearch').click();

        cy.wait(1000);

        cy.get('#cypress-moreoptionsusers').first().click();

        cy.wait(1500);

        cy.get('#cypress-moreoptionsusersdelete').click();

        cy.wait(2000);

        cy.get('#cypress-usuarioscadastrados').click();
        cy.get('#cypress-admusersearch').click();

        cy.wait(2500);

        cy.get('#cypress-logout').click();

    })
})