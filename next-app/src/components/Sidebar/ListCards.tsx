import React, {useCallback, useMemo} from 'react';
import Link from 'next/link';

import {IArticleListItem, useAppSelector} from '~/store';
import {LabelBox} from '../LabelBox';

interface ICardItemProps {
    title: string;
    icon?: React.ReactNode;
}

const CardBox: React.FC<React.PropsWithChildren<ICardItemProps>> = props => {
    return (
        <div className="card-item mt-5">
            <div className="bg-color rounded-t h-10 text-white flex items-center pl-2">
                <span className="mr-2 font-bold">{props.title}</span>
                {props.icon}
            </div>
            {props.children}
        </div>
    );
};

const ListBox: React.FC<{list: {title: string; link: string; target?: string}[]}> = props => {
    return (
        <div className="rounded-b">
            {props.list.map((item, index) => (
                <Link
                    href={item.link}
                    target={item.target}
                    key={index}
                    className="block no-underline text-[#337ab7] leading-10 px-5 duration border border-solid border-t-0 border-[var(--color-gray)] hover:shadow-xl hover:text-[var(--color)] hover:bg-[#efefef]"
                >
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export const ListCards: React.FC = () => {
    // 文章
    const article2List = useCallback((list: IArticleListItem[]) => {
        return list.map(item => ({
            title: item.title,
            link: `/article/${item.name}`
        }));
    }, []);

    // 最近的文章
    const recentList = useAppSelector(n => n.article.recentList);
    const recent = useMemo(() => article2List(recentList), [recentList, article2List]);

    // 推荐文章
    const recommendList = useAppSelector(n => n.article.recommendList);
    const recommend = useMemo(() => article2List(recommendList), [recommendList, article2List]);

    // 友情链接
    const friendLinks = useAppSelector(n => n.global.friendLinks);
    const friend = useMemo(() => friendLinks.map(n => ({...n, target: '_blank'})), [friendLinks]);

    return (
        <div className="list-cards">
            {/* 标签 */}
            <CardBox title="标签" icon={<i className="fa-solid fa-tags" />}>
                <LabelBox />
            </CardBox>

            {/* 最近的文章 */}
            <CardBox title="最近的文章">
                <ListBox list={recent} />
            </CardBox>

            {/* 推荐文章 */}
            <CardBox title="推荐文章">
                <ListBox list={recommend} />
            </CardBox>

            {/* 友链 */}
            <CardBox title="友情链接">
                <ListBox list={friend} />
            </CardBox>
        </div>
    );
};
