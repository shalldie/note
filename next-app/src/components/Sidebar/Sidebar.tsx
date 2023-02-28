import React from 'react';

import {Cardwrap} from './Cardwrap';
import {ListCards} from './ListCards';

export const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <Cardwrap />
            <ListCards />
        </div>
    );
};
