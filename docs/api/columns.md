# Columns

[[toc]]

## Create

You can use this endpoint to create a column.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns
```

- **Response:**
```json
Status: 201

{
  "_id": "5cc0ac42003a7c001ab5c95a",
  "size": "12",
  "contents": [ contentSchema ],
}
```

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the column that is going to be created. | :heavy_check_mark: |
    | blockId | string | The id of the block of the column that is going to be created. | :heavy_check_mark: |
    | rowId | string | The id of the row of the column that is going to be created. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | size | number | Column size (min 1 and max 12), the sum of the sizes of the columns of a row must not exceed 12. | :heavy_check_mark: |
    | contents | array | Column contents. | |

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "size": 12, "contents": [] }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns'
```

## Delete

You can use this endpoint to delete a column.

- **Endpoint:**
```bash
DELETE https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>
```

- **Response:**
```json
Status: 204 (no-content)
```

- **Parameters:**
    - ***Path:***
    
    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the column that is going to be deleted. | :heavy_check_mark: |
    | blockId | string | The id of the block of the column that is going to be deleted. | :heavy_check_mark: |
    | rowId | string | The id of the row of the column that is going to be deleted. | :heavy_check_mark: |
    | columnId | string | The id of the column to be deleted. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XDELETE -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a'
```

## List

You can use this endpoint to list the columns of a row.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that the block rows are going to be listed. | :heavy_check_mark: |
    | blockId | string | The id of the block that the rows are going to be listed. | :heavy_check_mark: |
    | rowId | string | The id of the row of the column that are going to be listed. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns'
```

## Update

You can use this endpoint to update a column.

- **Endpoint:**
```bash
PUT https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>
```

- **Response:**
```json
Status: 200

{
  "_id": "5cc0ac42003a7c001ab5c95a",
  "size": "12",
  "contents": [ contentSchema ],
}
```

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the column that is going to be updated. | :heavy_check_mark: |
    | blockId | string | The id of the block of the column that is going to be updated. | :heavy_check_mark: |
    | rowId | string | The id of the row of the column that is going to be updated. | :heavy_check_mark: |
    | columnId | string | The id of the column that is going to be updated. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | size | number | Column size (min 1 and max 12), the sum of the sizes of the columns of a row must not exceed 12. | |
    | contents | array | Column contents. | |

- **Example:**
```bash
curl -XPUT -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "size": 11 }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a'
```

## Retrieve

You can use this endpoint to retrieve a column.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>
```

- **Response:**
```json
Status: 200

{
  "_id": "5cc0ac42003a7c001ab5c95a",
  "size": "12",
  "contents": [ contentSchema ],
}
```

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the column that is going to be retrieved. | :heavy_check_mark: |
    | blockId | string | The id of the block of the column that is going to be retrieved. | :heavy_check_mark: |
    | rowId | string | The id of the row of the column that is going to be retrieved. | :heavy_check_mark: |
    | columnId | string | The id of the column that is going to be retrieved. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty

- **Example:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a'
```
