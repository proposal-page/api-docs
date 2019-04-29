# Auth

[[toc]]

## Token

Você pode usar esse endpoint para fazer o login na aplicação com sua conta e receber um token.

- **Endpoint:**
```bash
POST https://api.proposalpage.com/accounts/auth/token
```

- **Parâmetros:**
    - ***Path:*** Vazio.

    - ***Cabeçalho:*** Vazio.

    - ***Corpo:***

    | Nome | Tipo | Descrição | Requerido |
    | :-: | :-: | :-: | :-: |
    | username | string | Seu nome de usuário da conta. | :heavy_check_mark: |
    | password | string | Sua senha da conta. | :heavy_check_mark: |

- **Resposta:**
```json
Status: 200

{
  "token": "seu-token-aqui",
}
```

- **Exemplo:**
```bash
curl -XPOST -H "Content-type: application/json" -d '{"username":"test@example.com","password":"test"}' 'https://api.proposalpage.com/accounts/auth/token'
```

## Me

Você pode usar esse endpoint para receber seu ID de usuário.

- **Endpoint:**
```bash
GET https://api.proposalpage.com/accounts/auth/me
```

- **Resposta:**
```json
Status: 200

{
  "id": "seu-id-aqui",
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
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/accounts/auth/me'
```
