import {defineConfig} from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: '看房',
    description: '最近看的房',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            // {text: 'Home', link: '/'},
            // {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: '看房记录',
                items: [
                    {text: '新房 - 森兰万安境', link: '/new/森兰万安境'},
                    {text: '新房 - 其它', link: '/new/others'},
                    {text: '二手房', link: '/second'}
                ]
            }
        ]

        // socialLinks: [{icon: 'github', link: 'https://github.com/vuejs/vitepress'}]
    }
});
