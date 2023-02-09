import {GetServerSideProps, NextPage} from 'next';
import {commonActions, useAppDispatch, useAppSelector} from '~/store';

interface IProps {
    time: string;
}

export default function About(props: IProps) {
    const dispatch = useAppDispatch();
    const time = useAppSelector(n => n.common.time);
    const list = useAppSelector(n => n.article.list);

    return (
        <main className="page-about">
            <div>this is page about - {time}</div>
            <div>{props.time}</div>
            <div>
                <button onClick={() => dispatch(commonActions.refreshTimeStamp())}>update time</button>
            </div>
            <pre>{JSON.stringify(list, null, '    ')}</pre>
        </main>
    );
}

// export const getServerSideProps: GetServerSideProps<IProps> = async ctx => {
//     const time = new Date().toLocaleString();
//     return {
//         props: {time}
//     };
// };
