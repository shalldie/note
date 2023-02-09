import {GetServerSideProps, NextPage} from 'next';
import {articleActions, commonActions, useAppDispatch, useAppSelector, wrapper} from '~/store';
import {Markdown} from '~/components/Markdown';
import {handlePageDispatchProps} from '~/libs/utils';

// interface IProps {
//     time: string;
// }

const ArticleDetail: NextPage = () => {
    const detail = useAppSelector(n => n.article.detail!);
    // const detail: any = {};

    // if (!detail) {
    //     return null;
    // }

    return (
        <main className="page-about">
            <h2>{detail?.title}</h2>
            <Markdown content={detail.content} />
            {/* <pre>{JSON.stringify(detail?.content, null, '    ')}</pre> */}
        </main>
    );
};

ArticleDetail.getInitialProps = wrapper.getInitialPageProps(store => async ctx => {
    const result = await store.dispatch(articleActions.fetchDetail(ctx.query.name as string));
    return handlePageDispatchProps(result, ctx);
});

// export const getServerSideProps = wrapper.getServerSideProps(store => async ctx => {
//     // store.dispatch(articleActions.)
//     // console.log('ctx.params', ctx.params);
//     // console.log('--- 执行 fetchDetail');
//     await store.dispatch(articleActions.fetchDetail(ctx.params?.name as string));
//     return {props: {}};
// });

export default ArticleDetail;
