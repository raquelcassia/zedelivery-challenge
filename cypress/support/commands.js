Cypress.Commands.add("login", () => {
    cy.visit("https://www.ze.delivery/")
    cy.get("#age-gate-button-yes").click();
    
    cy.get("#welcome-button-sign-in").click();
    cy.get("#login-mail-input-email").type(Cypress.env("email_cliente"));
    cy.get("#login-mail-input-password").type(Cypress.env("senha_cliente"));
    cy.get("#login-mail-button-sign-in").click();

})

Cypress.Commands.add("login_e_busca", () => {
    cy.login();
/* 
    cy.log(Cypress.$(".optanon-allow-all accept-cookies-button").length);
    if (Cypress.$(".optanon-allow-all accept-cookies-button").length > 0) {
        cy.wrap($elemt).click();
    } */

    cy.get("#bag-pre-checkout").click();
    cy.get("#pre-checkout").should("be.visible")
    cy.wait(10000);
    cy.log(Cypress.$("#product-delete-button").length);
        if (Cypress.$(".css-xafw2q").length > 0) {
            cy.get(".css-xafw2q").each(($elemt) => {
                cy.wrap($elemt).click();
                cy.get("#primary-modal-button").click().pause();
            });
        }
    
    cy.get("#sidebar-header-close-button").click();
    cy.get("#search-product-input", { timeout: 60000 }).type("Beats Senses 313ml - Unidade");
    cy.contains("Beats Senses 313ml - Unidade", { timeout: 30000 }).click({ force: true });
    cy.contains("Beats Senses 313ml - Unidade").should("contain", "Beats Senses 313ml - Unidade");

})

Cypress.Commands.add("login_busca_painel", () => {
    cy.login_e_busca();
    cy.get("#add-product").click({ force: true });
})

Cypress.Commands.add("pag_checkout", () => {
    cy.login_e_busca();
    cy.get("#add-amount-6", { timeout: 60000 }).click({ force: true });
    cy.get("#add-product").click({ force: true });
    cy.get("#finish-order").click();
})

Cypress.Commands.add("pag_payment", () => {
    cy.pag_checkout();
    cy.get("#finish-order").click();

})
