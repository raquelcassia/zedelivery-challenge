# QA Challenge
>*Desafio de Testes Automatizados Zé Delivery*

---


### 1. Identificação dos Fluxos Críticos


   **:triangular_flag_on_post:	  Fluxo de Cadastro de Novo Usuário**
  
    
Esta funcionalidade permite que o usuário acesse a tela de login para que possam se cadastrar e, assim, fazerem uso das funcionalidades presentes no sistema.

Para o fluxo de cadastro de novo usuário é necessário que seja simples, direto e eficaz para a usabilidade do sistema. Esses dados são importantes para a comunicação entre serviço e cliente, pois caso aconteça alguma adversidade, estas informações serão o primeiro canal de contato ao cliente para resoluções de problemas. 

  - Para este serviço, é necessário o armazenamento interno de tais informações: 

    - Nome do Cliente, para identificação no sistema e também na entrega dos produtos. 
    - E-mail e Senha conforme sua preferência, de acordo com a disponibilidade e regras do sistema.
    - CPF, para registro único na plataforma. 
    - Celular, meio de contato necessário para comunicação com o cliente.
    - Idade, pois o acesso a plataforma e às suas funcionalidades destina-se aos Usuários que possuam idade igual ou superior a 18 (dezoito) anos. 
    - Ou se preferir, o usuário poderá realizar cadastro através da conta de perfis terceiros (facebook) do Usuário.

<br/>

   **:triangular_flag_on_post:	  Fluxo de Verificação de Produtos Disponíveis na Região através do Endereço**


Esta funcionalidade possibilita que o sistema direcione o usuário ao parceiro mais adequado de acordo com o endereço informado. 

Esse fluxo é de suma importância, pois o catálogo de produtos exibido ao Usuário poderá sofrer mudanças de acordo com o endereço de entrega selecionado. Além disso, o redirecionamento ao parceiro mais adequado aumenta as chances de uma melhor experiência na entrega dos produtos.

Inicialmente, para verificação dos produtos disponíveis na região do usuário, o mesmo deverá fornecer no campo indicado após o primeiro login, o endereço para entrega dos produtos. Após isso será apresentado o catálogo de produtos disponíveis na região.

Caso o usuário opte na entrega em um endereço diferente do primeiro informado, o mesmo deverá inserir o novo endereço na aba endereço e detalhes para verificar os produtos disponíveis. 

<br/>

   **:triangular_flag_on_post:	  Fluxo de Compra**

Esta funcionalidade viabiliza que o usuário tenha a melhor experiência na realização das suas compras de acordo com o catálogo disponível para sua região.  Através dela, o mesmo escolherá seus produtos, adicionará à sacola e finalizará o pedido com total segurança e confiança na plataforma. 

Para isso, o usuário deverá acessar o link www.ze.delivery, selecionar a opção “entrar” e realizar login na plataforma com e-mail e senha cadastrados ou através de acesso parceiro (facebook).

Já na página inicial, deverá verificar no canto superior esquerdo se o endereço selecionado é aonde deseja que a entrega seja realizada, para que o catalogo de produtos esteja de acordo com a sua região. 

Após isso, poderá navegar pela plataforma através das abas na parte superior do catálogo ou pelos menus centrais abaixo. Ao encontrar o produto desejado, poderá clicar na imagem para ser redirecionado à página do produto, aonde poderá visualizar suas informações e selecionar quantas unidades do mesmo deseja par envia-lo à sacola.

Em seguida será apresentado na tela sua sacola, com o valor unitário dos produtos e seu valor total referente à quantidade selecionada e o frete. Nesta sacola você poderá adicionar ou remover produtos e também alterar sua quantidade. Um ponto importante a ser observado, é que alguns parceiros possuem valor mínimo por pedido, desta forma, para prosseguir a compra, o usuário deverá completar o valor mínimo necessário. 

Ao continuar a compra, o usuário será redirecionado à página de checkout onde poderá confirmar o endereço de entrega, adicionar cupom de desconto se possuir e adicionar instruções para o distribuidor se necessário. Também será apresentado sua sacola com todos os itens selecionados, seus valores e o frete, e ainda poderá alterar seus produtos nesta etapa. Atenção, é necessário a apresentação de um documento com foto na entrega para comprovar sua idade (18+).

Para concluir a compra, deverá selecionar a opção “Selecionar Forma de Pagamento”, onde será direcionado para a página Método de Pagamento, que poderá ser em Dinheiro, Cartão de Débito ou Crédito no ato da entrega. E para confirmar seu pedido, selecionar “Finalizar Compra”.

---

### 2. Teste de automação de IU / 3. Teste de automação de API

- Os projetos foram criados nas pastas


  - zedelivery_web
  -  openweathe_api

<br/>

Dentro de cada projeto tem as intruções de como rodar os testes nos arquivos README.
