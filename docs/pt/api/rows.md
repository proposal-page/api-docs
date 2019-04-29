# Linhas

[[toc]]

## Clonar

Você pode usar esse endpoint para clonar uma linha e colocá-la em uma posição específica.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/clone/<position>
```

- **Resposta:**
```json
Status: 201

{
  "_id": "5cb869d232f905001a024657",
  "description": "New row",
  "columns": [ columnSchema ],
  "createdAt": "2019-01-18T13:56:53.742Z",
  "updatedAt": "2019-01-18T13:56:53.742Z"
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto da linha que será clonada. | :heavy_check_mark: |
    | blockId | string | O id do bloco da linha que será clonada. | :heavy_check_mark: |
    | rowId | string | O id da linha que será clonada.| :heavy_check_mark: |
    | position | number | A posição para colocar a linha que será clonada (por exemplo, 0 é a primeira). | |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/clone/0'
```

## Criar

Você pode usar esse endpoint para criar uma linha.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows
```

- **Resposta:**
```json
Status: 201

{
  "_id": "5cb869d232f905001a024657",
  "description": "New row",
  "columns": [ columnSchema ],
  "createdAt": "2019-01-18T13:56:53.742Z",
  "updatedAt": "2019-01-18T13:56:53.742Z"
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto da linha que será criada. | :heavy_check_mark: |
    | blockId | string | O id do bloco da linha que será criada. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | description | string | Descrição da linha. | :heavy_check_mark: |
    | columns | array | Colunas da linha. | |

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "description": "New row", "columns": [] }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows'
```

## Deletar

Você pode usar esse endpoint para excluir uma linha.

- **Endpoint:**
```bash
DELETE https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>
```

- **Resposta:**
```json
Status: 204 (no-content)
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto da linha que será deletada. | :heavy_check_mark: |
    | blockId | string | O id do bloco da linha que será deletada. | :heavy_check_mark: |
    | rowId | string | O id da linha que será deletada. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XDELETE -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657'
```

## Listar

Você pode usar endpoint para listar as linhas de um bloco.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows
```

- **Resposta:**
```json
Status: 200

{
  [
    { ... },
    {
      "_id": "5cb869d232f905001a024657",
      "description": "New row",
      "columns": [ columnSchema ],
      "createdAt": "2019-01-18T13:56:53.742Z",
      "updatedAt": "2019-01-18T13:56:53.742Z"
    },
    { ... }
  ]
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto que as linhas do bloco serão listadas. | :heavy_check_mark: |
    | blockId | string | O id do bloco que as linhas serão listadas. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows'
```

## Atualizar

Você pode usar esse endpoint para atualizar uma linha.

- **Endpoint:**
```bash
PUT https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>
```

- **Resposta:**
```json
Status: 200

{
  "_id": "5cb869d232f905001a024657",
  "description": "New row",
  "columns": [ columnSchema ],
  "createdAt": "2019-01-18T13:56:53.742Z",
  "updatedAt": "2019-01-18T13:56:53.742Z"
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto da linha que será atualizada. | :heavy_check_mark: |
    | blockId | string | O id do bloco da linha que será atualizada. | :heavy_check_mark: |
    | rowId | string | O id da linha que será atualizada. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | description | string | Descrição da linha. | |
    | columns | array | Colunas da linha. | |

- **Exemplo:**
```bash
curl -XPUT -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "description": "Updated description" }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657'
```

## Recuperar

Você pode usar esse endpoint para recuperar uma linha.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>
```

- **Resposta:**
```json
Status: 200

{
  "_id": "5cb869d232f905001a024657",
  "description": "New row",
  "columns": [ columnSchema ],
  "createdAt": "2019-01-18T13:56:53.742Z",
  "updatedAt": "2019-01-18T13:56:53.742Z"
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto da linha que será recuperada. | :heavy_check_mark: |
    | blockId | string | O id do bloco da linha que será recuperada. | :heavy_check_mark: |
    | rowId | string | O id da linha que será recuperada. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657'
```
