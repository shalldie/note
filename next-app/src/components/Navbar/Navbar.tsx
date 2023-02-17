import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useMemo} from 'react';
import {useAppSelector} from '~/store';

import styles from './Navbar.module.scss';
import {PCBar} from './PCBar';

export const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <PCBar />
            <MobileBar />
        </nav>
    );
};

export const MobileBar: React.FC = () => {
    return <div className={styles['mobile-bar']}></div>;
};
