import React, { useMemo } from 'react';

import classNames from 'classnames';
import { When } from 'react-if';

import { Footer } from '../Footer';
import { INavCover, Navbar, NavCover } from '../Navbar';
import Head from 'next/head';
import { useAppSelector } from '~/store';

export interface ILayoutDefaultProps extends React.PropsWithChildren<IClassName> {
    title?: string;
    cover?: INavCover;
}

export const LayoutDefault: React.FC<ILayoutDefaultProps> = ({ children, className, ...props }) => {
    const brand = useAppSelector(n => n.global.navbar.brand);
    const title = useMemo(() => {
        return props.title ? `${props.title} - ${brand.text}` : brand.text;
    }, [brand.text, props.title]);
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={classNames('layout-default', className)}>
                <Navbar light={!!props.cover} />
                <When condition={!!props.cover}>
                    <NavCover {...props.cover!} />
                </When>
                {children}
                <Footer />
            </div>
        </>
    );
};
