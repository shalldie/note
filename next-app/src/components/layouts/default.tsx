import React from 'react';

import classNames from 'classnames';
import {When} from 'react-if';

import {Footer} from '../Footer';
import {INavCover, Navbar, NavCover} from '../Navbar';

export interface ILayoutDefaultProps extends React.PropsWithChildren<IClassName> {
    cover?: INavCover;
}

export const LayoutDefault: React.FC<ILayoutDefaultProps> = ({children, className, ...props}) => {
    return (
        <div className={classNames('layout-default', className)}>
            <Navbar light={!!props.cover} />
            <When condition={!!props.cover}>
                <NavCover {...props.cover!} />
            </When>
            {children}
            <Footer />
        </div>
    );
};
