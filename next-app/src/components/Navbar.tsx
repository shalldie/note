import Link from 'next/link';
import React from 'react';
// import {DynamicLink as Link} from './DynamicLink';

export const Navbar: React.FC = () => {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/article/tom">article - tom</Link>
            </li>
            <li>
                <Link href="/article/lily">article - lily</Link>
            </li>
        </ul>
    );
};
