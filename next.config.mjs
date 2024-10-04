/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'localhost', // Cambia esto si vas a usar un dominio diferente
                port: '', // Deja vacío si no necesitas especificar un puerto
                pathname: '/**', // Ajusta según tu estructura de imágenes
            },
            {
                protocol: 'https',
                hostname: 'example.com', // Cambia esto por el dominio de tus imágenes
                pathname: '/images/**', // Ajusta según tu estructura de imágenes
            },
        ]
    }
};

export default nextConfig;
