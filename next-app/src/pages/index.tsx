import {KB} from '~/components/KB';
import {LayoutColumn} from '~/components/layouts';
import {useAppSelector} from '~/store';
// import {useAppSelector} from '~/store';
// import Image from 'next/image';
// import {Inter} from '@next/font/google';
// import styles from '@/styles/Home.module.css';

// const inter = Inter({subsets: ['latin']});

interface IProps {
    time: string;
}

export default function Home(props: IProps) {
    const list = useAppSelector(n => n.article.list);

    // const storeTime = 233;
    // console.log(storeTime);
    return (
        <KB>
            <main>
                {/* <div>{props.time}</div> */}
                <pre>{JSON.stringify(list, null, '    ')}</pre>
            </main>
        </KB>
    );
}

Home['layout'] = LayoutColumn;

// export const getServerSideProps: GetServerSideProps<IProps> = async ctx => {
//     const time = new Date().toLocaleString();
//     return {
//         props: {time}
//     };
// };
