/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Cliente acessa pagina checkout

Given(/^que o cliente esteja na página de checkout "([^"]*)"$/, (args1) => {
    cy.pag_checkout(args1);
});

// Cliente quer verificar o valor total da compra e seguir para a página de metodo de pagamento


Given(/^que o cliente tenha unidades do produto "([^"]*)"$/, (args1) => {
    console.log(args1);
    return true;
});

When(/^ele multiplicar o "([^"]*)" com a "([^"]*)"$/, (args1, args2) => {
    console.log(args1, args2);
    return true;
});

When(/^somar o "([^"]*)" com o "([^"]*)"$/, (args1, args2) => {
    console.log(args1, args2);
    return true;
});

Then(/^ele terá o valor total da compra$/, () => {
    return true;
});

Then(/^poderá seguir para selecionar a forma de pagamento$/, () => {
    return true;
});
