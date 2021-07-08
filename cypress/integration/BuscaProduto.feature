Feature: Busca por Produto

    Eu quero realizar uma busca por um produto 
    
Background: Cliente acessa pagina principal após login
    
    Given que o cliente esteja logado na pagina principal

Scenario: Cliente quer buscar por um produto existente no catalogo e ver suas informações.
    
    Given que o cliente queira buscar pelo produto "Beats Senses 313ml - Unidade"
    When inserir no campo busca o nome do produto
    And clicar na opção correta retornada
    Then será direcionado a pagina do produto "https://www.ze.delivery/entrega-produto/8601/beats-senses-313ml-unidade"

Scenario: Cliente quer buscar por um produto que não existe no catalogo e ver suas informações.

    Given que o cliente queira buscar pelo produto "Arco Iris Beats Senses"
    When inserir no campo busca o nome do produto
    Then deverá ser apresentado a mensagem Putz, não conseguimos encontrar o produto "Arco Iris Beats Senses"



