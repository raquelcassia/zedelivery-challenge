Feature: Validação da Idade do Cliente

Background: Cliente acessa pagina principal e aparece pop-up de validação de idade

    Given que o cliente tenha 18 anos ou mais
    And acesse a página "https://www.ze.delivery/"
    When for apresentado o pop-up perguntando Você tem 18 anos ou mais

Scenario: Cliente com 18 anos ou mais acessa página 
    
    And o cliente clicar na opção Sim
    Then o pop-up desaparecerá

Scenario: Cliente com menos de 18 anos acessa página 

    When o cliente clicar na opção Não
    Then o pop-up apresentará a mensagem Você precisa ter 18 anos ou mais para consumir bebidas alcoólicas.
