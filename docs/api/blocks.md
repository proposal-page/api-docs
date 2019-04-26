# Blocks

[[toc]]

## Create

You can use this endpoint to create a block.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks
```

- **Response:**
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

- **Parameters:**
    - ***Path:*** Empty.

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:***
    
    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | style | object | Block style. | |
    | description | string | Block description. | :heavy_check_mark: |
    | rows | array | Block rows. | |

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "description": "New block", "rows": [] }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks'
```

## Clone

You can use this endpoint to clone a block and put it in a specific position.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/clone/<position>
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the block that is going to be cloned. | :heavy_check_mark: |
    | blockId | string | The id of the block that is going to be cloned. | :heavy_check_mark: |
    | position | number | The position to put the block that is going to be cloned (eg. 0 is first). | |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/clone/0'
```

## Delete

You can use this endpoint to delete a block.

- **Endpoint:**
```bash
DELETE https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>
```

- **Response:**
```json
Status: 204 (no-content)
```

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the block that is going to be deleted. | :heavy_check_mark: |
    | blockId | string | The id of the block that is going to be deleted. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XDELETE -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae'
```

## List

You can use this endpoint to list the blocks of a project.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that the blocks are going to be listed. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks'
```

## Move Backward

You can use this endpoint to move a block backward.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/backward
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the block that is going to be moved backward. | :heavy_check_mark: |
    | blockId | string | The id of the block that is going to be moved backward. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/forward'
```

## Move Forward

You can use this endpoint to move a block forward.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/forward
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the block that is going to be moved forward. | :heavy_check_mark: |
    | blockId | string | The id of the block that is going to be moved forward. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/forward'
```

## Update

You can use this endpoint to update a block.

- **Endpoint:**
```bash
PUT https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the block that is going to be updated. | :heavy_check_mark: |
    | blockId | string | The id of the block that is going to be updated. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:***
    
    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | style | object | Block style. | |
    | description | string | Block description. | |
    | rows | array | Block rows. | |

- **Example:**
```bash
curl -XPUT -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "description": "Updated block description" }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae'
```

## Retrieve

You can use this endpoint to retrieve a block.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the block that is going to be retrieved. | :heavy_check_mark: |
    | blockId | string | The id of the block that is going to be retrieved. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae'
```
