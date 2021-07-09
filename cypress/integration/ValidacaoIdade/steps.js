/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Cliente acessa pagina principal e aparece pop-up de validação de idade

Given(/^que o cliente tenha 18 anos ou mais$/, () => {
});

And(/^acesse a página "([^"]*)"$/, (url) => {
    cy.visit(url);
});

When(/^for apresentado o pop-up perguntando Você tem 18 anos ou mais$/, () => {
    cy.contains("Você tem 18 anos ou mais?").should('be.visible');
});

// Cliente com 18 anos ou mais acessa página 

And(/^o cliente clicar na opção Sim$/, () => {
    cy.get("#age-gate-button-yes").click();
});

Then(/^o pop-up desaparecerá$/, () => {
    cy.contains("Você tem 18 anos ou mais?").should('not.be.visible')
});

// Cliente com menos de 18 anos acessa página

When(/^o cliente clicar na opção Não$/, () => {
    cy.get("#age-gate-button-no").click();
});

Then(/^o pop-up apresentará a mensagem Você precisa ter 18 anos ou mais para consumir bebidas alcoólicas.$/, () => {
    cy.contains("Você precisa ter 18 anos ou mais para consumir bebidas alcoólicas.").should('be.visible');
});




