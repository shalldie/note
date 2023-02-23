import {NextPage} from 'next';
import {Markdown} from '~/components/Markdown';
import {http} from '~/libs/http';
import Head from 'next/head';
import {LayoutColumn} from '~/components/layouts';
import {wrapper} from '~/store';

const PageLog: NextPage<{markdown: string}> = ({markdown, ...props}) => {
    wrapper.useHydration(props);
    return (
        <>
            <Head>
                <title>日志</title>
            </Head>
            <main className="page-log" style={{padding: '15px 15px 60px', color: '#444'}}>
                <Markdown content={markdown} />
            </main>
        </>
    );
};

PageLog.getInitialProps = async ctx => {
    const markdown = await http.get<string>(`/log/${ctx.query.name}`);
    return {markdown};
};

PageLog['layout'] = LayoutColumn;

// export const getServerSideProps = wrapper.getServerSideProps(store => async ctx => {
//     // store.dispatch(articleActions.)
//     // console.log('ctx.params', ctx.params);
//     // console.log('--- 执行 fetchDetail');
//     await store.dispatch(articleActions.fetchDetail(ctx.params?.name as string));
//     return {props: {}};
// });

export default PageLog;
