import {Action, createAction, useKBar, useRegisterActions} from 'kbar';
import {useRouter} from 'next/router';
import React, {useEffect, useMemo} from 'react';
import {useAppSelector} from '~/store';

function randomId() {
    return Math.random().toString(36).substring(2, 9);
}

export const ActionIcon: React.FC<{className?: string}> = props => {
    return <i className={props.className} style={{width: '20px'}}></i>;
};

export const useNavActions = () => {
    const router = useRouter();
    const kbar = useKBar();

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
            };
        });

        return navActions;
    }, [menus, router]);

    // return navActions;

    const searchActions: Action[] = [
        {
            id: 'search',
            name: '全站搜索...',
            // subtitle: '',
            section: '搜索',
            shortcut: ['?'],
            icon: <ActionIcon className="fa-solid fa-magnifying-glass" />
            // perform(currentActionImpl) {
            //     console.log(currentActionImpl.command?.perform);
            // }
        }
    ];

    return navActions.concat(searchActions);
};

const SEARCH_ID = randomId();

// export const useSearchActions = () => {
//     const {queryValue} = useKBar(state => ({queryValue: state.searchQuery}));
//     const searchActions = useMemo<Action[]>(() => {
//         console.log(queryValue);
//         if (!queryValue.length) {
//             return [];
//         }
//         return [
//             createAction({
//                 // id: randomId(),
//                 name: queryValue + queryValue
//             })
//         ];
//     }, [queryValue]);
//     const rootSearchAction: Action = {
//         id: SEARCH_ID,
//         name: '搜索...',
//         shortcut: ['?'],
//         // keywords: 'find',
//         section: '搜索',
//         perform(currentActionImpl) {
//             console.log('invoke ?');
//         }
//     };
//     useRegisterActions([rootSearchAction, ...searchActions].filter(Boolean) as Action[]);
//     // useEffect(() => {
//     //     console.log(queryValue);
//     // }, [queryValue]);
// };
