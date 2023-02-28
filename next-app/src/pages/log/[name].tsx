import {NextPage} from 'next';
import Head from 'next/head';

import {http} from '~/libs/http';
import {wrapper} from '~/store';
import {Markdown} from '~/components/Markdown';
import {Layout} from '~/components/layouts';

const PageLog: NextPage<{markdown: string}> = ({markdown, ...props}) => {
    wrapper.useHydration(props);
    return (
        <Layout.Column>
            <Head>
                <title>日志</title>
            </Head>
            <main className="page-log" style={{padding: '15px 15px 60px', color: '#444'}}>
                <Markdown content={markdown} />
            </main>
        </Layout.Column>
    );
};

PageLog.getInitialProps = async ctx => {
    const markdown = await http.get<string>(`/log/${ctx.query.name}`);
    return {markdown};
};

export default PageLog;
