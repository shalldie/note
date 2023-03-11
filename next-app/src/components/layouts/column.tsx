import React from 'react';
import { useRouter } from 'next/router';

import classNames from 'classnames';

import { Sidebar } from '../Sidebar';
import { ILayoutDefaultProps, LayoutDefault } from './default';
import { useAppSelector } from '~/store';
import { TransitionWrap } from '../TransitionWrap';
import { FloatBar } from '../FloatBar';

export const LayoutColumn: React.FC<ILayoutDefaultProps> = ({ children, className, ...props }) => {
    const sidebar = useAppSelector(n => n.global.sidebar);
    const router = useRouter();

    return (
        <LayoutDefault className={classNames('layout-column', className)} {...props}>
            <FloatBar />
            <div className="container mx-auto grid grid-cols-8 gap-5 my-10">
                <div
                    className={classNames('duration col-span-8 px-5 md:px-0 md:col-span-6', {
                        'md:translate-x-[16.6667%]': !sidebar.show
                    })}
                >
                    {children}
                </div>
                <TransitionWrap in={sidebar.show}>
                    <div className="col-span-2 hidden md:block duration">
                        <Sidebar key={router.asPath} />
                    </div>
                </TransitionWrap>
            </div>
        </LayoutDefault>
    );
};
