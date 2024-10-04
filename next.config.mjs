/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'example.com',
              pathname: '/images/**',
            },
        ]
    }
};

export default nextConfig;
