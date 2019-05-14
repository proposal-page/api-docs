(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{184:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"visao-global"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#visao-global","aria-hidden":"true"}},[e._v("#")]),e._v(" Visão Global")]),e._v(" "),t("p",[e._v("Nossa API é exposta como um serviço HTTP/1 e HTTP/2 com SSL. Todos os endpoints estão sobre a URL "),t("code",[e._v("https: // api.proposalpage.com")]),e._v(" e geralmente seguem a arquitetura REST.")]),e._v(" "),t("h2",{attrs:{id:"estrutura-conceitual"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#estrutura-conceitual","aria-hidden":"true"}},[e._v("#")]),e._v(" Estrutura Conceitual")]),e._v(" "),t("p",[e._v("A estrutura conceitual de um projeto (proposta) é a seguinte:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/**\n * Estrutura conceitual\n * project (projeto)\n *  |\n *  |--\x3e blocks (blocos)\n *   |\n *   |--\x3e rows (linhas)\n *     |\n *     |--\x3e cols (colunas)\n *       |\n *       |--\x3e contents (conteúdos)\n *         |\n *         |--\x3e types {quote, image, text, etc} (tipos {quote, imagem, texto, etc})\n */\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br")])]),t("h2",{attrs:{id:"versao-atual"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#versao-atual","aria-hidden":"true"}},[e._v("#")]),e._v(" Versão Atual")]),e._v(" "),t("p",[e._v("Por padrão, todas as requisições feitas para "),t("code",[e._v("https://api.proposalpage.com")]),e._v(" recebem a versão v1 da API REST.")]),e._v(" "),t("p",[e._v("Tentamos evitar o máximo de compatibilidade com versões anteriores.")]),e._v(" "),t("h2",{attrs:{id:"tipo-de-conteudo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tipo-de-conteudo","aria-hidden":"true"}},[e._v("#")]),e._v(" Tipo de conteúdo")]),e._v(" "),t("p",[e._v("Todos os pedidos devem ser codificados como JSON com o cabeçalho "),t("code",[e._v("Content-Type: application/json")]),e._v(". A maioria das respostas, incluindo erros, é codificada exclusivamente como JSON.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Content-Type: application/json\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"autenticacao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autenticacao","aria-hidden":"true"}},[e._v("#")]),e._v(" Autenticação")]),e._v(" "),t("p",[e._v("Forneça seu token de autenticação como parte do cabeçalho de autorização.")]),e._v(" "),t("p",[e._v("Se a autenticação não for bem-sucedida, o código de status "),t("strong",[e._v("401")]),e._v(" será retornado.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Authorization: Bearer $TOKEN\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("blockquote",[t("p",[e._v("Após detectar várias solicitações com credenciais inválidas dentro de um curto período, a API rejeitará temporariamente todas as tentativas de autenticação para esse usuário (incluindo as com credenciais válidas) com "),t("code",[e._v("403 Forbidden")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"verbos-http"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verbos-http","aria-hidden":"true"}},[e._v("#")]),e._v(" Verbos HTTP")]),e._v(" "),t("p",[e._v("Sempre que possível, a API se esforça para usar os verbos HTTP apropriados para cada ação.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[e._v("Verbo")]),e._v(" "),t("th",{staticStyle:{"text-align":"center"}},[e._v("Descrição")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("HEAD")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("Pode ser emitido contra qualquer recurso para obter apenas as informações do cabeçalho HTTP.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("GET")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("Usado para recuperar recursos.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("POST")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("Usado para criar recursos.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("PATCH")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("Usado para atualizar recursos com dados JSON parciais. Por exemplo, um recurso de problema possui atributos de título e corpo. Uma solicitação PATCH pode aceitar um ou mais dos atributos para atualizar o recurso.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("PUT")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("Usado para substituir recursos ou coleções. Para solicitações PUT sem atributo body, defina o cabeçalho Content-Length como zero.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("DELETE")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("Usado para deletar recursos.")])])])]),e._v(" "),t("h2",{attrs:{id:"paginacao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paginacao","aria-hidden":"true"}},[e._v("#")]),e._v(" Paginação")]),e._v(" "),t("p",[e._v("Solicitações que retornam vários itens serão paginadas para 10 itens por padrão. Você pode especificar mais páginas com o parâmetro "),t("code",[e._v("?page")]),e._v(". Para alguns recursos, você também pode definir um tamanho de página personalizado de até 100 com o parâmetro "),t("code",[e._v("?itemsPerPage")]),e._v(". Note que por razões técnicas nem todos os endpoints respeitam o parâmetro "),t("code",[e._v("?itemsPerPage")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -XGET -H "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$TOKEN")]),e._v("'")]),e._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content-type: application/json"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://api.proposalpage.com/projects?page=2&itemsPerPage=100'")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"limitacao-de-requisicoes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitacao-de-requisicoes","aria-hidden":"true"}},[e._v("#")]),e._v(" Limitação de Requisições")]),e._v(" "),t("p",[e._v("Nós limitamos o número de requisições que você pode fazer durante um certo período de tempo. Os limites variam e são especificados pelo seguinte cabeçalho em todas as respostas:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[e._v("Header Name")]),e._v(" "),t("th",{staticStyle:{"text-align":"center"}},[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("X-RateLimit-Limit")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("O número máximo de requisições que você pode fazer por segundo.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("X-RateLimit-Remaining")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("O número de requisições restantes na janela de limite de requisições atual.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("X-RateLimit-Reset")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("A hora em que a janela de limite de requisições atual é redefinida em UTC epoch seconds.")])])])]),e._v(" "),t("p",[e._v("Se você exceder o limite de requisições, uma resposta de erro retornará com o status "),t("code",[e._v("429 Too Many Requests")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Status: 429 Too Many Requests\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])}],!1,null,null,null);a.default=r.exports}}]);