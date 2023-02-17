import {Html, Head, Main, NextScript} from 'next/document';
import {Fragment} from 'react';

export default function Document() {
    return (
        <Html lang="zh-CN">
            <Head>
                <meta charSet="utf-8" />
                {/* <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-touch-fullscreen" content="yes" />
                <meta name="format-detection" content="telephone=no,email=no" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta
                    name="keywords"
                    content="xieshuang,shalldie,xieshuang的博客,nosaid,闲暇时候的文章,nodejs,javascript,js,es6,typescript,nestjs,vue,nuxt,ssr,web,技术,前端,博客,程序员"
                />
                <meta name="description" content="xieshuang 的博客，闲暇时候的文章" /> */}
                {/* <title>闲暇时候的文章</title> */}
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link
                    rel="stylesheet"
                    href="https://fastly.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
