# Mundo dos Livros

## Descrição

Este é um projeto de e-commerce de livros desenvolvido para a disciplina de Laboratório de Engenharia de Software na FATEC Mogi das Cruzes, sob a supervisão do Professor Rodrigo Rocha. O objetivo do projeto é criar uma plataforma completa para a compra e venda de livros, aplicando conceitos e práticas de engenharia de software.

## Objetivos

- Implementar um sistema de e-commerce funcional para livros.
- Proporcionar uma interface amigável e intuitiva para os usuários.

## Funcionalidades

- **Catálogo de Livros**: Visualização de livros disponíveis com informações detalhadas.
- **Carrinho de Compras**: Adicionar e remover livros do carrinho de compras.
- **Processamento de Pedidos**: Finalizar compras com cálculo de frete e opções de pagamento.
- **Solicitação de troca**: Solicitar troca de produtos comprados.
- **Cupons de troca**: Trocas realizadas com sucesso geram cupons para usuários utilizarem em novas compras.
- **Cadastro de Usuários**: Registro e autenticação de usuários.

## Tecnologias Utilizadas

- **Linguagens**: Javascript, Java
- **Frameworks e Bibliotecas**: React.js, Spring, Hibernate
- **Banco de Dados**: MySQL
- **Ferramentas de Versionamento**: Git
- **Ambiente de Desenvolvimento**: VsCode, IntelliJ

## Requisitos

### Requisitos Funcionais

| ID do Requisito | Nome do Requisito                    | Descrição                                                                                                                                      |
|-----------------|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| RF0011          | Cadastrar livro                      | O sistema deve manter um cadastro único para livros.                                                                                           |
| RF0012          | Inativar cadastro de livro           | O sistema deve possibilitar que livros sejam inativados.                                                                                       |
| RF0013          | Inativar livro de forma automática   | O sistema deve inativar livros sem estoque e que não possuem venda com valor inferior a parâmetro predefinido no sistema.                      |
| RF0014          | Alterar cadastro de livro            | O sistema deve possibilitar a alteração de dados cadastrais para os livros.                                                                    |
| RF0015          | Consulta de livros                   | O sistema deve possibilitar que um livro seja consultado com base em um filtro definido pelo usuário.                                           |
| RF0016          | Ativar cadastro de livros            | Deve ser possível ativar o cadastro de um livro.                                                                                               |
| RF0021          | Cadastrar cliente                    | O sistema deve possibilitar o cadastro de clientes.                                                                                            |
| RF0022          | Alterar cliente                      | O sistema deve possibilitar a alteração de dados cadastrais de clientes.                                                                       |
| RF0023          | Inativar cadastro de cliente         | O sistema deve possibilitar que clientes sejam inativados.                                                                                     |
| RF0024          | Consulta de clientes                 | O sistema deve possibilitar que um cliente seja consultado com base em um filtro definido pelo usuário.                                         |
| RF0025          | Consulta de transações               | O sistema deve disponibilizar no cadastro de clientes a consulta de todas transações já realizadas pelo mesmo.                                  |
| RF0026          | Cadastro de endereços de entrega     | Deve ser possível associar diversos endereços de entrega ao cadastro de um cliente.                                                            |
| RF0027          | Cadastro de cartões de crédito       | Deve ser possível associar diversos cartões de crédito ao cadastro de um cliente.                                                              |
| RF0028          | Alteração apenas de senha            | O sistema deve possibilitar que a senha do usuário seja alterada sem que seja necessária a alteração de todos os dados cadastrais.             |
| RF0031          | Gerenciar carrinho de compra         | O sistema deve permitir que produtos sejam colocados em um repositório temporário para futura compra (carrinho de compra).                      |
| RF0032          | Definir quantidade de itens no carrinho | Deve ser possível editar a quantidade de cada item ao adicionar um produto no carrinho.                                                        |
| RF0033          | Realizar compra                      | Deve ser possível a partir de um carrinho de compra realizar uma compra.                                                                       |
| RF0034          | Calcular frete                       | O sistema deve calcular o frete da compra com base nos itens selecionados e o endereço apontado pelo cliente.                                   |
| RF0035          | Selecionar endereço de entrega       | O cliente pode selecionar qualquer endereço de entrega previamente cadastrado em seu perfil ou cadastrar um novo endereço de entrega.          |
| RF0036          | Selecionar forma de pagamento        | O cliente pode selecionar qualquer cartão de crédito previamente cadastrado em seu perfil ou cadastrar um novo cartão de crédito.              |
| RF0037          | Finalizar Compra                     | Uma compra deve ser finalizada após a seleção da forma de pagamento e endereço de entrega.                                                     |
| RF0038          | Despachar produtos para entrega      | O sistema deve possibilitar que um usuário com perfil de administrador selecione vendas já aprovadas para serem entregues.                     |
| RF0039          | Produtos entregues                   | O sistema deve possibilitar que um usuário com perfil de administrador confirme a entrega de uma compra.                                        |
| RF0040          | Solicitar troca                      | O sistema deve possibilitar que um item de uma compra seja trocado por um cliente através da visualização de pedidos do mesmo.                 |
| RF0041          | Autorizar trocas                     | O sistema deverá possibilitar que o administrador autorize pedidos de troca.                                                                   |
| RF0042          | Visualização de trocas               | O sistema deverá possibilitar que o administrador visualize todos os pedidos de troca.                                                         |
| RF0043          | Confirmar recebimento de itens para troca | O sistema deverá possibilitar que o administrador confirme o recebimento de pedidos de troca.                                                  |
| RF0044          | Gerar cupom de troca após recebimento de itens | O sistema deverá gerar um cupom de troca quando o administrador informar que os itens a serem trocados chegaram.                               |
| RF0051          | Realizar entrada em estoque          | O sistema deve permitir que seja possível realizar entrada de itens de livros em estoque.                                                      |
| RF0052          | Calcular valor de venda              | O sistema deve calcular o valor de venda com base no valor de custo e o grupo de precificação.                                                 |
| RF0053          | Dar baixa em estoque                 | Para cada venda realizada deve-se dar baixa no estoque do total de itens vendidos.                                                             |
| RF0054          | Realizar reentrada em estoque        | O sistema deve realizar a reentrada de um item em estoque a partir da troca de um produto.                                                     |

### Requisitos Não Funcionais

| ID do Requisito | Nome do Requisito                    | Descrição                                                                                                                                      |
|-----------------|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| RNF0011         | Tempo de resposta para consultas     | Toda consulta de usuário deve ter resposta em no máximo 1 segundo.                                                                             |
| RNF0021         | Código de livro                      | Todo livro cadastrado deve receber um código único no sistema.                                                                                 |
| RNF0013         | Cadastro de domínios                 | Deve haver um script de implantação do sistema que insere todos registros de tabelas de domínio necessárias, como grupo de precificação, etc.  |
| RNF0031         | Senha forte                          | A senha cadastrada pelo usuário deve ser composta de pelo menos 8 caracteres, ter letras maiúsculas e minúsculas além de conter caracteres especiais. |
| RNF0032         | Confirmação de senha                 | O usuário obrigatoriamente deve digitar duas vezes a mesma senha no momento do registro da mesma.                                               |
| RNF0033         | Senha criptografada                  | A senha deve ser criptografada.                                                                                                                |
| RF0034          | Alteração apenas de endereços        | O sistema deve possibilitar que endereços de entrega ou cobrança possam ser alterados ou adicionados de forma simples sem a necessidade da edição dos demais dados cadastrais. |
| RNF0035         | Código de cliente                    | Todo cliente cadastrado deve receber um código único no sistema.                                                                               |

### Regras de Negócio

| ID do Requisito | Nome do Requisito                    | Descrição                                                                                                                                      |
|-----------------|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| RN0011          | Dados obrigatórios para o cadastro de um livro | Para todo livro cadastrado é obrigatório o cadastro dos seguintes dados: autor, categoria, ano, título, editora, edição, ISBN, número de páginas, sinopse, dimensões (Altura, largura, peso e profundidade), grupo de precificação e código de barras. |
| RN0012          | Associação com categorias            | Um livro pode estar associado com mais de uma categoria.                                                                                       |
| RN0013          | Definindo valor de venda             | Todo livro após cadastrado deverá ser associado a um grupo de precificação onde o valor deverá ter como base a margem de lucro parametrizado para o grupo definido no cadastro do livro. |
| RN0015          | Associar motivo de inativação        | Todo livro que for inativado manualmente deve ter uma justificativa e uma categoria de inativação associada.                                    |
| RN0016          | Associar motivo de inativação automática | Todo cadastro de livro inativado de forma automática deve ser categorizado como FORA DE MERCADO.                                                |
| RN0017          | Associar motivo de ativação          | Todo livro que for ativado deve ter uma justificativa e uma categoria de ativação associada.                                                   |
| RN0021          | Cadastro de endereço de cobrança     | Para todo cliente cadastrado é obrigatório o registro de ao menos um endereço de cobrança.                                                    |
| RN0022          | Cadastro de endereço de entrega      | Para todo cliente cadastrado é obrigatório o registro de ao menos um endereço de entrega.                                                     |
| RN0023          | Composição do registro de endereços  | Todo cadastro de endereços associados a clientes deve ser composto dos seguintes dados: Tipo de residência (Casa, Apartamento, etc), Tipo Logradouro, Logradouro, Número, Bairro, CEP, Cidade, Estado e País. Todos os campos anteriores são de preenchimento obrigatório. Opcionalmente pode ser preenchido um campo observações. |
| RN0024| Composição do registro de cartões de crédito | Todo cartão de crédito associado a um cliente deverá ser composto pelos seguintes campos: Nº do Cartão, Nome impresso no Cartão, Bandeira do Cartão e Código de Segurança. |
| RN0026          | Dados obrigatórios para o cadastro de um cliente | Para todo cliente cadastrado é obrigatório o cadastro dos seguintes dados: Gênero, Nome, Data de Nascimento, CPF, Telefone (deve ser composto pelo tipo, DDD e número), e-mail, senha, endereço residencial. |
| RN0027          | Ranking de cliente                  | O cliente deve receber um ranking numérico com base no seu perfil de compra.                                                                   |
| RN0031          | Validar estoque para adição de itens no carrinho | Não deve ser permitido adicionar um item no carrinho de compra que não esteja disponível em estoque. Também deve ser validada a quantidade do item adicionado ao carrinho para que não seja adicionado mais itens do que o disponível em estoque. |
| RN0032          | Validar estoque para compra          | Ao solicitar a compra de itens que estejam em um carrinho deve-se garantir que tais itens ainda permanecem disponíveis em estoque.              |
| RN0033          | Uso de cupom promocional para pagamento | Apenas um cupom promocional pode ser utilizado por compra.                                                                                       |
| RN0034          | Uso de diversões cartões de crédito  | Uma compra pode ser paga utilizando mais de um cartão de crédito, porém o valor mínimo para ser pago com cada cartão deve ser R$ 10,00.        |
| RN0035          | Uso de cupons junto a cartão de crédito | Ao realizar pagamento utilizando cupons e cartões em conjunto, deve-se sempre considerar o valor máximo dos cupons.                              |
| RN0036          | Gerar cupom de troca                 | Um cupom de troca deve ser gerado quando uma compra for paga com outros cupons em que o valor supere o valor da compra.                          |
| RN0037          | Validar Forma de Pagamento para finalização de compra | Após a finalização da compra a forma de pagamento deve ser validada. Para tal deve-se validar a validade e veracidade dos cupons de troca e promocionais que por ventura foram utilizados. |
| RN0039          | Alterar status da compra para transporte | Toda compra selecionada para ser entregue por um administrador deve ter seu status alterado para EM TRANSPORTE.                                |
| RN0040          | Alterar status da compra após entrega | Toda compra selecionada como entregue por um administrador deve ter seu status alterado para ENTREGUE.                                           |
| RN0041          | Gerar pedido de troca                | Todo item selecionado para troca deve gerar um pedido de troca. Este pedido deverá ter o status EM TROCA.                                        |
| RN0042          | Alterar status do pedido após recebimento de troca | Ao confirmar que os itens de um pedido de troca ou uma compra com status EM TROCA foi recebido, o status do pedido ou compra deverá ser TROCADO. |
| RN0043          | Validação para solicitar troca       | Somente itens de pedidos com status ENTREGUE poderão receber solicitação de troca.                                                             |
| RNF0046         | Gerar notificação de autorização de troca | Quando o administrador autorizar uma troca o sistema deverá gerar uma notificação sobre tal ao cliente.                                           |
| RN0061          | Quantidade de itens                  | Não deve ser permitido que seja realizada a entrada de itens de livros com quantidade igual a zero.                                             |
| RN0062          | Valor de custo                       | Para todo item deve haver um valor de custo.                                                                                                     |

