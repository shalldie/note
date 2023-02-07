import {GetServerSideProps, NextPage} from 'next';

interface IProps {
    time: string;
}

export default function About(props: IProps) {
    return (
        <main className="page-about">
            <div>this is page about</div>
            <div>{props.time}</div>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps<IProps> = async ctx => {
    const time = new Date().toLocaleString();
    return {
        props: {time}
    };
};
