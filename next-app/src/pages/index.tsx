// import {KB} from '~/components/KB';
import {Layout} from '~/components/layouts';
import {useAppSelector, wrapper} from '~/store';
// import {useAppSelector} from '~/store';
// import Image from 'next/image';
// import {Inter} from '@next/font/google';
// import styles from '@/styles/Home.module.css';

// const inter = Inter({subsets: ['latin']});

export default function Home(props: any) {
    wrapper.useHydration(props);
    const list = useAppSelector(n => n.article.list);

    // const storeTime = 233;
    // console.log(storeTime);
    return (
        <Layout.Default>
            <main>
                {/* <div>{props.time}</div> */}
                <pre>{JSON.stringify(list, null, '    ')}</pre>
            </main>
        </Layout.Default>
    );
}

// export const getServerSideProps: GetServerSideProps<IProps> = async ctx => {
//     const time = new Date().toLocaleString();
//     return {
//         props: {time}
//     };
// };
