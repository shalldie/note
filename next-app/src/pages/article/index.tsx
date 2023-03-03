import {NextPage} from 'next';

import {articleActions, useAppSelector, wrapper} from '~/store';
import {handlePageDispatchProps} from '~/libs/utils';
import {cover, Layout} from '~/components/layouts';
import {LabelBox} from '~/components/LabelBox';
import {ArticleItemCard} from '~/components/ArticleCard';

const ArticleList: NextPage = props => {
    wrapper.useHydration(props);
    const articles = useAppSelector(n => n.article.articleList);

    return (
        <Layout.Column cover={cover.section}>
            <main className="page-article-list">
                <LabelBox className="block mb-[20px] md:hidden" />
                <div className="grid grid-cols-1 gap-x-[20px] md:grid-cols-2 gap-y-[30px]">
                    {articles.map((art, index) => (
                        <ArticleItemCard key={index} {...art} />
                    ))}
                </div>
            </main>
        </Layout.Column>
    );
};

ArticleList.getInitialProps = wrapper.getInitialPageProps(store => async ctx => {
    const result = await store.dispatch(articleActions.fetchArticleList({label: ctx.query.label}) as any);
    return handlePageDispatchProps(result, ctx);
});

export default ArticleList;
