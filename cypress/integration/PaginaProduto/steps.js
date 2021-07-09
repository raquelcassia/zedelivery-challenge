/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Cliente quer acessar pagina principal do produto escolhido

Given(/^que o cliente esteja logado na pagina do produto "([^"]*)"$/, (args1) => {
    cy.login_e_busca(args1);
});


// Cliente quer adicionar 2 unidades do produto na sacola atrvés do botão Mais


Given(/^que o cliente queira adicionar 2 unidades do produto "([^"]*)" na sacola$/, (args1) => {
    cy.contains(args1, { timeout: 30000 }).should("contain", args1);
});

When(/^o cliente clicar no botao de Mais$/, () => {
    cy.get("#plus-button").click({force: true});
});

And(/^clicar em seguida no botão de adicionar$/, () => {
    cy.get("#add-product").click({force: true});
});

Then(/^sera apresentado o painel da sacola$/, () => {
    cy.get("#aside").should('be.visible');
});

And(/^tera 2 unidades do produto Beats Senses 313ml - Unidade$/, () => {
    cy.get("#product-amount", { timeout: 30000 }).should("contain", "02");
});


// Cliente quer adicionar 6 unidades do produto através do botão Mais 6


Given(/^que o cliente queira adicionar 6 unidades do produto "([^"]*)" na sacola$/, (args1) => {
    cy.contains(args1, { timeout: 30000 }).should("contain", args1);
});

And(/^o cliente clicar no botao de Mais 6 Unidades$/, () => {
    cy.get("#add-amount-6").click({ force: true });
});

When(/^clicar em seguida no botão de adicionar$/, () => {
    cy.get("#add-product").click({ force: true });
});

Then(/^sera apresentado o painel da sacola$/, () => {
    cy.get("#aside").should('be.visible');
});

Then(/^tera 6 unidades do produto "([^"]*)"$/, (args1) => {
    cy.get("#product-amount", { timeout: 30000 }).should("contain", "06");

});


// Cliente quer adicionar 10 unidades e depois retirar 1 unidade do produto através do botão Menos


Given(/^que o cliente queira adicionar 10 unidades do produto "([^"]*)" na sacola$/, (args1) => {
    cy.contains(args1, { timeout: 30000 }).should("contain", args1);
});

When(/^o cliente clicar no botao de Mais 10 Unidades$/, () => {
    cy.get("#add-amount-10").click({ force: true });
});

And(/^clicar no botao Menos para retirar 1 unidade$/, () => {
    cy.get("#minus-button").click({ force: true });
});

When(/^clicar em seguida no botão de adicionar$/, () => {
    cy.get("#add-product").click({ force: true });
});

Then(/^sera apresentado o painel da sacola$/, () => {
    cy.get("#aside").should('be.visible');
});

And(/^tera 9 unidades do produto "([^"]*)"$/, (args1) => {
    cy.get("#product-amount", { timeout: 30000 }).should("contain", "09");
});


// Cliente quer adicionar 10 unidades do produto através do botão Mais 10


Given(/^que o cliente queira adicionar 10 unidades do produto "([^"]*)" na sacola$/, (args1) => {
    cy.contains(args1, { timeout: 30000 }).should("contain", args1);
});

When(/^o cliente clicar no botao de Mais 10 Unidades$/, () => {
    cy.get("#add-amount-10").click({ force: true });
});

And(/^clicar em seguida no botão de adicionar$/, () => {
    cy.get("#add-product").click({ force: true });
});

Then(/^sera apresentado o painel da sacola$/, () => {
    cy.get("#aside").should('be.visible');
});

And(/^tera 10 unidades do produto "([^"]*)"$/, (args1) => {
    cy.get("#product-amount", { timeout: 30000 }).should("contain", "10");

});


// Cliente quer adicionar 15 unidades do produto através do botão Mais 15


Given(/^que o cliente queira adicionar 15 unidades do produto "([^"]*)" na sacola$/, (args1) => {
    cy.contains(args1, { timeout: 30000 }).should("contain", args1);
});

When(/^o cliente clicar no botao de Mais 15 Unidades$/, () => {
    cy.get("#add-amount-15").click({ force: true });
});

And(/^clicar em seguida no botão de adicionar$/, () => {
    cy.get("#add-product").click({ force: true });
});

Then(/^sera apresentado o painel da sacola$/, () => {
    cy.get("#aside").should('be.visible');
});

And(/^tera 15 unidades do produto "([^"]*)"$/, (args1) => {
    cy.get("#product-amount", { timeout: 30000 }).should("contain", "15");
});
