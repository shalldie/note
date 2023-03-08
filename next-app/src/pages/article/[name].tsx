import {NextPage} from 'next';

import dayjs from 'dayjs';

import {cover, Layout} from '~/components/layouts';
import {articleActions, ARTICLE_MD_CLS, useAppSelector, wrapper} from '~/store';
import {Markdown} from '~/components/Markdown';
import {handlePageDispatchProps} from '~/libs/utils';
import {GitComment} from '~/components/GitComment';
import {useRouter} from 'next/router';

const useCover = () => {
    const detail = useAppSelector(n => n.article.detail!);

    return {
        ...cover.detail,
        content: [
            //
            detail.title,
            <div className="text-[14px]" key={detail.title}>
                {dayjs(detail.publishTime).format('YYYY/MM/DD HH:mm:ss')}
            </div>
        ]
    };
};

const ArticleDetail: NextPage = props => {
    wrapper.useHydration(props);

    const router = useRouter();
    const detail = useAppSelector(n => n.article.detail!);

    const cover = useCover();

    return (
        <Layout.Column cover={cover}>
            <main className="page-article-detail">
                <Markdown content={detail.content} className={ARTICLE_MD_CLS} />
                <GitComment key={router.query.name as string} uuid={`/article/${router.query.name}`} className="mt-5" />
            </main>
        </Layout.Column>
    );
};

ArticleDetail.getInitialProps = wrapper.getInitialPageProps(store => async ctx => {
    const result = await store.dispatch(articleActions.fetchDetail(ctx.query.name as string) as any);
    return handlePageDispatchProps(result, ctx);
});

export default ArticleDetail;
