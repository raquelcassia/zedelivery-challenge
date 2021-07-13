Feature: Página de Metodo de Pagamento

    Eu quero escolher a opção de pagamento e confirmar minha compra

Background: Cliente acessa pagina Metodo de Pagamento

    Given que o cliente esteja na página de Metodo de Pagamento "https://www.ze.delivery/payment-method"

Scenario: Cliente quer realizar o pagamento com Cartão de Débito ou Crédito 

    Given que o cliente queira realizar o pagamento com Cartão de Débito ou Crédito
    When o botão de Finalizar Compra ficar habilitado
    # Then o cliente poderá finalizar a compra 


Scenario: Cliente quer realizar o pagamento com Dinheiro sem precisar de troco

    Given que o cliente queira realizar o pagamento com Dinheiro 
    When o cliente clicar na opção Não Preciso de Troco 
    Then o botão finalizar compra será habilitado
    # And o cliente poderá finalizar a compra

Scenario: Cliente quer realizar o pagamento com Dinheiro inserindo troco maior que o valor total da compra

    Given que o cliente queira realizar o pagamento em Dinheiro
    When o cliente inserir na opção no campo troco o valor de "50,00"
    Then o botão finalizar compra será habilitado
    # And o cliente poderá finalizar a compra

Scenario: Cliente quer realizar o pagamento com Dinheiro inserindo troco menor que o valor total da compra

    Given que o cliente queira realizar o pagamento em Dinheiro
    When o cliente inserir na opção no campo troco o valor de "10,00"
    Then será apresentado a mensagem "Valor do troco menor que o total a pagar"
    And o botão finalizar compra permanecerá desabilitado

    
