// import '@/styles/globals.css';
import 'normalize.css';
import '~/assets/styles/main.scss';

import type {AppType} from 'next/app';
import {Provider} from 'react-redux';
import {wrapper} from '~/store';
import App from 'next/app';
import {LayoutDefault} from '~/components/layouts';
import PageError from './_error';
import React from 'react';
import Head from 'next/head';
import {KB} from '~/components/KB';
import NextNProgress from 'nextjs-progressbar';
import {TooltipPlugin} from '~/components/TooltipPlugin';
import {globalActions} from '~/store/global';

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

const BlogApp: AppType = ({Component, ...rest}) => {
    const {store, props} = wrapper.useWrappedStore(rest);

    if (props.pageProps.error) {
        return <PageError {...props.pageProps.error} />;
    }

    const Layout = Component['layout'] || LayoutDefault;

    return (
        <>
            <AppHeadMeta />
            <NextNProgress />
            <TooltipPlugin />
            <Provider store={store}>
                {/* <KB> */}
                <Layout>
                    <Component {...props.pageProps} />
                </Layout>
                {/* </KB> */}
            </Provider>
        </>
    );
};

BlogApp.getInitialProps = wrapper.getInitialAppProps(store => async appCtx => {
    // console.log('invoke getInitialAppProps');
    // You have to do dispatches first, before...
    await store.dispatch(globalActions.initialize());

    // ...before calling (and awaiting!!!!) the children's getInitialProps
    const childrenGip = await App.getInitialProps(appCtx);

    return {
        pageProps: {
            ...childrenGip.pageProps
        }
    };
});

export default BlogApp;
