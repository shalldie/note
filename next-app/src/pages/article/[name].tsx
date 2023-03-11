import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

import dayjs from 'dayjs';
import { When } from 'react-if';

import { cover, Layout } from '~/components/layouts';
import { articleActions, ARTICLE_MD_CLS, useAppSelector, wrapper } from '~/store';
import { Markdown } from '~/components/Markdown';
import { getCDNImage, handlePageDispatchProps } from '~/libs/utils';
import { GitComment } from '~/components/GitComment';

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
        <Layout.Column title={detail.title} cover={cover}>
            <main className="page-article-detail">
                {/* seo */}
                <a href={router.asPath.replace(/=$/, '')} target="_blank" rel="noreferrer">
                    <img src={detail.cover} alt={detail.title} width="0" height="0" />
                </a>
                {/* 文章 */}
                <Markdown content={detail.content} className={ARTICLE_MD_CLS} />
                {/* 上一篇、下一篇 */}
                <img
                    src={getCDNImage('images/public/to_be_continued.png')}
                    alt="to-be-continued"
                    className="h-36 block"
                />
                <div className="mt-3 mb-6">
                    <When condition={!!detail.prev}>
                        <Link href={`/article/${detail.prev?.name}`} className="link text-base">
                            上一篇：{detail.prev?.title}
                        </Link>
                        <br />
                    </When>
                    <When condition={!!detail.next}>
                        <Link href={`/article/${detail.next?.name}`} className="link text-base">
                            下一篇：{detail.next?.title}
                        </Link>
                    </When>
                </div>
                {/* 评论 */}
                <GitComment key={router.query.name as string} uuid={`/article/${router.query.name}`} />
            </main>
        </Layout.Column>
    );
};

ArticleDetail.getInitialProps = wrapper.getInitialPageProps(store => async ctx => {
    const result = await store.dispatch(articleActions.fetchDetail(ctx.query.name as string) as any);
    return handlePageDispatchProps(result, ctx);
});

export default ArticleDetail;
