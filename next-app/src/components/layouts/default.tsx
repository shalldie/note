import React from 'react';
import cn from 'classnames';
import {Footer} from '../Footer';
import {Navbar} from '../Navbar';

export const LayoutDefault: React.FC<React.PropsWithChildren<{className?: string}>> = ({children, className}) => {
    return (
        <div className={cn('layout-default', className)}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};
