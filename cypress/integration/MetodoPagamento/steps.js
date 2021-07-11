/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Cliente acessa pagina Metodo de Pagamento

Given(/^que o cliente esteja na página de Metodo de Pagamento "([^"]*)"$/, (args1) => {
    cy.pag_payment(args1);
});


// Cliente quer realizar o pagamento com Cartão de Débito ou Crédito


Given(/^que o cliente queira realizar o pagamento com Cartão de Débito ou Crédito$/, () => {
    cy.contains("Cartão de Débito ou Crédito").click();
});

When(/^o botão de Finalizar Compra ficar habilitado$/, () => {
    cy.get("#payment-method-button-finish-purchase").should('be.visible')
});

/* Then(/^o cliente poderá finalizar a compra$/, () => {
    cy.get("#payment-method-button-finish-purchase").click();
}); */


// Cliente quer realizar o pagamento com Dinheiro sem precisar de troco



Given(/^que o cliente queira realizar o pagamento com Dinheiro$/, () => {
    cy.contains("Dinheiro").click();
});

When(/^o cliente clicar na opção Não Preciso de Troco$/, () => {
    cy.get("#offline-payment-method-checkbox").click();
});

Then(/^o botão finalizar compra será habilitado$/, () => {
    cy.get("#payment-method-button-finish-purchase").should('be.visible')
});

/* And(/^o cliente poderá finalizar a compra$/, () => {
    cy.get("#payment-method-button-finish-purchase").click();
}); */


// Cliente quer realizar o pagamento com Dinheiro inserindo troco maior que o valor total da compra


Given(/^que o cliente queira realizar o pagamento em Dinheiro$/, () => {
    cy.contains("Dinheiro").click();
});

When(/^o cliente inserir na opção no campo troco o valor de "([^"]*)"$/, (args1) => {
    cy.get("#offline-payment-method-input-change").type(args1);
});

Then(/^o botão finalizar compra será habilitado$/, () => {
    cy.get("#payment-method-button-finish-purchase").should('be.visible')
});

/* And(/^o cliente poderá finalizar a compra$/, () => {
    cy.get("#payment-method-button-finish-purchase").click();
}); */


// Cliente quer realizar o pagamento com Dinheiro inserindo troco menor que o valor total da compra


Given(/^que o cliente queira realizar o pagamento em Dinheiro$/, () => {
    cy.contains("Dinheiro").click();
});

When(/^o cliente inserir na opção no campo troco o valor de "([^"]*)"$/, (args1) => {
    cy.get("#offline-payment-method-input-change").type(args1);
});

Then(/^será apresentado a mensagem "([^"]*)"$/, (args1) => {
    cy.get("#offline-payment-method-input-change-error-message", { timeout: 100000 }).should("contain", args1);
});

And(/^o botão finalizar compra permanecerá desabilitado$/, () => {
    cy.get("#payment-method-button-finish-purchase").should('be.disabled')
});

 