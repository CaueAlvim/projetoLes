describe('adm visualiza e deleta algum usuario', () => {
    it('passes', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('button', 'Login').click();

        cy.get('#email').type('caue@mail.com');
        cy.get('#password').type('1234');
        cy.get('#cypress-login').click();
        cy.get('#cypress-myaccount').click();

        cy.get('#cypress-usuarioscadastrados').click();
        cy.get('#cypress-admusersearch').click();

        cy.wait(3000);

        cy.get('#cypress-logout').click();
    })
})