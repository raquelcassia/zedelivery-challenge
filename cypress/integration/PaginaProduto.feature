Feature: Pagina do Produto

    Eu quero adicionar unidades do produto escolhido na sacola através da pagina do produto

Background: Cliente quer acessar pagina principal do produto escolhido
   
    Given que o cliente esteja logado na pagina do produto "https://www.ze.delivery/entrega-produto/8601/beats-senses-313ml-unidade"

Scenario: Cliente quer adicionar 2 unidades do produto na sacola através do botão Mais

    Given que o cliente queira adicionar 2 unidades do produto "Beats Senses 313ml - Unidade" na sacola
    When o cliente clicar no botao de Mais
    And clicar em seguida no botão de adicionar
    Then sera apresentado o painel da sacola
    And tera 2 unidades do produto Beats Senses 313ml - Unidade

Scenario: Cliente quer adicionar 6 unidades do produto através do botão Mais 6

    Given que o cliente queira adicionar 6 unidades do produto "Beats Senses 313ml - Unidade" na sacola
    When o cliente clicar no botao de Mais 6 Unidades
    And clicar em seguida no botão de adicionar
    Then sera apresentado o painel da sacola
    And tera 6 unidades do produto "Beats Senses 313ml - Unidade"

Scenario: Cliente quer adicionar 10 unidades e depois retirar 1 unidade do produto através do botão Menos

    Given que o cliente queira adicionar 10 unidades do produto "Beats Senses 313ml - Unidade" na sacola
    When o cliente clicar no botao de Mais 10 Unidades    
    And clicar no botao Menos para retirar 1 unidade
    And clicar em seguida no botão de adicionar
    Then sera apresentado o painel da sacola
    And tera 9 unidades do produto "Beats Senses 313ml - Unidade"

    Scenario: Cliente quer adicionar 10 unidades do produto através do botão Mais 10

    Given que o cliente queira adicionar 10 unidades do produto "Beats Senses 313ml - Unidade" na sacola
    When o cliente clicar no botao de Mais 10 Unidades
    And clicar em seguida no botão de adicionar
    Then sera apresentado o painel da sacola
    And tera 10 unidades do produto "Beats Senses 313ml - Unidade"

    Scenario: Cliente quer adicionar 15 unidades do produto através do botão Mais 15

    Given que o cliente queira adicionar 15 unidades do produto "Beats Senses 313ml - Unidade" na sacola
    When o cliente clicar no botao de Mais 15 Unidades
    And clicar em seguida no botão de adicionar
    Then sera apresentado o painel da sacola
    And tera 15 unidades do produto "Beats Senses 313ml - Unidade"