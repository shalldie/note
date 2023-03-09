import { NextPage } from 'next';
import Head from 'next/head';

import { useAppSelector, wrapper } from '~/store';
import { Layout } from '~/components/layouts';
import classNames from 'classnames';

const PageAbout: NextPage = props => {
    wrapper.useHydration(props);
    const { avatar, description, sidebar } = useAppSelector(n => n.global);
    // const avatar = '';
    // const description = [];
    // const description = useAppSelector

    return (
        <Layout.Column>
            <Head>
                <title>关于</title>
            </Head>
            <main
                className={classNames('page-about py-8 pb-12 duration', {
                    'text-center pt-8 shadow-xl': !sidebar.show
                })}
            >
                <h1>关于博客</h1>
                {description.map((content, index) => (
                    <p key={index}>{content}</p>
                ))}
                {/* <p v-for="(content, index) in description" :key="index">{{ content }}</p> */}
                <h1>关于我</h1>
                <p>
                    <img src={avatar} alt="头像" style={{ maxWidth: '200px' }} />
                </p>
                <p>xieshuang</p>
                <h4>单位：</h4>
                <p>曾从事于新闻、旅游行业，现任职于百度AIPD。</p>
                <h4>外在：</h4>
                <p>高、白、瘦、五官端正、手好看(小左最棒)、可撩。</p>
                <h4>内涵：</h4>
                <p>喜欢动漫、网络小说(15年老书虫)、喜欢含蓄的装x。</p>
                <h4>技能：</h4>
                <p>写过 .net 、node、golang，现在是个切图仔，偶尔拯救世界。</p>
            </main>
        </Layout.Column>
    );
};

// export const getServerSideProps = wrapper.getServerSideProps(store => async ctx => {
//     // store.dispatch(articleActions.)
//     // console.log('ctx.params', ctx.params);
//     // console.log('--- 执行 fetchDetail');
//     await store.dispatch(articleActions.fetchDetail(ctx.params?.name as string));
//     return {props: {}};
// });

export default PageAbout;
