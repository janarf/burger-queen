# Burger Queen

Projeto desenvolvido utilizando React. A interface foi pensada para utilização em tablets e a lógica do projeto foi implementada em JavaScript (ES6 +), HTML e CSS.



## 1. Resumo do projeto

Um projeto 100% por demanda. 

Um pequeno restaurante de hambúrgueres, que está crescendo, necessita uma
interface em que se possa realizar pedidos utilizando um _tablet_, e enviá-los
para a cozinha para que sejam preparados de forma ordenada e eficiente.


Estas são as informações que do cliente:

> Somos **Burger Queen**, um fast food 24hrs.
>
>A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a
>crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos
>clientes.
>
>Nós temos 2 menus. Um muito simples para o café da manhã:
>
>| Ítem                      |Preço R$|
>|---------------------------|------|
>| Café americano            |    5 |
>| Café com leite            |    7 |
>| Sanduíche de presunto e queijo|   10 |
>| Suco de fruta natural     |    7 |
>
>E outro menu para o resto do dia:
>
>| Ítem                      |Preço |
>|---------------------------|------|
>|**Hambúrgueres**           |   **R$**   |
>|Hambúrguer simples         |    10|
>|Hambúrguer duplo           |    15|
>|**Acompanhamentos**        |   **R$**   |
>|Batata frita               |     5|
>|Anéis de cebola            |     5|
>|**Bebidas**                |   **R$**   |
>|Água 500ml                 |     5|
>|Água 750ml                 |     7|
>|Bebida gaseificada 500ml   |     7|
>|Bebida gaseificada 750ml   |    10|
>

>Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
>seu pedido várias vezes antes de finalizar.

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O usuário deve poder escolher que _produtos_
adicionar e a interface deve mostrar o _resumo do pedido_ com o custo total.

## Checklist
#### HU 1: Perfil de usuário

* [x] Criar login e senha.
* [x] Criar tipo de usuário (cozinha / salão).
* [x] Entrar na tela correta para cada usuário.

#### HU 2: Anotar pedidos

* [x] Digite o nome do cliente.
* [x] Filtre _menu_ para _café da manhã_ e _almoço/jantar_.
* [x] Adicionar item ao pedido.
* [x] Excluir item do pedido.
* [x] Mostra _resumo_ do pedido com todos os itens e o total.
* [x] Enviar para a cozinha (isso deve salvar o pedido).

#### HU 3: Ver pedidos na cozinha

* [x] Visualização de pedidos pendentes para produção.
* [x] Marcar pedido como como pronto para entrega.
* [ ] Ver histórico dos pedidos.

### UX

* [x] É bem e funciona bem em tablets.
* [x] Fácil utilização em telas sensíveis ao toque (telas sensíveis ao toque).
* [x] Status atual do pedido sempre visível enquanto fazemos um pedido.

#### Roadmap

* [ ] Visualização de pedidos pendentes para entrega.
* [ ] Marcar pedido como entregue ao cliente.
* [ ] Testes
