/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given(/^que o cliente esteja logado na pagina principal$/, () => {
    cy.login();
});


// Cliente quer buscar por um produto existente no catalogo e ver suas informações.

Given(/^que o cliente queira buscar pelo produto "([^"]*)"$/, (args1) => {
});

When(/^inserir no campo busca o nome do produto "([^"]*)"$/, (args1) => {
    cy.get("#search-product-input", { timeout: 60000 }).type(args1);
});

And(/^clicar na opção onde tenha o produto$/, () => {
    cy.contains("Beats Senses 313ml - Unidade", { timeout: 30000 }).click({ force: true });
});

Then(/^será direcionado a pagina do produto "([^"]*)"$/, () => {
    cy.contains("Beats Senses 313ml - Unidade").should("contain", "Beats Senses 313ml - Unidade");
});


// Cliente quer buscar por um produto que não existe no catalogo e ver suas informações.


Given(/^que o cliente queira buscar pelo produto "([^"]*)"$/, () => {

});

When(/^inserir no campo busca o nome do produto "([^"]*)"$/, (args1) => {
    cy.get("#search-product-input", { timeout: 50000 }).type(args1);
});

Then(/^deverá ser apresentado a mensagem Putz, não conseguimos encontrar o produto "([^"]*)"$/, (args1) => {
    cy.get("#search-product-not-found", { timeout: 30000 }).should("contain", args1);
});
