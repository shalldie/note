// import '@/styles/globals.css';
import '~/assets/styles/main.scss';
import type {AppContext, AppProps, AppType} from 'next/app';
import {Navbar} from '~/components/Navbar';
import {Provider} from 'react-redux';
import {wrapper} from '~/store';
import {NextPage} from 'next';
import {commonActions} from '~/store/common';
import App from 'next/app';
import {ELayoutTemplte} from '~/components/layouts';
import PageError from './_error';

const MyApp: AppType = ({Component, ...rest}) => {
    const {store, props} = wrapper.useWrappedStore(rest);

    if (props.pageProps.error) {
        return <PageError {...props.pageProps.error} />;
    }

    return (
        <Provider store={store}>
            <Navbar />
            <Component {...props.pageProps} />
        </Provider>
    );
};

MyApp['layout'] = ELayoutTemplte.default;

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async appCtx => {
    console.log('invoke getInitialAppProps');
    // You have to do dispatches first, before...
    await store.dispatch(commonActions.initialize());

    // ...before calling (and awaiting!!!!) the children's getInitialProps
    const childrenGip = await App.getInitialProps(appCtx);

    return {
        pageProps: {
            ...childrenGip.pageProps
        }
    };
});

export default MyApp;
