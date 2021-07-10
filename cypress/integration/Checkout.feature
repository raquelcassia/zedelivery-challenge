Feature: Busca por Produto

    Eu quero confirmar minhas informações e inserir uma instrução para o distribuidor

Background: Cliente acessa pagina checkout

    Given que o cliente esteja na página de checkout "https://www.ze.delivery/checkout"

Scenario: Cliente quer confirmar o endereço Estrada de Jacarepaguá, 7655

    Given que o cliente queira confirmar o endereco apresentado na tela
    Then o endereço deverá ser "Estrada de Jacarepaguá, 7655"

Scenario: Cliente quer inserir uma instrução para o distribuidor 

    Given que o cliente queira adicionar uma instrução paa o distribuidor
    When o pop for apresentado será inserido a instrucao "Olá, por favor tocar o interfone :)"
    And clicar no botao confirmar 
    Then a instrucao "Olá, por favor tocar o interfone :)" estará gravada

Scenario: Cliente quer verificar o valor total da compra e seguir para a página de metodo de pagamento

    Given que o cliente queira realizar a compra do produto "Beats Senses 313ml"
    And quer verificar se no checkout consta 6 unidades
    And sao no valor de 6,49
    And o subtotal ficará no valor de 38,94
    And terá frete de 3,99
    When o valor final da compra de 42,93 for apresentado na tela
    Then o cliente poderá seguir para selecionar a forma de pagamento