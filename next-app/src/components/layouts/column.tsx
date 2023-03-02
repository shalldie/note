import React, {useState} from 'react';

import classNames from 'classnames';

import {Sidebar} from '../Sidebar';
import {ILayoutDefaultProps, LayoutDefault} from './default';
import {useAppDispatch, useAppSelector} from '~/store';
import {globalActions} from '~/store/global';
import {TransitionWrap} from '../TransitionWrap';

export const LayoutColumn: React.FC<ILayoutDefaultProps> = ({children, className, ...props}) => {
    const dispatch = useAppDispatch();
    const sidebar = useAppSelector(n => n.global.sidebar);
    const toggle = () => {
        dispatch(
            globalActions.assignState({
                sidebar: {
                    ...sidebar,
                    show: !sidebar.show
                }
            })
        );
    };

    return (
        <LayoutDefault className={classNames('layout-column', className)} {...props}>
            <div>
                <button onClick={toggle}>toggle sidebar</button>
            </div>
            <div className="container mx-auto grid grid-cols-8 gap-5 my-5">
                <div
                    className={classNames('col-span-8 md:col-span-6 duration', {
                        'md:translate-x-[16.6667%]': !sidebar.show
                    })}
                >
                    {children}
                </div>
                <TransitionWrap in={sidebar.show}>
                    <div className="col-span-2 md:block duration">
                        <Sidebar />
                    </div>
                </TransitionWrap>
            </div>
        </LayoutDefault>
    );
};
