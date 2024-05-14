describe('adm visualiza e deleta algum usuario', () => {
    it('passes', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:5173/')
        cy.contains('button', 'Login').click();

        cy.get('#email').type('admin');
        cy.get('#password').type('1234');
        cy.get('#cypress-login').click();

        cy.wait(1000);
        
        cy.get('#cypress-myaccount').click();

        cy.wait(1000);

        cy.get('#cypress-usuarioscadastrados').click();

        cy.wait(1000);

        cy.get('#cypress-admusersearch').click();

        cy.wait(3000);

        cy.get('#cypress-logout').click();
    })
})