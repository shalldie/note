/**
 * 全局相关
 */

import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {articleActions} from './article';
import {TRootState} from '.';

export class GlobalState {
    serverInitialized = false;

    avatar = `${process.env.CDN_PREFIX}images/public/avatar_gh.png`;

    description = [
        '会写一些 代码、心情、生活、食物、balabala 我也不知道什么类型的东西 >_<#@!',
        '如果碰巧你找到感兴趣的东西，可以来瞅瞅。'
    ];

    navbar = {
        brand: {
            link: '/',
            text: '闲暇时候的文章'
        },
        menus: [
            {
                title: '封面',
                // subTitle: '这是一个封面',
                link: '/',
                icon: 'fa-solid fa-terminal',
                shortcut: ['g', 'h']
            },
            {
                title: '文章',
                subTitle: '闲暇时候的文章',
                link: '/article',
                icon: 'fa-solid fa-feather',
                shortcut: ['g', 'w']
            },
            {
                title: '留言板',
                link: '/message',
                icon: '',
                shortcut: ['g', 'l']
            },
            {
                title: '关于',
                link: '/about',
                shortcut: ['g', 'y']
            },
            {
                title: '>_<#@!',
                subTitle: '零碎的东西',
                children: [
                    {
                        title: '咱の日志',
                        link: '/log/index',
                        icon: 'fa-solid fa-pencil'
                    },
                    {
                        title: '接下来要做',
                        link: '/log/todo',
                        icon: 'fa-solid fa-list-check'
                    },
                    {
                        title: '组件',
                        link: '/log/component',
                        icon: 'fa-solid fa-microchip'
                    }
                ]
            }
        ]
    };

    sidebar = {
        /**
         * 是否显示目录
         */
        ifShowIndex: false,
        /**
         * 目录索引列表
         * @type { Array<{text:string;id:string;level:number}> }
         */
        indexList: []
    };

    friendLinks = [
        {
            title: 'linkFly - tasaid 听说',
            link: 'https://tasaid.com/'
        },
        {
            title: '剧中人 - bh-lay',
            link: 'http://bh-lay.com/'
        }
    ];
}

export const globalSlice = createSlice({
    name: 'global',
    initialState: () => ({...new GlobalState()}),
    reducers: {
        assignState(state, action: PayloadAction<Partial<GlobalState>>) {
            Object.assign(state, action.payload);
        }
    }
});

export const globalActions = {
    ...globalSlice.actions,
    serverInit: createAsyncThunk('global/serverInit', async (_: undefined, thunk) => {
        const initialized = (thunk.getState() as TRootState).global.serverInitialized;
        if (initialized) {
            return;
        }
        thunk.dispatch(globalActions.assignState({serverInitialized: true}));

        await Promise.all([
            //
            thunk.dispatch(articleActions.fetchArticleList()),
            thunk.dispatch(articleActions.fetchLabels()),
            thunk.dispatch(articleActions.fetchRencentList()),
            thunk.dispatch(articleActions.fetchRecommendList())
        ]);
    })
};
