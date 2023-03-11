import Link from 'next/link';
import { ArticleCoverCard } from '~/components/ArticleCard';
import { cover, Layout } from '~/components/layouts';
import { useAppSelector, wrapper } from '~/store';

export default function Home(props: any) {
    wrapper.useHydration(props);
    const recentList = useAppSelector(n => n.article.recentList);
    const recommendList = useAppSelector(n => n.article.recommendList);

    return (
        <Layout.Default cover={cover.main}>
            <main>
                <div className="py-5">
                    <h1 className="text-center">最近的文章</h1>
                    <div className="text-center py-5 text-[20px]">
                        <i className="fa fa-quote-left"></i>
                        <span>你可以带上耳机，看看我写的一些有的没的</span>
                        <i className="fa fa-quote-right"></i>
                    </div>
                    <div className="text-center text-[16px]">
                        <Link className="link" href="/article">
                            更多文章
                        </Link>
                    </div>
                    <div className="container mt-5 px-10 grid gap-x-10 gap-y-9 grid-cols-1 md:grid-cols-3">
                        {recentList.slice(0, 3).map((article, index) => (
                            <ArticleCoverCard {...article} key={index} />
                        ))}
                    </div>
                </div>
                <div className="py-5 mb-8">
                    <h1 className="text-center">斟酌</h1>
                    <div className="text-center py-5 text-[20px]">
                        <i className="fa fa-quote-left"></i>
                        <span>这些写的时候多费了一些心思</span>
                        <i className="fa fa-quote-right"></i>
                    </div>
                    <div className="text-center text-[16px]">
                        <Link className="link" href="/article">
                            更多文章
                        </Link>
                    </div>
                    <div className="container mt-5 px-10 grid gap-x-10 gap-y-9 grid-cols-1 md:grid-cols-3">
                        {recommendList.slice(0, 6).map((article, index) => (
                            <ArticleCoverCard {...article} key={index} />
                        ))}
                    </div>
                </div>
            </main>
        </Layout.Default>
    );
}
