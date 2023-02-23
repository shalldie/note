import {Action} from 'kbar';
import {useRouter} from 'next/router';
import React, {useEffect, useMemo} from 'react';
import {useAppSelector} from '~/store';

export const ActionIcon: React.FC<{className?: string}> = props => {
    return <i className={props.className} style={{width: '20px'}}></i>;
};

export const useActions = () => {
    const router = useRouter();

    const menus = useAppSelector(n => n.global.navbar.menus);
    const actions = useMemo<Action[]>(() => {
        const navActions = menus.map(n => {
            return {
                id: n.title,
                name: n.title,
                icon: <ActionIcon className={n.icon} />,
                subtitle: n.subTitle,
                section: '导航',
                shortcut: n.shortcut,
                perform() {
                    if (n.link) {
                        if (location.pathname != n.link) {
                            router.push(n.link);
                        }
                    }
                }
            };
        });

        const searchActions: Action[] = [
            {
                id: 'search',
                name: '全站搜索...',
                subtitle: '',
                section: '搜索',
                shortcut: ['?'],
                icon: <ActionIcon className="fa-solid fa-magnifying-glass" />
            }
        ];

        return [
            //
            ...navActions,
            ...searchActions
        ];
    }, [menus, router]);

    return {actions};
};
