# Auth

[[toc]]

## Token

You can use this endpoint to login in the application with your account and receive a token.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/accounts/auth/token
```

- **Parameters:**
    - ***Header:*** Empty.

    - ***Body:***

    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | username | string | Your account username | :heavy_check_mark: |
    | password | string | Your account password | :heavy_check_mark: |

- **Response:**
```json
Status: 200

{
  "token": "your-token-here",
}
```

- **Example:**
```bash
curl -XPOST -H "Content-type: application/json" -d '{"username":"test@example.com","password":"test"}' 'https://api.proposalpage.com/accounts/auth/token'
```

## Me

You can use this endpoint to receive your user id.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/accounts/auth/me
```

- **Response:**
```json
Status: 200

{
  "id": "your-id-here",
}
```

- **Parameters:**
    - ***Header:***
    
    | Name | Type | Description | Required |
    | :-: | :-: | :-: | :-: |
    | Authorization | string | Your Bearer Token obtained in the Auth Token endpoint. | :heavy_check_mark: |
    - ***Body:*** Empty.

- **Example:**
```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/accounts/auth/me'
```