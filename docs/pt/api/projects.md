# Projetos

[[toc]]

## Clonar

Você pode usar esse endpoint para clonar um projeto.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/clone
```

- **Resposta:**
```json
Status: 200

{
  "title": "Project Title",
  "fonts": [],
  "publish": false,
  "secure": false,
  "countViews": 0,
  "timeViews": 0,
  "priority": 0,
  "_id": "5cbe31f7372099001a4f0d74",
  "blocks": [ blockSchema ],
  "userId": "5c9cfd2f853c5a000f47a749",
  "accountId": "5c9cfd2f853c5a000f47a748",
  "token": "39d4dbe3-3dd6-3e8f-87b9-5f9dcf3659dc",
  "slug": "project-title",
  "publishURL": "https://app.proposalpage.com/view/5cbe31f7372099001a4f0d74/project-title",
  "createdAt": "2019-04-22T21:28:23.495Z",
  "updatedAt": "2019-04-22T21:28:23.495Z",
  "__v": 0
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto que será clonado. | :heavy_check_mark: |

    - ***Cabeçalho:***
    
    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/clone'
```

## Capa

Você pode usar esse endpoint para gerar/regenerar a capa de um projeto.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/screenshot
```

- **Resposta:**
```json
Status: 200

{}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto que a capa será gerada/regenerada. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/screenshot'
```

## Criar

Você pode usar esse endpoint para criar um projeto.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects
```

- **Resposta:**
```json
Status: 201

{
  "title": "Project Title",
  "fonts": [],
  "publish": false,
  "secure": false,
  "countViews": 0,
  "timeViews": 0,
  "priority": 0,
  "_id": "5cbe31f7372099001a4f0d74",
  "blocks": [ blockSchema ],
  "userId": "5c9cfd2f853c5a000f47a749",
  "accountId": "5c9cfd2f853c5a000f47a748",
  "token": "39d4dbe3-3dd6-3e8f-87b9-5f9dcf3659dc",
  "slug": "project-title",
  "publishURL": "https://app.proposalpage.com/view/5cbe31f7372099001a4f0d74/project-title",
  "createdAt": "2019-04-22T21:28:23.495Z",
  "updatedAt": "2019-04-22T21:28:23.495Z",
  "__v": 0
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
    | title | string | Título do projeto. | :heavy_check_mark: |
    | token | string | Token do projeto. | |
    | fonts | array | Fontes usadas no projeto. | |
    | publish | boolean | Se o projeto está publicado ou não | |
    | secure | boolean | Se projeto é seguro (protegido por senha) ou não. | |
    | password | string | Senha do projeto. | |
    | blocks | array | Blocos do projeto. | |
    | currency | string | Moeda do projeto. | |

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "title": "Project Title", "blocks": [] }' 'https://api.proposalpage.com/projects'
```

## Criar a partir de um Template

Você pode usar esse endpoint para criar um projeto a partir de um template.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<templateId>/copy
```

- **Resposta:**
```json
Status: 200

{
  "title": "Project Title",
  "fonts": [],
  "publish": false,
  "secure": false,
  "countViews": 0,
  "timeViews": 0,
  "priority": 0,
  "_id": "5cbe31f7372099001a4f0d74",
  "blocks": [ blockSchema ],
  "userId": "5c9cfd2f853c5a000f47a749",
  "accountId": "5c9cfd2f853c5a000f47a748",
  "token": "39d4dbe3-3dd6-3e8f-87b9-5f9dcf3659dc",
  "slug": "project-title",
  "publishURL": "https://app.proposalpage.com/view/5cbe31f7372099001a4f0d74/project-title",
  "createdAt": "2019-04-22T21:28:23.495Z",
  "updatedAt": "2019-04-22T21:28:23.495Z",
  "__v": 0
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | templateId | string | O id do template do qual o projeto será criado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cb5dfb998e83d001ab9e5e0/copy'
```

## Deletar

Você pode usar esse endpoint para excluir um projeto existente.

- **Endpoint:**
```bash
DELETE https://api.proposalpage.com/projects/<projectId>
```

- **Resposta:**
```json
Status: 204 (no-content)
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto que será deletado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |
    
    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XDELETE -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74'
```

## Listar

Você pode usar esse endpoint para listar os projetos da sua conta de forma paginada.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects
```

- **Resposta:**
```json
Status: 200

{
  "items": [ projectSchema ],
  "totalItems": 50,
  "page": 1,
  "limit": 10,
  "pages": 5,
  "defaultCover": 'https://s3.amazonaws.com/proposal-page-media/default-ss-img.jpg',
}
```

- **Parâmetros:**
    - ***Path:*** Vazio.

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects'
```

## Senha

Você pode usar esse endpoint para definir uma senha em um projeto.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/password
```

- **Resposta:**
```json
Status: 200

{
  "title": "Project Title",
  "fonts": [],
  "publish": false,
  "secure": false,
  "countViews": 0,
  "timeViews": 0,
  "priority": 0,
  "_id": "5cbe31f7372099001a4f0d74",
  "blocks": [ blockSchema ],
  "userId": "5c9cfd2f853c5a000f47a749",
  "accountId": "5c9cfd2f853c5a000f47a748",
  "token": "39d4dbe3-3dd6-3e8f-87b9-5f9dcf3659dc",
  "slug": "project-title",
  "publishURL": "https://app.proposalpage.com/view/5cbe31f7372099001a4f0d74/project-title",
  "createdAt": "2019-04-22T21:28:23.495Z",
  "updatedAt": "2019-04-22T21:28:23.495Z",
  "__v": 0
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto que a senha será atualizada. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | password | string | Senha do projeto. | :heavy_check_mark: |

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "password": "my-password" }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/password'
```

## Publicar

Você pode usar esse endpoint para publicar/cancelar a publicação de um projeto.

Quando a requisição é feita, se o projeto está publicado, ele será despublicado e vice-versa.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/publish
```

- **Resposta:**
```json
Status: 200

{
  "title": "Project Title",
  "fonts": [],
  "publish": false,
  "secure": false,
  "countViews": 0,
  "timeViews": 0,
  "priority": 0,
  "_id": "5cbe31f7372099001a4f0d74",
  "blocks": [ blockSchema ],
  "userId": "5c9cfd2f853c5a000f47a749",
  "accountId": "5c9cfd2f853c5a000f47a748",
  "token": "39d4dbe3-3dd6-3e8f-87b9-5f9dcf3659dc",
  "slug": "project-title",
  "publishURL": "https://app.proposalpage.com/view/5cbe31f7372099001a4f0d74/project-title",
  "createdAt": "2019-04-22T21:28:23.495Z",
  "updatedAt": "2019-04-22T21:28:23.495Z",
  "__v": 0
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto que será publicado/despublicado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/publish'
```

## Recuperar

Você pode usar esse endpoint para recuperar um projeto específico da sua conta.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>
```

- **Resposta:**
```json
Status: 200

{
  "title": "Project Title",
  "fonts": [],
  "publish": false,
  "secure": false,
  "countViews": 0,
  "timeViews": 0,
  "priority": 0,
  "_id": "5cbe31f7372099001a4f0d74",
  "blocks": [ blockSchema ],
  "userId": "5c9cfd2f853c5a000f47a749",
  "accountId": "5c9cfd2f853c5a000f47a748",
  "token": "39d4dbe3-3dd6-3e8f-87b9-5f9dcf3659dc",
  "slug": "project-title",
  "publishURL": "https://app.proposalpage.com/view/5cbe31f7372099001a4f0d74/project-title",
  "createdAt": "2019-04-22T21:28:23.495Z",
  "updatedAt": "2019-04-22T21:28:23.495Z",
  "__v": 0
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto que será recuperado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74'
```

## Proteger

Você pode usar esse endpoint para proteger/desproteger um projeto.

Quando a requisição é feita, se o projeto está protegido, ele será desprotegido e vice-versa.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/secure
```

- **Resposta:**
```json
Status: 200

{
  "title": "Project Title",
  "fonts": [],
  "publish": false,
  "secure": false,
  "countViews": 0,
  "timeViews": 0,
  "priority": 0,
  "_id": "5cbe31f7372099001a4f0d74",
  "blocks": [ blockSchema ],
  "userId": "5c9cfd2f853c5a000f47a749",
  "accountId": "5c9cfd2f853c5a000f47a748",
  "token": "39d4dbe3-3dd6-3e8f-87b9-5f9dcf3659dc",
  "slug": "project-title",
  "publishURL": "https://app.proposalpage.com/view/5cbe31f7372099001a4f0d74/project-title",
  "createdAt": "2019-04-22T21:28:23.495Z",
  "updatedAt": "2019-04-22T21:28:23.495Z",
  "__v": 0
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto que será protegido/desprotegido. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/secure'
```

## Templates

Você pode usar esse endpoint para listar os templates de projetos de forma paginada.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/templates
```

- **Resposta:**
```json
Status: 200

{
  "items": [ projectSchema ],
  "totalItems": 50,
  "page": 1,
  "limit": 10,
  "pages": 5,
  "defaultCover": 'https://s3.amazonaws.com/proposal-page-media/default-ss-img.jpg',
}
```

- **Parâmetros:**
    - ***Path:*** Vazio.

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/templates'
```

## Atualizar

Você pode usar esse endpoint para atualizar um projeto existente.

- **Endpoint:**
```bash
PUT https://api.proposalpage.com/projects/<projectId>
```

- **Resposta:**
```json
Status: 200

{
  "title": "Project Title",
  "fonts": [],
  "publish": false,
  "secure": false,
  "countViews": 0,
  "timeViews": 0,
  "priority": 0,
  "_id": "5cbe31f7372099001a4f0d74",
  "blocks": [ blockSchema ],
  "userId": "5c9cfd2f853c5a000f47a749",
  "accountId": "5c9cfd2f853c5a000f47a748",
  "token": "39d4dbe3-3dd6-3e8f-87b9-5f9dcf3659dc",
  "slug": "project-title",
  "publishURL": "https://app.proposalpage.com/view/5cbe31f7372099001a4f0d74/project-title",
  "createdAt": "2019-04-22T21:28:23.495Z",
  "updatedAt": "2019-04-22T21:28:23.495Z",
  "__v": 0
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto que será atualizado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. | :heavy_check_mark: |

    - ***Corpo:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | title | string | Título do projeto. | |
    | token | string | Token do projeto. | |
    | fonts | array | Fontes usadas no projeto. | |
    | publish | boolean | Se o projeto está publicado ou não | |
    | secure | boolean | Se projeto é seguro (protegido por senha) ou não. | |
    | password | string | Senha do projeto. | |
    | blocks | array | Blocos do projeto. | |
    | currency | string | Moeda do projeto. | |

- **Exemplo:**
```bash
curl -XPUT -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "title": "Updated Title" }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74'
```

## Visualizar e Notificar

Você pode usar esse endpoint para atualizar o último tempo de visualização do projeto e enviar email com notificação somente se não for a visualização do proprietário do projeto.

- **Endpoint:**
```bash
PUT https://api.proposalpage.com/projects/<projectId>/view-and-notify
```

- **Resposta:**
```json
Status: 200

{
  "emailSent": true,
}
```

- **Parâmetros:**
    - ***Path:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | projectId | string | O id do projeto que está sendo visualizado. | :heavy_check_mark: |

    - ***Cabeçalho:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Seu Bearer Token obtido no endpoint autenticação. |  |

    - ***Corpo:*** Vazio.

- **Exemplo:**
```bash
curl -XPUT -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/view-and-notify'
```
