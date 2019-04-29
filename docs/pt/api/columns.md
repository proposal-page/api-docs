# Colunas

[[toc]]

## Criar

Você pode usar esse endpoint para criar uma coluna.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns
```

- **Resposta:**
```json
Status: 201

{
  "_id": "5cc0ac42003a7c001ab5c95a",
  "size": "12",
  "contents": [ contentSchema ],
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto da coluna que será criada. | :heavy_check_mark: |
    | blockId | string | O id do bloco da coluna que será criada. | :heavy_check_mark: |
    | rowId | string | O id da linha da coluna que será criada. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | size | number | Tamanho da coluna (min 1 e max 12), a soma dos tamanhos das colunas de uma linha não deve exceder 12. | :heavy_check_mark: |
    | contents | array | Conteúdos da coluna. | |

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "size": 12, "contents": [] }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns'
```

## Deletar

Você pode usar esse endpoint para excluir uma coluna.

- **Endpoint:**
```bash
DELETE https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>
```

- **Resposta:**
```json
Status: 204 (no-content)
```

- **Parâmetros:**
    - ***Path:***
    
    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto da coluna que será deletada. | :heavy_check_mark: |
    | blockId | string | O id do bloco da coluna que será deletada. | :heavy_check_mark: |
    | rowId | string | O id da linha da coluna que será deletada. | :heavy_check_mark: |
    | columnId | string | O id da coluna a ser deletada. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XDELETE -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a'
```

## Listar

Você pode usar esse endpoint para listar as colunas de uma linha.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns
```

- **Resposta:**
```json
Status: 200

{
  [
    { ... },
    {
      "_id": "5cc0ac42003a7c001ab5c95a",
      "size": "12",
      "contents": [ contentSchema ],
    },
    { ... }
  ]
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto que as colunas serão listadas. | :heavy_check_mark: |
    | blockId | string | O id do bloco que as colunas serão listadas. | :heavy_check_mark: |
    | rowId | string | O id da linha que colunas que serão listadas. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns'
```

## Atualizar

Você pode usar esse endpoint para atualizar uma coluna.

- **Endpoint:**
```bash
PUT https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>
```

- **Resposta:**
```json
Status: 200

{
  "_id": "5cc0ac42003a7c001ab5c95a",
  "size": "12",
  "contents": [ contentSchema ],
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto da coluna que será atualizada. | :heavy_check_mark: |
    | blockId | string | O id do bloco da coluna que será atualizada. | :heavy_check_mark: |
    | rowId | string | O id da linha da coluna que será atualizada. | :heavy_check_mark: |
    | columnId | string | O id da coluna que será atualizada. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | size | number | Tamanho da coluna (min 1 e max 12), a soma dos tamanhos das colunas de uma linha não deve exceder 12. | :heavy_check_mark: |
    | contents | array | Conteúdos da coluna. | |

- **Exemplo:**
```bash
curl -XPUT -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "size": 11 }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a'
```

## Recuperar

Você pode usar esse endpoint para recuperar uma coluna.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>
```

- **Resposta:**
```json
Status: 200

{
  "_id": "5cc0ac42003a7c001ab5c95a",
  "size": "12",
  "contents": [ contentSchema ],
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto da coluna que será recuperada. | :heavy_check_mark: |
    | blockId | string | O id do bloco da coluna que será recuperada. | :heavy_check_mark: |
    | rowId | string | O id da linha da coluna que será recuperada. | :heavy_check_mark: |
    | columnId | string | O id da coluna que será recuperada. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio

- **Exemplo:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a'
```
