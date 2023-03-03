import dayjs from 'dayjs';
import Link from 'next/link';
import React, {useMemo} from 'react';
import {IArticleListItem} from '~/store';

export class ArticleCardProps {
    article!: IArticleListItem;
    mode: 'cover' | 'list' = 'cover';
}

export const ArticleItemCard: React.FC<IArticleListItem> = props => {
    return (
        <div className="article-item-card group rounded no-underline overflow-hidden duration text-center color bg-[var(--color-gray)] hover:shadow-2xl">
            <Link className="block pb-[60%] relative overflow-hidden" href={`/article/${props.name}`}>
                <img
                    src={props.cover}
                    alt={props.title}
                    className="w-[100%] h-[100%] absolute inset-0 object-cover duration group-hover:scale-110"
                />
            </Link>
            <h3 className="mt-[20px] mb-[10px] duration group-hover:text-blue-600 group-hover:text-opacity-80">
                <Link className="link" href={`/article/${props.name}`}>
                    {props.title}
                </Link>
            </h3>
            <div className="pb-6">
                {props.labels.map((lbl, index) => (
                    <Link
                        href={`/article?label=${lbl}`}
                        key={index}
                        className="inline-block rounded duration no-underline text-white bg-[var(--color)] font-bold text-[12px] mx-1 py-[3px] px-[10px] hover:bg-[var(--color-red)]"
                    >
                        {lbl}
                    </Link>
                ))}
                <span className="rounded duration no-underline text-white bg-[var(--color)] font-bold text-[12px] mx-1 py-[3px] px-[10px] hover:shadow-lg">
                    {dayjs(props.publishTime).format('YYYY/MM/DD')}
                </span>
            </div>
        </div>
    );
};

export const ArticleCoverCard: React.FC<IArticleListItem> = props => {
    return (
        <Link
            className="article-cover-card group rounded no-underline overflow-hidden duration text-center color hover:shadow-2xl hover:bg-[var(--color-gray)]"
            href={`/article/${props.name}`}
        >
            <div className="pb-[80%] relative overflow-hidden">
                <img
                    src={props.cover}
                    alt={props.title}
                    className="w-[100%] h-[100%] absolute inset-0 object-cover duration group-hover:scale-110"
                />
            </div>
            <h3 className="mt-[20px] mb-[10px] duration group-hover:text-blue-600 group-hover:text-opacity-80">
                {props.title}
            </h3>
            <div className="pb-[16px] text-[14px] text-[var(--color)] opacity-60">
                {dayjs(props.publishTime).format('YYYY/MM/DD HH:mm:ss')}
            </div>
        </Link>
    );
};
