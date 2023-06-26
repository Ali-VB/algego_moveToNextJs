const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
    async rewrites() {
        return [
            {
                source: '/gestion.contenu.algego.com/wp-json/:path*',
                destination: 'https://gestion.contenu.algego.com/wp-json/:path*',
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/gestion.contenu.algego.com/wp-json/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                    },
                ],
            },
        ];
    },
    async serverMiddleware() {
        const proxy = createProxyMiddleware('/gestion.contenu.algego.com/wp-json', {
            target: 'https://gestion.contenu.algego.com',
            changeOrigin: true,
            pathRewrite: { '^/gestion.contenu.algego.com/wp-json': '' },
        });

        return [proxy];
    },
};
