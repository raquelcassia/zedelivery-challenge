Feature: Sacola 

 Eu quero modificar a quantidade e unidade de produtos na minha sacola antes de confirmar a compra

Background: Cliente deseja ver sacola 

    
    Given que o cliente está no painel de sacola

Scenario: Cliente adicionou na sacola um produto e não atingiu valor minimo do pedido

    Given que cliente adicionou 1 unidade do produto na sacola
    When o cliente adicionar mais 1 unidade do produto 
    Then a mensagem informando valor faltante para completar valor minimo será apresentada
    And o botao Continuar Compra estará desabilitado

 Scenario: Cliente quer adicionar mais unidades do produto que ultrapasse o valor minimo
    
    Given que cliente tem adicionado 2 unidades do produto na sacola
    When o cliente adicionar mais 1 unidade do produto 
    Then a mensagem informando valor faltante para completar valor minimo desaparece
    And o botao Continuar Compra é habilitado

Scenario: Cliente quer remover um produto da sacola
   
    Given que o cliente tem adicionado um produto na sacola 
    And clique no botao de lixeira do produto 
    When for apresentado o pop de confirmação de remoção do produto 
    And o cliente clicar no botao OK
    Then o produto será removido da sacola
     
