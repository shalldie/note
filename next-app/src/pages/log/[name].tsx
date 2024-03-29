import { NextPage } from 'next';

import { http } from '~/libs/http';
import { wrapper } from '~/store';
import { Markdown } from '~/components/Markdown';
import { Layout } from '~/components/layouts';

const PageLog: NextPage<{ markdown: string }> = ({ markdown, ...props }) => {
    wrapper.useHydration(props);
    return (
        <Layout.Column title="日志">
            <main className="page-log">
                <Markdown content={markdown} />
            </main>
        </Layout.Column>
    );
};

PageLog.getInitialProps = async ctx => {
    const markdown = await http.get<string>(`/log/${ctx.query.name}`);
    return { markdown };
};

export default PageLog;
