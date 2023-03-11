import React, { useCallback, useState } from 'react';
import Link from 'next/link';

import { useAppSelector } from '~/store';
import { When } from 'react-if';
import classNames from 'classnames';

import { DynamicComponent } from '../DynamicComponent';
import { sleep } from '~/libs/utils';
import { KB } from '../KProvider';

import styles from './Navbar.module.scss';

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

export const PCBar: React.FC<IClassName & { light: boolean }> = props => {
    const bar = useAppSelector(n => n.global.navbar);
    const menu = useMenu();

    const cls = classNames(styles.pcbar, props.className, { [styles.light]: props.light });

    return (
        <div className={cls}>
            <div className="container mx-auto flex h-[60px]">
                <Link className="brand" href={bar.brand.link}>
                    <img src="/favicon.png" alt={bar.brand.text} />
                    <span>{bar.brand.text}</span>
                </Link>

                <div className="menu-bar">
                    <KB className="mr-2" />
                    {bar.menus.map((mItem, index) => (
                        <div className={classNames('menu-item', styles['menu-item'])} key={index}>
                            <DynamicComponent
                                is={mItem.link ? Link : 'div'}
                                className="menu-item-text"
                                href={mItem.link}
                                key={index}
                            >
                                {mItem.icon && <i className={mItem.icon}></i>}
                                <span>{mItem.title}</span>
                                <When condition={mItem.children?.length && menu.visible}>
                                    <ul className={classNames('list-menu', styles['list-menu'])}>
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
