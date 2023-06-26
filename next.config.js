const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://gestion.contenu.algego.com/wp-json/:path*',
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/api/:path*',
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
        const proxy = createProxyMiddleware('/api', {
            target: 'https://cors-anywhere.herokuapp.com/https://gestion.contenu.algego.com',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
        });

        return [proxy];
    },
};
