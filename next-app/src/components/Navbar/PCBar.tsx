import Link from 'next/link';
import React, {useCallback, useState} from 'react';
import {useAppSelector} from '~/store';
import {When} from 'react-if';

import styles from './Navbar.module.scss';
import {DynamicComponent} from '../DynamicComponent';
import {sleep} from '~/libs/utils';
import {useKBar} from 'kbar';
import {KB} from '../KProvider';

const useMenu = () => {
    const [visible, setVisible] = useState(true);

    const hide = useCallback(async () => {
        setVisible(false);
        await sleep(100);
        setVisible(true);
    }, []);

    return {
        visible,
        hide
    };
};

export const PCBar: React.FC = () => {
    const bar = useAppSelector(n => n.global.navbar);
    const menu = useMenu();
    const {query} = useKBar();

    return (
        <div className={styles['pc-bar']}>
            <div className="container">
                <Link className="brand" href={bar.brand.link}>
                    <img src="/favicon.png" alt={bar.brand.text} />
                    <span>{bar.brand.text}</span>
                </Link>

                <div className="menu-bar">
                    <KB />
                    {bar.menus.map((mItem, index) => (
                        <div className={styles['menu-item']} key={index}>
                            <DynamicComponent
                                is={mItem.link ? Link : 'div'}
                                className="menu-item-text"
                                href={mItem.link}
                                key={index}
                            >
                                {mItem.icon && <i className={mItem.icon}></i>}
                                <span>{mItem.title}</span>
                                <When condition={mItem.children?.length && menu.visible}>
                                    <ul className={styles['list-menu']}>
                                        {mItem.children?.map((item, index) => (
                                            <li key={index} onClick={menu.hide}>
                                                <Link href={item.link!}>
                                                    {item.icon && <i className={item.icon}></i>}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </When>
                            </DynamicComponent>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
