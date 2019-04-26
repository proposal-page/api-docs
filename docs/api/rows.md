# Rows

[[toc]]

## Clone

You can use this endpoint to clone a row and put it in a specific position.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/clone/<position>
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the row that is going to be updated. | :heavy_check_mark: |
    | blockId | string | The id of the block of the row that is going to be updated. | :heavy_check_mark: |
    | rowId | string | The id of the row that is going to be updated. | :heavy_check_mark: |
    | position | number | The position to put the row that is going to be cloned (eg. 0 is first). | |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/clone/0'
```

## Create

You can use this endpoint to create a row.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the row that is going to be created. | :heavy_check_mark: |
    | blockId | string | The id of the block of the row that is going to be created. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | description | string | Row description. | :heavy_check_mark: |
    | columns | array | Row columns. | |

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "description": "New row", "columns": [] }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows'
```

## Delete

You can use this endpoint to delete a row.

- **Endpoint:**
```bash
DELETE https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>
```

- **Response:**
```json
Status: 204 (no-content)
```

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the row that is going to be deleted. | :heavy_check_mark: |
    | blockId | string | The id of the block of the row that is going to be deleted. | :heavy_check_mark: |
    | rowId | string | The id of the row that is going to be deleted. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XDELETE -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657'
```

## List

You can use this endpoint to list the rows of a block.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that the block rows are going to be listed. | :heavy_check_mark: |
    | blockId | string | The id of the block that the rows are going to be listed. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows'
```

## Update

You can use this endpoint to update a row.

- **Endpoint:**
```bash
PUT https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the row that is going to be updated. | :heavy_check_mark: |
    | blockId | string | The id of the block of the row that is going to be updated. | :heavy_check_mark: |
    | rowId | string | The id of the row that is going to be updated. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | description | string | Row description. | |
    | columns | array | Row columns. | |

- **Example:**
```bash
curl -XPUT -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "description": "Updated description" }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657'
```

## Retrieve

You can use this endpoint to retrieve a row.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the row that is going to be retrieved. | :heavy_check_mark: |
    | blockId | string | The id of the block of the row that is going to be retrieved. | :heavy_check_mark: |
    | rowId | string | The id of the row that is going to be retrieved. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657'
```
