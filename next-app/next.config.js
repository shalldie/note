module.exports = async (_phase, {defaultConfig: _defaultConfig}) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        // experimental: {
        //     appDir: true
        // },
        reactStrictMode: false,
        env: {
            CDN_PREFIX: process.env.CDN_PREFIX
        },
        sassOptions: {
            prependData: [
                //
                `$CDN_PREFIX: '${process.env.CDN_PREFIX}';`,
                `@import "~/assets/styles/variable.scss";`,
                `@import "~/assets/styles/mixin.scss";`
            ].join('\n')
        },
        async rewrites() {
            return {
                fallback: [
                    {
                        source: '/api/:path*',
                        destination: `https://nosaid.com/api/:path*`
                    },
                    {
                        source: '/static/:path*',
                        destination: `https://nosaid.com/static/:path*`
                    }
                ]
            };
        }
    };

    // bundle 分析
    if (process.env.ANALYZE) {
        const withBundleAnalyzer = require('@next/bundle-analyzer')({
            enabled: true
        });

        return withBundleAnalyzer(nextConfig);
    }

    return nextConfig;
};
