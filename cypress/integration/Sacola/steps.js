/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Cliente deseja ver sacola

Given(/^que o cliente está no painel de sacola$/, () => {
    cy.login_busca_painel();
    
});


//Cliente adicionou na sacola um produto e não atingiu valor minimo do pedido


Given(/^que cliente adicionou 1 unidade do produto na sacola$/, () => {
    cy.get("#product-amount", { timeout: 30000 }).should("contain", "01");
});

When(/^o cliente adicionar mais 1 unidade do produto$/, () => {
    cy.get("#product-plus-button").click();
});

Then(/^a mensagem informando valor faltante para completar valor minimo será apresentada$/, () => {
    cy.get("#progress-bar", { timeout: 30000 }).should("contain", "para o valor mínimo do pedido");
});

And(/^o botao Continuar Compra estará desabilitado$/, () => {
    cy.get("#finish-order").should('not.be.visible')
});


// Cliente quer adicionar mais unidades do produto que ultrapasse o valor minimo


Given(/^que cliente tem adicionado 2 unidades do produto na sacola$/, () => {
    cy.get("#product-plus-button").click();
    cy.get("#product-amount", { timeout: 30000 }).should("contain", "02").pause();
});

When(/^o cliente adicionar mais 1 unidade do produto$/, () => {
    cy.get("#product-plus-button").click();
    cy.wait(50000);
});

Then(/^a mensagem informando valor faltante para completar valor minimo desaparece$/, () => {
    cy.get("#progress-bar", { timeout: 50000 }).should('not.be.visible');
    cy.wait(50000);

});
Then(/^o botao Continuar Compra é habilitado$/, () => {
    cy.get("#finish-order").should('not.be.disabled')
});


// Cliente quer remover um produto da sacola


Given(/^que o cliente tem adicionado um produto na sacola$/, () => {
    cy.get("#product-card").should("be.visible");
});

And(/^clique no botao de lixeira do produto$/, () => {
    cy.get("#product-delete-button").click();
});

When(/^for apresentado o pop de confirmação de remoção do produto$/, () => {
    cy.contains("Você deseja remover este produto?").should("be.visible");
});

And(/^o cliente clicar no botao OK$/, () => {
    cy.get("#primary-modal-button").click();
});

Then(/^o produto será removido da sacola$/, () => {
    cy.get("#product-card").should("not.be.visible");
});
