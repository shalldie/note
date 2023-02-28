import {NextPage} from 'next';

import {articleActions, wrapper} from '~/store';
import {handlePageDispatchProps} from '~/libs/utils';
import {cover, Layout} from '~/components/layouts';
import {LabelBox} from '~/components/LabelBox';

const ArticleList: NextPage = props => {
    wrapper.useHydration(props);

    return (
        <Layout.Column cover={cover.section}>
            <main className="page-article-list">
                <LabelBox className="block md:hidden" />
            </main>
        </Layout.Column>
    );
};

ArticleList.getInitialProps = wrapper.getInitialPageProps(store => async ctx => {
    const result = await store.dispatch(articleActions.fetchArticleList() as any);
    return handlePageDispatchProps(result, ctx);
});

export default ArticleList;
