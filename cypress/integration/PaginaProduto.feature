Feature: Pagina do Produto

    Eu quero adicionar unidades do produto escolhido na sacola através da pagina do produto

Scenario: Cliente quer adicionar 2 unidades do produto na sacola atrvés da pagina principal do produto

    Given que o cliente esteja na pagina do produto "https://www.ze.delivery/entrega-produto/8601/beats-senses-313ml-unidade"
    And queira adicionar 2 unidades na sacola 
    When o cliente clicar no botao de Mais
    And clicar em seguida no botão de adicionar
    Then sera apresentado o painel da sacola
    And tera 2 unidades do produto escolhido

   
