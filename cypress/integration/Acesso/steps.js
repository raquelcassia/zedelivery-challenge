/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

//   Eu quero fazer login para ter acesso ao meu cadastro.

Given(/^o usuario acessa o site "([^"]*)"$/, (url) => {
	cy.visit(url);
});

And(/^o cliente informa que tem 18 anos ou mais$/, () => {
	cy.get("#age-gate-button-yes").click();
});

And(/^clica no botão Entrar$/, () => {
	cy.get("#welcome-button-sign-in").click();
});

And(/^insere Email "([^"]*)"$/, (email_env) => {
	cy.get("#login-mail-input-email").type(Cypress.env(email_env));
});

And(/^insere Senha "([^"]*)"$/, (senha_env) => {
	cy.get("#login-mail-input-password").type(Cypress.env(senha_env));
});

When(/^o usuario clica no botao Entrar$/, () => {
	cy.get("#login-mail-button-sign-in").click();
});

//Cliente com mais de 18 anos quer acessar seu cadastro com dados corretos 

Then(/^o usuario terá acesso a página principal da sua conta com sucesso$/, () => {
	cy.get("#global-message-Sucesso", {timeout:30000}).should("contain","Sucesso");
});

//Cliente com mais de 18 anos quer acessar seu cadastro com Email incorreto

Then(/^será retornado uma mensagem de aviso E-mail não encontrado$/, () => {
	cy.contains("E-mail não encontrado.", {timeout:30000}).should("contain","E-mail não encontrado.");
});

//Cliente com mais de 18 anos quer acessar seu cadastro com senha incorreta

Then(/^será retornado uma mensagem de aviso Senha inválida$/, () => {
	cy.contains("Senha inválida", {timeout:30000}).should("contain","Senha inválida");
});
