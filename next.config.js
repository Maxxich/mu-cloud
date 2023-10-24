/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        remotePatterns: [
            {
              protocol: 'http',
              hostname: '95.163.236.151',
              port: '5001',
              pathname: '/**',
            },
            {
              protocol: 'http',
              hostname: 'localhost',
              port: '5001',
              pathname: '/**',
            },
          ],
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
