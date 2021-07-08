Feature: Alterar o endereco para visualizar os produtos disponiveis

    Eu quero alterar o endereço para visualizar os produtos disponiveis em minha região.

Scenario: Cliente quer alterar o endereco para "estrada de jacarepagua 7655"
    
    Given que o cliente esteja logado na pagina principal 
    And clique no campo de endereço atual apresentado no canto superior esquerdo na tela
    And clique para alterar seu endereco
    And busque pelo endereco "estrada de jacarepagua 7655" no pop up ENDEREÇO E DETALHES
    And clique na opção correta retornada 
    And selecione a opção Não tenho complemento
    When clicar no botao ver produtos disponiveis 
    Then será apresentado o novo endereço registrado como "estrada de jacarepagua 7655" no canto superior esquerdo na tela