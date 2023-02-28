import {cover, Layout} from '~/components/layouts';
import {useAppSelector, wrapper} from '~/store';

export default function Home(props: any) {
    wrapper.useHydration(props);
    const list = useAppSelector(n => n.article.recentList);

    return (
        <Layout.Default cover={cover.main}>
            <main>
                <pre>{JSON.stringify(list, null, '    ')}</pre>
            </main>
        </Layout.Default>
    );
}
