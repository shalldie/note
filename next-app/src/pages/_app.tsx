import '@/styles/globals.css';
import type {AppContext, AppProps, AppType} from 'next/app';
import {Navbar} from '~/components/Navbar';
import {Provider} from 'react-redux';
import {store} from '~/store';
import {NextPage} from 'next';
import {appActions} from '~/store/app';

const App: AppType = ({Component, pageProps}) => {
    return (
        <Provider store={store}>
            <Navbar />
            <Component {...pageProps} />
        </Provider>
    );
};

// export default function App({Component, pageProps}: AppProps) {
//     return (
//         <Provider store={store}>
//             <Navbar />
//             <Component {...pageProps} />
//         </Provider>
//     );
// }

App.getInitialProps = async ctx => {
    await store.dispatch(appActions.initialize());
    return {};
};

export default App;
