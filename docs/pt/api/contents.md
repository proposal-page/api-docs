# Conteúdos

[[toc]]

## Criar

Você pode usar esse endpoint para criar um conteúdo.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>/contents
```

- **Resposta:**
```json
Status: 201

{
    "_id": "5cb869d132f905001a024656",
    "type": "empty",
    "style": {
         "backgroundImage": "",
         "backgroundRepeat": "no-repeat",
         "backgroundSize": "cover",
         "backgroundPosition": "center center",
         "opacity": 1,
     }
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto que o conteúdo vai ser criado. | :heavy_check_mark: |
    | blockId | string | O id do bloco que o conteúdo vai ser criado. | :heavy_check_mark: |
    | rowId | string | O id da linha da coluna que o conteúdo vai ser criado. | :heavy_check_mark: |
    | columnId | string | O id da coluna de que o conteúdo vai ser criado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | type | string | O tipo do conteúdo (empty, text, image, video or quote). | :heavy_check_mark: |
    | style | object | O estilo do conteúdo. | |
    | data | object | Os dados do conteúdo. | |

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "type": "empty" }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a/contents'
```

## Deletar

Você pode usar esse endpoint para excluir um conteúdo.

- **Endpoint:**
```bash
DELETE https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>/contents/<contentId>
```

- **Resposta:**
```json
Status: 204 (no-content)
```

- **Parâmetros:**
    - ***Path:***
    
    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto do conteúdo que será deletado. | :heavy_check_mark: |
    | blockId | string | O id do bloco do conteúdo que será deletado. | :heavy_check_mark: |
    | rowId | string | O id da linha do conteúdo que será deletado. | :heavy_check_mark: |
    | columnId | string | O id da coluna do conteúdo que será deletado. | :heavy_check_mark: |
    | contentId | string | O id do conteúdo a ser deletado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XDELETE -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a/contents/5cb869d132f905001a024656'
```

## Listar

Você pode usar esse endpoint para listar o conteúdo de uma coluna.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>/contents
```

- **Resposta:**
```json
Status: 200

{
  [
    { ... },
    {
        "_id": "5cb869d132f905001a024656",
        "type": "empty",
        "style": {
             "backgroundImage": "",
             "backgroundRepeat": "no-repeat",
             "backgroundSize": "cover",
             "backgroundPosition": "center center",
             "opacity": 1,
         }
    },
    { ... }
  ]
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto que o conteúdo será listado. | :heavy_check_mark: |
    | blockId | string | O id do bloco que o conteúdo vai ser listado. | :heavy_check_mark: |
    | rowId | string | O id da linha da coluna que o conteúdo vai ser listado. | :heavy_check_mark: |
    | columnId | string | O id da coluna que o conteúdo vai ser listado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a/contents'
```

## Atualizar

Você pode usar esse endpoint para atualizar um conteúdo.

- **Endpoint:**
```bash
PUT https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>/contents/<contentId>
```

- **Resposta:**
```json
Status: 200

{
    "_id": "5cb869d132f905001a024656",
    "type": "empty",
    "style": {
         "backgroundImage": "",
         "backgroundRepeat": "no-repeat",
         "backgroundSize": "cover",
         "backgroundPosition": "center center",
         "opacity": 1,
     }
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto do conteúdo que será atualizado. | :heavy_check_mark: |
    | blockId | string | O id do bloco do conteúdo que será atualizado. | :heavy_check_mark: |
    | rowId | string | O id da linha do conteúdo que será atualizado. | :heavy_check_mark: |
    | columnId | string | O id da coluna do conteúdo que será atualizado. | :heavy_check_mark: |
    | contentId | string | O id do conteúdo a ser atualizado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | type | string | O tipo do conteúdo (empty, text, image, video or quote). | :heavy_check_mark: |
    | style | object | O estilo do conteúdo. | |
    | data | object | Os dados do conteúdo. | |

- **Exemplo:**
```bash
curl -XPUT -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "type": "text", "data": {} }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a/contents/5cb869d132f905001a024656'
```

## Recuperar

Você pode usar esse endpoint para recuperar um conteúdo.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>/contents/<contentId>
```

- **Resposta:**
```json
Status: 200

{
    "_id": "5cb869d132f905001a024656",
    "type": "empty",
    "style": {
         "backgroundImage": "",
         "backgroundRepeat": "no-repeat",
         "backgroundSize": "cover",
         "backgroundPosition": "center center",
         "opacity": 1,
     }
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto do conteúdo que será recuperado. | :heavy_check_mark: |
    | blockId | string | O id do bloco do conteúdo que será recuperado. | :heavy_check_mark: |
    | rowId | string | O id da linha do conteúdo que será recuperado. | :heavy_check_mark: |
    | columnId | string | O id da coluna do conteúdo que será recuperado. | :heavy_check_mark: |
    | contentId | string | O id do conteúdo a ser recuperado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a/contents/5cb869d132f905001a024656'
```
