import { NextPage } from 'next';

import { wrapper } from '~/store';
import { Layout } from '~/components/layouts';
import { GitComment } from '~/components/GitComment';

const PageMessage: NextPage = props => {
    wrapper.useHydration(props);

    return (
        <Layout.Column title="留言板">
            <main>
                <GitComment uuid="/message" />
            </main>
        </Layout.Column>
    );
};

export default PageMessage;
