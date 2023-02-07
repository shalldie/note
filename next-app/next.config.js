/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true
    // },
    reactStrictMode: true,
    async rewrites() {
        return {
            fallback: [
                {
                    source: '/api/:path*',
                    destination: `https://nosaid.com/api/:path*`
                }
            ]
        };
    }
};

module.exports = nextConfig;
