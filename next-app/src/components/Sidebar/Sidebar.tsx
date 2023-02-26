import React from 'react';
import {Cardwrap} from './Cardwrap';
import {ListCards} from './ListCards';

import styles from './Sidebar.module.scss';

export const Sidebar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <Cardwrap />
            <ListCards />
        </div>
    );
};
