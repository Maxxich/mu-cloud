/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5001',
                pathname: '/**',
            },
        ],
        domains: [
            process.env.NEXT_PUBLIC_BACKEND_DOMAIN
        ]
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        });
        return config;
    },
}

module.exports = nextConfig
