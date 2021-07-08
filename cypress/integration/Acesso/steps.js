/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

//   Eu quero fazer login para ter acesso ao meu cadastro.

Given(/^o usuario acessa o site "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

And(/^o cliente informa que tem 18 anos ou mais$/, () => {
	return true;
});

And(/^insere Email "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

And(/^insere Senha "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^o usuario clica no botao Entrar$/, () => {
	return true;
});

//Cliente com mais de 18 anos quer acessar seu cadastro com dados corretos 

Then(/^o usuario terá acesso a página principal da sua conta com sucesso$/, () => {
	return true;
});

//Cliente com mais de 18 anos quer acessar seu cadastro com Email incorreto

Then(/^será retornado uma mensagem de aviso E-mail não encontrado$/, () => {
	return true;
});

//Cliente com mais de 18 anos quer acessar seu cadastro com senha incorreta

Then(/^será retornado uma mensagem de aviso Senha inválida$/, () => {
	return true;
});
