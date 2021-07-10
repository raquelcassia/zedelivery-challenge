/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Cliente acessa pagina checkout

Given(/^que o cliente esteja na página de checkout "([^"]*)"$/, (args1) => {
    cy.pag_checkout(args1);
});


// Cliente quer confirmar o endereço Estrada de Jacarepaguá, 7655


Given(/^que o cliente queira confirmar o endereco apresentado na tela$/, () => {
    cy.get("#checkout-card-address-details").should("contain", "Receber agora em");
});

Then(/^o endereço deverá ser "([^"]*)"$/, (args1) => {
    cy.get("#checkout-card-address-details").should("contain", args1);

});


// Cliente quer inserir uma instrução para o distribuidor 


Given(/^que o cliente queira adicionar uma instrução paa o distribuidor$/, () => {
    cy.get("#checkout-textarea-checkout-comment").click();
});

When(/^o pop for apresentado será inserido a instrucao "([^"]*)"$/, (args1) => {
    cy.get("#checkout-textarea-modal-comment").clear();
    cy.get("#checkout-textarea-modal-comment").type(args1);
});

When(/^clicar no botao confirmar$/, () => {
    cy.get("#checkout-textarea-modal-button").click();
});

Then(/^a instrucao "([^"]*)" estará gravada$/, (args1) => {
    cy.get("#checkout-textarea-checkout-comment").should("contain", args1);
});


// Cliente quer verificar o valor total da compra e seguir para a página de metodo de pagamento


Given(/^que o cliente queira realizar a compra do produto "([^"]*)"$/, (args1) => {
    cy.get("#product-name").should("contain", args1);
});

And(/^quer verificar se no checkout consta 6 unidades$/, () => {
    cy.get("#product-amount").should("contain", "6")
   
});

And(/^sao no valor de 6,49$/, () => {
    cy.get("#products-summary").should("contain", "R$\u00a06,49")
    
});

And(/^o subtotal ficará no valor de 38,94$/, () => {
    cy.get("#subtotal").should("contain", "R$\u00a038,94")
    
});

And(/^terá frete de 3,99$/, () => {
    cy.get("#shipping-price").should("contain", "R$\u00a03,99")
});

When(/^o valor final da compra de 42,93 for apresentado na tela$/, () => {
    cy.get("#total-price").should("contain", "R$\u00a042,93")
});

Then(/^o cliente poderá seguir para selecionar a forma de pagamento$/, () => {
    cy.get("#finish-order").click();
});
