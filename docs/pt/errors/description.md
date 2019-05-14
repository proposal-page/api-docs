# Descrição

A API do [Proposal Page][@proposal-page] usa os seguintes códigos de erro:

Código do erro | Significado
---------- | -------
400 | Bad Request -- Sua requisição tem dados inválidos ou está formatada de maneira incorreta.
401 | Unauthorized -- Seu Bearer Token está errado.
403 | Forbidden -- O recurso especificado está oculto apenas para administradores.
404 | Not Found -- O recurso especificado não pôde ser encontrado.
405 | Method Not Allowed -- Você tentou acessar um recurso com um método inválido.
406 | Not Acceptable -- Você solicitou um formato que não é json.
410 | Gone -- O recurso solicitado foi removido de nossos servidores.
418 | I'm a teapot.
422 | Unprocessable Entity -- Sua requisição tem dados válidos, mas viola alguma restrição.
429 | Too Many Requests -- Você está enviando muitas requisiçõs por minuto!
500 | Internal Server Error -- Ocorreu um problema com o nosso servidor. Tente mais tarde.
503 | Service Unavailable -- Estamos temporariamente off-line para manutenção. Por favor, tente novamente mais tarde.
504 | Gateway Timeout -- O servidor, enquanto atuava como um gateway ou proxy, não recebeu uma resposta oportuna do servidor upstream especificado pelo URI (por exemplo, HTTP, FTP, LDAP) ou algum outro servidor auxiliar (por exemplo, DNS) necessário para acessar na tentativa de completar a requisição.

[@proposal-page]: https://proposalpage.com
