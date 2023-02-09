import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {commonActions, useAppDispatch, useAppSelector} from '~/store';
// import {DynamicLink as Link} from './DynamicLink';

export const Navbar: React.FC = () => {
    const list = useAppSelector(n => n.article.list);
    const time = useAppSelector(n => n.common.time);

    return (
        <ul>
            <li>{time}</li>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/article/xxx">有问题</Link>
            </li>
            {list.map(article => (
                <li key={article.name}>
                    <Link href={`/article/${article.name}`}>article - {article.title}</Link>
                </li>
            ))}
            {/* <li>
                <Link href="/article/tom">article - tom</Link>
            </li>
            <li>
                <Link href="/article/lily">article - lily</Link>
            </li> */}
        </ul>
    );
};
