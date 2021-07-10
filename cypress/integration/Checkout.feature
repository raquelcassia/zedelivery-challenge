Feature: Busca por Produto

    Eu quero confirmar minhas informações e inserir uma instrução para o distribuidor

Background: Cliente acessa pagina checkout

    Given que o cliente esteja na página de checkout "https://www.ze.delivery/checkout"

Scenario: Cliente quer verificar o valor total da compra e seguir para a página de metodo de pagamento

    Given que o cliente tenha unidades do produto "Beats Senses 313ml na sacola"
    When ele multiplicar o "valor unitario" com a "quantidade de unidades"
    And somar o "valor das quantidades" com o "frete"
    Then ele terá o valor total da compra
    And poderá seguir para selecionar a forma de pagamento

Scenario: Cliente quer confirmar o endereço Estrada de Jacarepaguá, 7655

    Given que o cliente queira confirmar o endereco apresentado na tela
    Then o endereço deverá ser "Estrada de Jacarepaguá, 7655"

Scenario: Cliente quer inserir uma instrução para o distribuidor 

    Given que o cliente queira adicionar uma isntrução paa o distribuidor
    When o pop for apresentado será inserido a instrucao "Olá, por favor tocar o interfone :)"
    And clicar no botao confirmar 
    Then a instrucao estará gravada

