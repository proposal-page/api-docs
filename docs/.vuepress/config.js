module.exports = {
    lang: 'en-US',
    title: 'proposal-page/api-docs',
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: 'Proposal Page - API Docs',
            description: 'API Docs'
        },
        '/pt/': {
            lang: 'pt-BR',
            title: 'Proposal Page - Documentação da API',
            description: 'Documentação da API'
        }
    },
    base: '/api-docs/',
    head: [
        ['link', { rel: 'icon', href: 'https://app.proposalpage.com/static/favicon-green.ico' }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        docsRepo: 'proposal-page/api-docs',
        search: true,
        editLinks: true,
        locales: {
            '/': {
                lastUpdated: 'Last Updated',
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'English',
                // text for the edit-on-github link
                editLinkText: 'Edit this page on GitHub',
                // config for Service Worker
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                // algolia docsearch options for current locale
                algolia: {},
                sidebar: {
                    '/': [
                        {
                            title: 'Getting Started',
                            collapsable: false,
                            children: [
                                '',
                                'getting-started/overview.md',
                                'getting-started/schemas.md',
                                'getting-started/content-types.md'
                            ]
                        },
                        {
                            title: 'API',
                            collapsable: false,
                            children: [
                                'api/auth.md',
                                'api/projects.md',
                                'api/blocks.md',
                                'api/rows.md',
                                'api/columns.md',
                                'api/contents.md',
                            ]
                        },
                        {
                            title: 'Errors',
                            collapsable: false,
                            children: [
                                'errors/description.md',
                            ]
                        },
                    ],
                },
                nav: [
                    { text: 'GitHub', link: 'https://github.com/proposal-page/api-docs' },
                    { text: 'PHP SDK', link: 'https://github.com/proposal-page/sdk-php' },
                    { text: 'JS SDK', link: 'https://github.com/proposal-page/sdk-js' },
                ],
            },
            '/pt/': {
                lastUpdated: 'Última Atualização',
                // text for the language dropdown
                selectText: 'Idiomas',
                // label for this locale in the language dropdown
                label: 'Português',
                // text for the edit-on-github link
                editLinkText: 'Editar essa página no GitHub',
                // config for Service Worker
                serviceWorker: {
                    updatePopup: {
                        message: "Novo conteúdo disponível.",
                        buttonText: "Atualizar"
                    }
                },
                // algolia docsearch options for current locale
                algolia: {},
                sidebar: {
                    '/pt/': [
                        {
                            title: 'Primeiros Passos',
                            collapsable: false,
                            children: [
                                '',
                                '/pt/getting-started/overview.md',
                                '/pt/getting-started/schemas.md',
                                '/pt/getting-started/content-types.md'
                            ]
                        },
                        {
                            title: 'API',
                            collapsable: false,
                            children: [
                                '/pt/api/auth.md',
                                '/pt/api/projects.md',
                                '/pt/api/blocks.md',
                                '/pt/api/rows.md',
                                '/pt/api/columns.md',
                                '/pt/api/contents.md',
                            ]
                        },
                        {
                            title: 'Erros',
                            collapsable: false,
                            children: [
                                '/pt/errors/description.md',
                            ]
                        },
                    ],
                },
                nav: [
                    { text: 'GitHub', link: 'https://github.com/proposal-page/api-docs' },
                    { text: 'PHP SDK', link: 'https://github.com/proposal-page/sdk-php' },
                    { text: 'JS SDK', link: 'https://github.com/proposal-page/sdk-js' },
                ],
            }
        },
    },
};
