import {Action, createAction, useKBar, useRegisterActions} from 'kbar';
import {useRouter} from 'next/router';
import React, {useEffect, useMemo, useState} from 'react';
import {useAppSelector} from '~/store';

export const ActionIcon: React.FC<{className?: string}> = props => {
    return <i className={props.className} style={{width: '20px'}}></i>;
};

export const useNavActions = () => {
    const router = useRouter();

    const menus = useAppSelector(n => n.global.navbar.menus);
    const navActions = useMemo<Action[]>(() => {
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
            } as Action;
        });

        return navActions;
    }, [menus, router]);

    return navActions;
};

export const useSearchActions = () => {
    const {queryValue} = useKBar(state => ({queryValue: state.searchQuery}));

    const rootSearchID = 'search-articles';

    const rootSearchAction: Action = {
        id: rootSearchID,
        name: '搜索文章...',
        shortcut: ['?'],
        keywords: 'find',
        section: '搜索',
        icon: <ActionIcon className="fa-solid fa-magnifying-glass" />
    };

    const searchActions = useMemo<Action[]>(() => {
        return [
            createAction({
                parent: rootSearchID,
                name: queryValue + queryValue
            })
        ];
    }, [queryValue]);

    const resultActions = [rootSearchAction, ...searchActions].filter(Boolean) as Action[];

    useRegisterActions(resultActions, [resultActions]);
};
