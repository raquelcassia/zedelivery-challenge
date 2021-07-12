# [Zé Delivery]  QA Challenge
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

Após isso, poderá navegar pela plataforma através das abas na parte superior do catálogo ou pelos menus centrais abaixo. Ao encontrar o produto desejado, poderá clicar na imagem para ser redirecionado à página do produto, aonde poderá visualizar suas informações e selecionar quantas unidades do mesmo deseja para envia-lo à sacola.

Em seguida será apresentado na tela sua sacola, com o valor unitário dos produtos e seu valor total referente à quantidade selecionada e o frete. Nesta sacola você poderá adicionar ou remover produtos e também alterar sua quantidade. Um ponto importante a ser observado, é que alguns parceiros possuem valor mínimo por pedido, desta forma, para prosseguir a compra, o usuário deverá completar o valor mínimo necessário. 

Ao continuar a compra, o usuário será redirecionado à página de checkout onde poderá confirmar o endereço de entrega, adicionar cupom de desconto se possuir e adicionar instruções para o distribuidor se necessário. Também será apresentado sua sacola com todos os itens selecionados, seus valores e o frete, e ainda poderá alterar seus produtos nesta etapa. Atenção, é necessário a apresentação de um documento com foto na entrega para comprovar sua idade (18+).

Para concluir a compra, deverá selecionar a opção “Selecionar Forma de Pagamento”, onde será direcionado para a página Método de Pagamento, que poderá ser em Dinheiro, Cartão de Débito ou Crédito no ato da entrega. E para confirmar seu pedido, selecionar “Finalizar Compra”.

---

### 2. Teste de automação de IU 

>*Fluxo Crítico Escolhido: Fluxo de Compra*

-----------------------


Repositório com o desafio técnico de testes automatizados para o site [Zé Delivery](https://www.ze.delivery/) utilizando:

  - JavaScript
  - Cypress
  - Cypress Cucumber Preprocessor
  
Hoje precisamos ter testes mais rápidos, fáceis e confiáveis para qualquer coisa que seja executada em um navegador ou por serviços.<br/>
Inicialmente comecei os meus testes com a linguagem Java e utilizando Selenium como framework, mas neste projeto optei em utilizar o Cypress por ele ser um framework mais amigável, tanto visualmente quanto para codificação, e o Cucumber com estrutura Gherkin por ser totalmente legível para qualquer leitor e ajuda a economizar tempo na reutilização de steps.

-----------------------

## Tabela de Contexto

> Índice `README`.
  - [Pré Requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Configuração](#configuração)
  - [Como Testar](#como-testar)
  - [Documentações](#documentações)  
  - [Suporte](#suporte)


-----------------------

### Pré Requisitos

- [node e npm](https://nodejs.org/en/)
- [vscode ou outra IDE](https://code.visualstudio.com/download)
- [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

-----------------------

### Instalação

> Clonar projeto
- Clonar este repositório usando _ssh_ ou _https_.

> exemplo:
```js
$ git clone https://github.com/raquelcassia/zedelivery-challenge.git
```

- Através de um terminal, navegue até o diretório do projeto e instale as dependências npm com o comando:

```js
$ npm install
```
-----------------------

### Configuração

- Localizar o arquivo na raiz do projeto chamado _cypress.env.json_ e alterar o valor das variáveis `email_cliente` e `senha_cliente` para dados de login válidos:

```json
{
    "email_cliente": "nomecliente@email.com",
    "senha_cliente": "senhacliente"
}
```

**Nota Importante:** Isso foi feito para simular uma possível _"não exposição"_ para o tratamento quanto a dados sensíveis. 

-----------------------

### Como testar

> Para rodar os testes no modo interativo do cypress:
```js
$ npx cypress open
```

-----------------------

### Documentações

Para documentação de palavras-chave individuais, consulte o seguinte:

 - [Documentação Cypress](https://docs.cypress.io/guides/overview/why-cypress)
 - [Documentação Cucumber](https://cucumber.io/docs/cucumber/)
 - [Documentação Gherkin](https://cucumber.io/docs/gherkin/reference/)
 - [Link Auxiliar - Gherkin](https://blog.onedaytesting.com.br/gherkin/)
 - [Link Auxiliar - Cucumber](https://medium.com/cwi-softwaretestes-automatizados-com-cypress-e-cucumber-d78b211da766)
 
-----------------------

## 3. Teste de automação de API

 :triangular_flag_on_post: A etapa seguinte do desafio poderá ser visualizada através do repositorio [openweather-api](https://github.com/raquelcassia/openweather-api).

-----------------------

### Suporte

- Linkedin: <a href="https://www.linkedin.com/in/raqueldecassiasc/" target="_blank">**Raquel de Cássia**</a> :ghost:

- E-mail: **rcassia_scarvalho@hotmail.com**


-----------------------




