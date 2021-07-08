Feature: Acesso ao Cadastro 

    Eu quero fazer login para ter acesso ao meu cadastro.

Scenario: Cliente com mais de 18 anos quer acessar seu cadastro com dados corretos

    Given o usuario acessa o site "https://www.ze.delivery/"
    And o cliente informa que tem 18 anos ou mais
    And insere Email ""
    And insere Senha ""
    When o usuario clica no botao Entrar
    Then o usuario terá acesso a página principal da sua conta com sucesso.

Scenario: Cliente com mais de 18 anos quer acessar seu cadastro com Email incorreto

    Given o usuario acessa o site "https://www.ze.delivery/"
    And o cliente informa que tem 18 anos ou mais
    And insere Email ""
    And insere Senha ""
    When o usuario clica no botao Entrar
    Then será retornado uma mensagem de aviso E-mail não encontrado.

Scenario: Cliente com mais de 18 anos quer acessar seu cadastro com senha incorreta
 
    Given o usuario acessa o site "https://www.ze.delivery/"
    And o cliente informa que tem 18 anos ou mais
    And insere Email ""
    And insere Senha ""
    When o usuario clica no botao Entrar
    Then será retornado uma mensagem de aviso Senha inválida
.