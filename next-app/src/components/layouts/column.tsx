import React from 'react';

import classNames from 'classnames';

import {Sidebar} from '../Sidebar';
import {ILayoutDefaultProps, LayoutDefault} from './default';

export const LayoutColumn: React.FC<ILayoutDefaultProps> = ({children, className, ...props}) => {
    return (
        <LayoutDefault className={classNames('layout-column', className)} {...props}>
            <div className="container mx-auto grid grid-cols-4 gap-2 my-5">
                <div className="col-span-4 md:col-span-3">{children}</div>
                <div className="col-span-1 hidden md:block">
                    <Sidebar />
                </div>
            </div>
        </LayoutDefault>
    );
};
