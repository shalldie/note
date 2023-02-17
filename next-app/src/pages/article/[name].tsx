import {NextPage} from 'next';
import {articleActions, useAppSelector, wrapper} from '~/store';
import {Markdown} from '~/components/Markdown';
import {handlePageDispatchProps} from '~/libs/utils';
import {LayoutColumn} from '~/components/layouts';

// interface IProps {
//     time: string;
// }

const ArticleDetail: NextPage = () => {
    const detail = useAppSelector(n => n.article.detail!);

    return (
        <main className="page-article-detail">
            <Markdown content={detail.content} />
            {/* <pre>{JSON.stringify(detail?.content, null, '    ')}</pre> */}
        </main>
    );
};

ArticleDetail.getInitialProps = wrapper.getInitialPageProps(store => async ctx => {
    const result = await store.dispatch(articleActions.fetchDetail(ctx.query.name as string));
    return handlePageDispatchProps(result, ctx);
});

ArticleDetail['layout'] = LayoutColumn;

// export const getServerSideProps = wrapper.getServerSideProps(store => async ctx => {
//     // store.dispatch(articleActions.)
//     // console.log('ctx.params', ctx.params);
//     // console.log('--- 执行 fetchDetail');
//     await store.dispatch(articleActions.fetchDetail(ctx.params?.name as string));
//     return {props: {}};
// });

export default ArticleDetail;
