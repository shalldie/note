import { NextPage } from 'next';
import Head from 'next/head';

import { useAppSelector, wrapper } from '~/store';
import { Layout } from '~/components/layouts';
import classNames from 'classnames';
import { GitComment } from '~/components/GitComment';

const PageMessage: NextPage = props => {
    wrapper.useHydration(props);
    const { avatar, description, sidebar } = useAppSelector(n => n.global);
    // const avatar = '';
    // const description = [];
    // const description = useAppSelector

    return (
        <Layout.Column>
            <Head>
                <title>留言板</title>
            </Head>
            <main>
                <GitComment uuid="/message" />
            </main>
        </Layout.Column>
    );
};

// export const getServerSideProps = wrapper.getServerSideProps(store => async ctx => {
//     // store.dispatch(articleActions.)
//     // console.log('ctx.params', ctx.params);
//     // console.log('--- 执行 fetchDetail');
//     await store.dispatch(articleActions.fetchDetail(ctx.params?.name as string));
//     return {props: {}};
// });

export default PageMessage;
