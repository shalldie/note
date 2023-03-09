import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

import { Action, createAction, useRegisterActions } from 'kbar';

import { useAppSelector } from '~/store';

export const ActionIcon: React.FC<{ className?: string }> = props => {
    return <i className={props.className} style={{ width: '20px' }}></i>;
};

export const useNavActions = () => {
    const router = useRouter();

    const menus = useAppSelector(n => n.global.navbar.menus);
    const navActions = useMemo<Action[]>(() => {
        return menus
            .map(n => {
                const navAction = createAction({
                    name: n.title,
                    icon: <ActionIcon className={n.icon} />,
                    subtitle: n.subTitle,
                    section: '导航',
                    shortcut: n.shortcut,
                    perform: n.children
                        ? undefined
                        : function () {
                              if (!n.link) {
                                  return;
                              }
                              if (location.pathname != n.link) {
                                  router.push(n.link);
                              }
                          }
                });
                const childrenActions = n.children?.map(m => {
                    return createAction({
                        parent: navAction.id,
                        name: m.title,
                        icon: <ActionIcon className={m.icon} />,
                        perform() {
                            if (!m.link) {
                                return;
                            }
                            if (location.pathname != m.link) {
                                router.push(m.link);
                            }
                        }
                    });
                });

                return [navAction, ...(childrenActions || [])];
            })
            .flat();
    }, [menus, router]);

    return navActions;
};

export const useSearchActions = () => {
    const router = useRouter();
    const list = useAppSelector(n => n.article.articleList);
    // const {queryValue} = useKBar(state => ({queryValue: state.searchQuery}));

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
        return list.map(article =>
            createAction({
                parent: rootSearchID,
                name: article.title,
                keywords: [...article.labels, article.name, article.title.replace(/\s*/g, ' ')].join(' '),
                perform() {
                    router.push(`/article/${article.name}`);
                }
            })
        );
    }, [list, router]);

    const resultActions = [rootSearchAction, ...searchActions].filter(Boolean) as Action[];

    useRegisterActions(resultActions, [resultActions]);
};
