# Contents

[[toc]]

## Create

You can use this endpoint to create a content.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>/contents
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that the content is going to be created. | :heavy_check_mark: |
    | blockId | string | The id of the block that the content is going to be created. | :heavy_check_mark: |
    | rowId | string | The id of the row of the column that the content is going to be created. | :heavy_check_mark: |
    | columnId | string | The id of the column of that the content is going to be created. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | type | string | The type of the content (empty, text, image, video or quote). | :heavy_check_mark: |
    | style | object | The style of the content. | |
    | data | object | The data of the content. | |

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "type": "empty" }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a/contents'
```

## Delete

You can use this endpoint to delete a content.

- **Endpoint:**
```bash
DELETE https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>/contents/<contentId>
```

- **Response:**
```json
Status: 204 (no-content)
```

- **Parameters:**
    - ***Path:***
    
    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the content that is going to be deleted. | :heavy_check_mark: |
    | blockId | string | The id of the block of the content that is going to be deleted. | :heavy_check_mark: |
    | rowId | string | The id of the row of the content that is going to be deleted. | :heavy_check_mark: |
    | columnId | string | The id of the column of the content that is going to be deleted. | :heavy_check_mark: |
    | contentId | string | The id of the content to be deleted. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XDELETE -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a/contents/5cb869d132f905001a024656'
```

## List

You can use this endpoint to list the contents of a column.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>/contents
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that the contents are going to be listed. | :heavy_check_mark: |
    | blockId | string | The id of the block that the contents are going to be listed. | :heavy_check_mark: |
    | rowId | string | The id of the row of the column that the contents are going to be listed. | :heavy_check_mark: |
    | columnId | string | The id of the column that the contents are going to be listed. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a/contents'
```

## Update

You can use this endpoint to update a content.

- **Endpoint:**
```bash
PUT https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>/contents/<contentId>
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the content that is going to be updated. | :heavy_check_mark: |
    | blockId | string | The id of the block of the content that is going to be updated. | :heavy_check_mark: |
    | rowId | string | The id of the row of the content that is going to be updated. | :heavy_check_mark: |
    | columnId | string | The id of the column of the content that is going to be updated. | :heavy_check_mark: |
    | contentId | string | The id of the content to be updated. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | type | string | The type of the content (empty, text, image, video or quote). | :heavy_check_mark: |
    | style | object | The style of the content. | |
    | data | object | The data of the content. | |

- **Example:**
```bash
curl -XPUT -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "type": "text", "data": {} }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a/contents/5cb869d132f905001a024656'
```

## Retrieve

You can use this endpoint to retrieve a column.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/blocks/<blockId>/rows/<rowId>/columns/<columnId>/contents/<contentId>
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project of the content that is going to be retrieved. | :heavy_check_mark: |
    | blockId | string | The id of the block of the content that is going to be retrieved. | :heavy_check_mark: |
    | rowId | string | The id of the row of the content that is going to be retrieved. | :heavy_check_mark: |
    | columnId | string | The id of the column of the content that is going to be retrieved. | :heavy_check_mark: |
    | contentId | string | The id of the content to be retrieved. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/blocks/5c41db25d139900014b5d8ae/5cb869d232f905001a024657/rows/5cb869d232f905001a024657/columns/5cc0ac42003a7c001ab5c95a/contents/5cb869d132f905001a024656'
```
