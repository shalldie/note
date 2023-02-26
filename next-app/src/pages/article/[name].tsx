import {NextPage} from 'next';
import {articleActions, useAppSelector, wrapper} from '~/store';
import {Markdown} from '~/components/Markdown';
import {handlePageDispatchProps} from '~/libs/utils';
import {Layout} from '~/components/layouts';

const ArticleDetail: NextPage = props => {
    wrapper.useHydration(props);
    const detail = useAppSelector(n => n.article.detail!);

    return (
        <Layout.Column>
            <main className="page-article-detail">
                <Markdown content={detail.content} />
                {/* <pre>{JSON.stringify(detail?.content, null, '    ')}</pre> */}
            </main>
        </Layout.Column>
    );
};

ArticleDetail.getInitialProps = wrapper.getInitialPageProps(store => async ctx => {
    const result = await store.dispatch(articleActions.fetchDetail(ctx.query.name as string) as any);
    return handlePageDispatchProps(result, ctx);
});

export default ArticleDetail;
