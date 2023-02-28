import {NextPage} from 'next';

import dayjs from 'dayjs';

import {cover, Layout} from '~/components/layouts';
import {articleActions, useAppSelector, wrapper} from '~/store';
import {Markdown} from '~/components/Markdown';
import {handlePageDispatchProps} from '~/libs/utils';

const ArticleDetail: NextPage = props => {
    wrapper.useHydration(props);
    const detail = useAppSelector(n => n.article.detail!);

    const detailCover = {
        ...cover.detail,
        content: [
            //
            detail.title,
            <div className="text-[14px]" key={detail.title}>
                {dayjs(detail.publishTime).format('YYYY/MM/DD HH:mm:ss')}
            </div>
        ]
    };

    return (
        <Layout.Column cover={detailCover}>
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
