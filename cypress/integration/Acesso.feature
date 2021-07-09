Feature: Acesso ao Cadastro 


Scenario: Cliente com mais de 18 anos quer acessar seu cadastro com dados corretos

    Given o usuario acessa o site "https://www.ze.delivery/"
    And o cliente informa que tem 18 anos ou mais
    And clica no botão Entrar
    And insere Email "email_cliente"
    And insere Senha "senha_cliente"
    When o usuario clica no botao Entrar
    Then o usuario terá acesso a página principal da sua conta com sucesso

Scenario: Cliente com mais de 18 anos quer acessar seu cadastro com Email incorreto

    Given o usuario acessa o site "https://www.ze.delivery/"
    And o cliente informa que tem 18 anos ou mais
    And clica no botão Entrar
    And insere Email "email_errado"
    And insere Senha "senha_cliente"
    When o usuario clica no botao Entrar
    Then será retornado uma mensagem de aviso E-mail não encontrado

Scenario: Cliente com mais de 18 anos quer acessar seu cadastro com senha incorreta
 
    Given o usuario acessa o site "https://www.ze.delivery/"
    And o cliente informa que tem 18 anos ou mais
    And clica no botão Entrar
    And insere Email "email_cliente"
    And insere Senha "senha_errada"
    When o usuario clica no botao Entrar
    Then será retornado uma mensagem de aviso Senha inválida