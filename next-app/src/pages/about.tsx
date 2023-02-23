import {NextPage} from 'next';
import {useAppSelector, wrapper} from '~/store';
import Head from 'next/head';
import {LayoutColumn} from '~/components/layouts';

const PageAbout: NextPage = props => {
    wrapper.useHydration(props);
    const {avatar, description} = useAppSelector(n => n.global);
    // const avatar = '';
    // const description = [];
    // const description = useAppSelector

    return (
        <>
            <Head>
                <title>关于</title>
            </Head>
            <main className="page-about" style={{padding: '0 30px 60px', minHeight: 'calc(100vh - 200px)'}}>
                <h1>关于博客</h1>
                {description.map((content, index) => (
                    <p key={index}>{content}</p>
                ))}
                {/* <p v-for="(content, index) in description" :key="index">{{ content }}</p> */}
                <h1>关于我</h1>
                <p>
                    <img src={avatar} alt="头像" style={{maxWidth: '200px'}} />
                </p>
                <p>xieshuang</p>
                <p>单位：</p>
                <p>曾从事于新闻、旅游行业，现任职于百度AIPD。</p>
                <p>外在：</p>
                <p>高、白、瘦、五官端正、手好看(小左最棒)、可撩。</p>
                <p>内涵：</p>
                <p>喜欢动漫、网络小说(15年老书虫)、喜欢含蓄的装x。</p>
                <p>技能：</p>
                <p>写过 .net 、node、golang，现在是个切图仔，偶尔拯救世界。</p>
            </main>
        </>
    );
};

PageAbout['layout'] = LayoutColumn;

// export const getServerSideProps = wrapper.getServerSideProps(store => async ctx => {
//     // store.dispatch(articleActions.)
//     // console.log('ctx.params', ctx.params);
//     // console.log('--- 执行 fetchDetail');
//     await store.dispatch(articleActions.fetchDetail(ctx.params?.name as string));
//     return {props: {}};
// });

export default PageAbout;
