import React from 'react';

import classNames from 'classnames';

import { MobileBar } from './MobileBar';
import { PCBar } from './PCBar';

export const Navbar: React.FC<{ light?: boolean }> = props => {
    return (
        <nav className="relative z-10">
            <PCBar className={classNames('hidden md:block')} light={!!props.light} />
            <MobileBar className="md:hidden" light={!!props.light} />
        </nav>
    );
};
