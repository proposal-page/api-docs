# Visão Global

Nossa API é exposta como um serviço HTTP/1 e HTTP/2 com SSL. Todos os endpoints estão sobre a URL `https: // api.proposalpage.com` e geralmente seguem a arquitetura REST.

## Estrutura Conceitual

A estrutura conceitual de um projeto (proposta) é a seguinte:
```
/**
 * Estrutura conceitual
 * project (projeto)
 *  |
 *  |--> blocks (blocos)
 *   |
 *   |--> rows (linhas)
 *     |
 *     |--> cols (colunas)
 *       |
 *       |--> contents (conteúdos)
 *         |
 *         |--> types {quote, image, text, etc} (tipos {quote, imagem, texto, etc})
 */
```

## Versão Atual

Por padrão, todas as requisições feitas para `https://api.proposalpage.com` recebem a versão v1 da API REST.

Tentamos evitar o máximo de compatibilidade com versões anteriores.

## Tipo de conteúdo

Todos os pedidos devem ser codificados como JSON com o cabeçalho `Content-Type: application/json`. A maioria das respostas, incluindo erros, é codificada exclusivamente como JSON.

```
Content-Type: application/json
```

## Autenticação

Forneça seu token de autenticação como parte do cabeçalho de autorização.

Se a autenticação não for bem-sucedida, o código de status **401** será retornado.

```
Authorization: Bearer $TOKEN
```

> Após detectar várias solicitações com credenciais inválidas dentro de um curto período, a API rejeitará temporariamente todas as tentativas de autenticação para esse usuário (incluindo as com credenciais válidas) com `403 Forbidden`.


## Verbos HTTP

Sempre que possível, a API se esforça para usar os verbos HTTP apropriados para cada ação.

| Verbo | Descrição |
| :-: | :-: |
| HEAD | Pode ser emitido contra qualquer recurso para obter apenas as informações do cabeçalho HTTP. |
| GET | Usado para recuperar recursos. |
| POST | Usado para criar recursos. |
| PATCH | Usado para atualizar recursos com dados JSON parciais. Por exemplo, um recurso de problema possui atributos de título e corpo. Uma solicitação PATCH pode aceitar um ou mais dos atributos para atualizar o recurso. |
| PUT | Usado para substituir recursos ou coleções. Para solicitações PUT sem atributo body, defina o cabeçalho Content-Length como zero. |
| DELETE | Usado para deletar recursos. |

## Paginação

Solicitações que retornam vários itens serão paginadas para 10 itens por padrão. Você pode especificar mais páginas com o parâmetro `?page`. Para alguns recursos, você também pode definir um tamanho de página personalizado de até 100 com o parâmetro `?itemsPerPage`. Note que por razões técnicas nem todos os endpoints respeitam o parâmetro `?itemsPerPage`.

```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects?page=2&itemsPerPage=100'
```

## Limitação de Requisições

Nós limitamos o número de requisições que você pode fazer durante um certo período de tempo. Os limites variam e são especificados pelo seguinte cabeçalho em todas as respostas:

| Header Name | Description |
| :-: | :-: |
| X-RateLimit-Limit | O número máximo de requisições que você pode fazer por minuto. |
| X-RateLimit-Remaining | O número de requisições restantes na janela de limite de requisições atual. |
| X-RateLimit-Reset | A hora em que a janela de limite de requisições atual é redefinida em UTC epoch seconds. |

Se você exceder o limite de requisições, uma resposta de erro retornará com o status `429 Too Many Requests`.

```bash
Status: 429 Too Many Requests
```
