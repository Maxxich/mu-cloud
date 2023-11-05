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
            {
                protocol: 'https',
                hostname: 'mucloud.onrender.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        })
        return config;
    }
}

module.exports = nextConfig
