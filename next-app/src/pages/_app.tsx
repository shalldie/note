import 'normalize.css';
import '~/assets/styles/main.css';
import '~/assets/styles/main.scss';

import type {AppType} from 'next/app';
import {Provider} from 'react-redux';
import {wrapper} from '~/store';
import App from 'next/app';
import PageError from './_error';
import React from 'react';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import {TooltipPlugin} from '~/components/TooltipPlugin';
import {globalActions} from '~/store/global';
import {KProvider} from '~/components/KProvider';

const AppHeadMeta: React.FC = () => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-touch-fullscreen" content="yes" />
            <meta name="format-detection" content="telephone=no,email=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta
                name="keywords"
                content="xieshuang,shalldie,xieshuang的博客,nosaid,闲暇时候的文章,nodejs,javascript,js,es6,typescript,nestjs,vue,nuxt,ssr,web,技术,前端,博客,程序员"
            />
            <meta name="description" content="xieshuang 的博客，闲暇时候的文章" />
            <title>闲暇时候的文章</title>
        </Head>
    );
};

const BlogApp: AppType<{error?: any}> = ({Component, pageProps}) => {
    const store = wrapper.useStore();

    if (pageProps.error) {
        return <PageError {...pageProps.error} />;
    }

    return (
        <>
            <AppHeadMeta />
            <NextNProgress />
            <TooltipPlugin />
            <Provider store={store}>
                <KProvider>
                    <Component {...pageProps} />
                </KProvider>
            </Provider>
        </>
    );
};

(BlogApp as any).getInitialProps = wrapper.getInitialAppProps(store => async appCtx => {
    // You have to do dispatches first, before...
    await store.dispatch(globalActions.serverInit() as any);

    // ...before calling (and awaiting!!!!) the children's getInitialProps
    // @see https://nextjs.org/docs/advanced-features/custom-app#caveats
    const childrenGip = await App.getInitialProps(appCtx);

    return {
        pageProps: {
            // And you have to spread the children's GIP result into pageProps
            // @see https://nextjs.org/docs/advanced-features/custom-app#caveats
            ...childrenGip.pageProps
        }
    };
});

export default BlogApp;
