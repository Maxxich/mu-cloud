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
            'mucloud.onrender.com',
            'res.cloudinary.com'
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
