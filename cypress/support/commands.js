// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
    cy.visit("https://www.ze.delivery/")
    cy.get("#age-gate-button-yes").click();
    cy.get("#welcome-button-sign-in").click();
    cy.get("#login-mail-input-email").type(Cypress.env("email_cliente"));
    cy.get("#login-mail-input-password").type(Cypress.env("senha_cliente"));
    cy.get("#login-mail-button-sign-in").click();
    
})

Cypress.Commands.add("login_e_busca", ()=> {
    cy.login();                                                

    cy.get("#bag-pre-checkout").click();                       
    cy.get("#pre-checkout").should("be.visible")              
    
    if (Cypress.$(".css-xafw2q").length>0){
        cy.get(".css-xafw2q").each(($elemt) => {
            cy.wrap($elemt).click();
        });
    }
    cy.get("#sidebar-header-close-button").click();
    cy.get("#search-product-input", { timeout: 60000 }).type("Beats Senses 313ml - Unidade");
    cy.contains("Beats Senses 313ml - Unidade", { timeout: 30000 }).click({ force: true });
    cy.contains("Beats Senses 313ml - Unidade").should("contain", "Beats Senses 313ml - Unidade");

})

Cypress.Commands.add("login_busca_painel", () =>{
    cy.login_e_busca();
    cy.get("#add-product").click({ force: true });
})