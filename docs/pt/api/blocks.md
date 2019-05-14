# Blocos

[[toc]]

## Criar

Você pode usar esse endpoint para criar um bloco.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks
```

- **Resposta:**
```json
Status: 201

{
  "style": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "backgroundImage": "",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "opacity": 1
  },
  "_id": "5c41db25d139900014b5d8ae",
  "description": "Block Last",
  "rows": [ rowSchema ],
  "createdAt": "2019-01-18T13:56:53.742Z",
  "updatedAt": "2019-01-18T13:56:53.742Z"
}
```

- **Parâmetros:**
    - ***Path:*** Vazio.

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:***
    
    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | style | object | Estilo do bloco. | |
    | description | string | Descrição do bloco. | :heavy_check_mark: |
    | rows | array | Linhas do bloco. | |

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "description": "New block", "rows": [] }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks'
```

## Clonar

Você pode usar esse endpoint para clonar um bloco e colocá-lo em uma posição específica.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/clone/<position>
```

- **Resposta:**
```json
Status: 201

{
  "style": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "backgroundImage": "",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "opacity": 1
  },
  "_id": "5c41db25d139900014b5d8ae",
  "description": "Block Last",
  "rows": [ rowSchema ],
  "createdAt": "2019-01-18T13:56:53.742Z",
  "updatedAt": "2019-01-18T13:56:53.742Z"
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto do bloco que será clonado. | :heavy_check_mark: |
    | blockId | string | O id do bloco que será clonado. | :heavy_check_mark: |
    | position | número | A posição para colocar o bloco que será clonado (por exemplo, 0 é o primeiro). | |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/clone/0'
```

## Deletar

Você pode usar esse endpoint para deletar um bloco.

- **Endpoint:**
```bash
DELETE https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>
```

- **Resposta:**
```json
Status: 204 (no-content)
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto do bloco que será deletado. | :heavy_check_mark: |
    | blockId | string | O id do bloco que será deletado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XDELETE -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae'
```

## Listar

Você pode usar esse endpoint para listar os blocos de um projeto.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks
```

- **Resposta:**
```json
Status: 200

{
  [
    { ... },
    {
        "style": {
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "backgroundImage": "",
          "backgroundRepeat": "no-repeat",
          "backgroundSize": "cover",
          "backgroundPosition": "center center",
          "opacity": 1
        },
        "_id": "5c41db25d139900014b5d8ae",
        "description": "Block Last",
        "rows": [ rowSchema ],
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
    | projectId | string | O id do projeto que os blocos serão listados. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks'
```

## Mover para Trás

Você pode usar esse endpoint para mover um bloco para trás.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/backward
```

- **Resposta:**
```json
Status: 200

{
  "style": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "backgroundImage": "",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "opacity": 1
  },
  "_id": "5c41db25d139900014b5d8ae",
  "description": "Block Last",
  "rows": [ rowSchema ],
  "createdAt": "2019-01-18T13:56:53.742Z",
  "updatedAt": "2019-01-18T13:56:53.742Z"
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto do bloco que será movido para trás. | :heavy_check_mark: |
    | blockId | string | O id do bloco que será movido para trás. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/forward'
```

## Mover para Frente

Você pode usar esse endpoint para mover um bloco para frente.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/forward
```

- **Resposta:**
```json
Status: 200

{
  "style": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "backgroundImage": "",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "opacity": 1
  },
  "_id": "5c41db25d139900014b5d8ae",
  "description": "Block Last",
  "rows": [ rowSchema ],
  "createdAt": "2019-01-18T13:56:53.742Z",
  "updatedAt": "2019-01-18T13:56:53.742Z"
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto do bloco que será movido para frente. | :heavy_check_mark: |
    | blockId | string | O id do bloco que será movido para frente. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/forward'
```

## Atualizar

Você pode usar esse endpoint para atualizar um bloco.

- **Endpoint:**
```bash
PUT https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>
```

- **Resposta:**
```json
Status: 200

{
  "style": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "backgroundImage": "",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "opacity": 1
  },
  "_id": "5c41db25d139900014b5d8ae",
  "description": "Block Last",
  "rows": [ rowSchema ],
  "createdAt": "2019-01-18T13:56:53.742Z",
  "updatedAt": "2019-01-18T13:56:53.742Z"
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto do bloco que será atualizado. | :heavy_check_mark: |
    | blockId | string | O id do bloco que será atualizado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:***
    
    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | style | object | Estilo do bloco. | |
    | description | string | Descrição do bloco. | |
    | rows | array | Linhas do bloco. | |

- **Exemplo:**
```bash
curl -XPUT -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "description": "Updated block description" }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae'
```

## Recuperar

Você pode usar esse endpoint para recuperar um bloco.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>
```

- **Resposta:**
```json
Status: 200

{
  "style": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "backgroundImage": "",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "opacity": 1
  },
  "_id": "5c41db25d139900014b5d8ae",
  "description": "Block Last",
  "rows": [ rowSchema ],
  "createdAt": "2019-01-18T13:56:53.742Z",
  "updatedAt": "2019-01-18T13:56:53.742Z"
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto do bloco que será recuperado. | :heavy_check_mark: |
    | blockId | string | O id do bloco que será recuperado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae'
```
