import React from 'react';
import {Cardwrap} from './Cardwrap';

import styles from './Sidebar.module.scss';

export const Sidebar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <Cardwrap />
        </div>
    );
};
