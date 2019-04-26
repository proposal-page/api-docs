# Projects

[[toc]]

## Clone

You can use this endpoint to clone a project.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/clone
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that is going to be cloned. | :heavy_check_mark: |

    - ***Header:***
    
    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/clone'
```

## Cover

You can use this endpoint to generate/regenerate a project cover.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>/screenshot
```

- **Response:**
```json
Status: 200

{}
```

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that the cover is going to be generated/regenerated. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/screenshot'
```

## Create

You can use this endpoint to create a project.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects
```

- **Response:**
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

- **Parameters:**
    - ***Path:*** Empty.

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | title | string | Project Title. | :heavy_check_mark: |
    | token | string | Project Token. | |
    | fonts | array | Project Fonts. | |
    | publish | boolean | Project is published or not. | |
    | secure | boolean | Project is secure (protected with a password) or not. | |
    | password | string | Project Password. | |
    | blocks | array | Project blocks. | |
    | currency | string | Project currency. | |

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "title": "Project Title", "blocks": [] }' 'https://api.proposalpage.com/projects'
```

## Create From Template

You can use this endpoint to create a project from a template.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<templateId>/copy
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | templateId | string | The id of the template that the project will be created from. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cb5dfb998e83d001ab9e5e0/copy'
```

## Delete

You can use this endpoint to delete a existing project.

- **Endpoint:**
```bash
DELETE https://api.proposalpage.com/projects/<projectId>
```

- **Response:**
```json
Status: 204 (no-content)
```

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that is going to be deleted. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |
    - ***Body:*** Empty.

- **Example:**
```bash
curl -XDELETE -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74'
```

## List

You can use this endpoint to list the projects of your account paginated.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects
```

- **Response:**
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

- **Parameters:**
    - ***Path:*** Empty.

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects'
```

## Password

You can use this endpoint to set a password in a project.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/password
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that the password is going to be updated. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | password | string | Project password. | :heavy_check_mark: |

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "password": "my-password" }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/password'
```

## Publish

You can use this endpoint to publish/unpublish a project.

When you make the request, if the project is published it will be unpublished and vice-versa.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/publish
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that is going to be published/unpublished. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/publish'
```

## Retrieve

You can use this endpoint to retrieve a specific project of your account.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/<projectId>
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that the is going to be retrieved. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74'
```

## Secure

You can use this endpoint to secure/unsecure a project.

When you make the request, if the project is secured it will be unsecured and vice-versa.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/projects/<projectId>/secure
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that is going to be secured/unsecured. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XPOST -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/secure'
```

## Templates

You can use this endpoint to list the projects templates paginated.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/projects/templates
```

- **Response:**
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

- **Parameters:**
    - ***Path:*** Empty.

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects/templates'
```

## Update

You can use this endpoint to update a existing project.

- **Endpoint:**
```bash
PUT https://api.proposalpage.com/projects/<projectId>
```

- **Response:**
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

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that is going to be updated. | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |

    - ***Body:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | title | string | Project Title. | |
    | token | string | Project Token. | |
    | fonts | array | Project Fonts. | |
    | publish | boolean | Project is published or not. | |
    | secure | boolean | Project is secure (protected with a password) or not. | |
    | password | string | Project Password. | |
    | blocks | array | Project blocks. | |
    | currency | string | Project currency. | |

- **Example:**
```bash
curl -XPUT -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" -d '{ "title": "Updated Title" }' 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74'
```

## View and Notify

You can use this endpoint to update project last view time and send email with notification only if is not the project owner viewing.

- **Endpoint:**
```bash
PUT https://api.proposalpage.com/projects/<projectId>/view-and-notify
```

- **Response:**
```json
Status: 200

{
  "emailSent": true,
}
```

- **Parameters:**
    - ***Path:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | projectId | string | The id of the project that are being viewed | :heavy_check_mark: |

    - ***Header:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. |  |

    - ***Body:*** Empty.

- **Example:**
```bash
curl -XPUT -H "Content-type: application/json" 'https://api.proposalpage.com/projects/5cbe31f7372099001a4f0d74/view-and-notify'
```
