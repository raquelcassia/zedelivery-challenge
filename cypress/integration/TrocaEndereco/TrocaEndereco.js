/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Cliente acessa pagina principal após login

Given(/^que o cliente esteja logado na pagina principal$/, () => {
    cy.login();
});

// Cliente quer alterar o endereco para "estrada de jacarepagua 7655"
    

And(/^clique no campo de endereço atual apresentado no canto superior esquerdo na tela$/, () => {
    cy.contains("Receber agora em").click();
});

And(/^clique para alterar seu endereco$/, () => {
    cy.get("#delivery-options-tool-tip-address").click();
});

And(/^busque pelo endereco "([^"]*)" no pop up ENDEREÇO E DETALHES$/, (args1) => {
   cy.get("#address-search-input-address").type(args1);
});


And(/^clique na opção correta "([^"]*)"$/, (args1) => {
    cy.get("#aside").contains(args1).click();
});

And(/^selecione a opção Não tenho complemento$/, () => {
    cy.get("#address-details-checkbox-without-complement").click();
});

When(/^clicar no botao ver produtos disponiveis$/, () => {
    cy.get("#address-details-button-continue").click();
});

Then(/^será apresentado o novo endereço registrado como "([^"]*)" no canto superior esquerdo na tela$/, (args1) => {
    cy.get("#delivery-options-card > div.css-qbj9am-addressContainer", { timeout: 50000 }).should("contain", args1)
});

