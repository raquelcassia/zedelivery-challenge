Feature: Validação da Idade do Cliente

Scenario: Cliente com 18 anos ou mais acessa página 

    Given que o cliente tenha 18 anos ou mais
    And acesse a página "https://www.ze.delivery/"
    And for apresentado o pop-up perguntando Você tem 18 anos ou mais?
    When o cliente clicar na opção Sim
    Then poderá prosseguir na mesma página

Scenario: Cliente com menos de 18 anos acessa página 

    Given que o cliente tenha menos que 18 anos
    And acesse a página "https://www.ze.delivery/"
    And for apresentado o pop-up perguntando Você tem 18 anos ou mais?
    When o cliente clicar na opção Não
    Then será redirecionado para pagina "https://www.ambev.com.br/sustentabilidade/consumo-responsavel/"
