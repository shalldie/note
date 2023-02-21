/**
 * 全局相关
 */

import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {articleActions} from './article';
import {appendExtraHYDRATE} from './utils';
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
                text: '封面',
                link: '/',
                icon: 'fa fa-terminal'
            },
            {
                text: '文章',
                link: '/article',
                icon: ''
            },
            {
                text: '留言板',
                link: '/message',
                icon: 'fa fa-commenting-o'
            },
            {
                text: '关于',
                link: '/about'
            },
            {
                text: '>_<#@!',
                children: [
                    {
                        text: '咱の日志',
                        link: '/log/index',
                        icon: 'fa fa-magic'
                    },
                    {
                        text: '接下来要做',
                        link: '/log/todo',
                        icon: 'fa fa-tasks'
                    },
                    {
                        text: '组件',
                        link: '/log/component',
                        icon: 'fa fa-gg'
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
        indexList: [],
        labels: {
            title: '标签',
            list: [{name: 'loading...'}] as {name: string; count: number}[]
        },
        friendLinks: {
            title: '友情链接',
            list: [
                {
                    text: 'linkFly - tasaid 听说',
                    link: 'https://tasaid.com/'
                },
                {
                    text: '剧中人 - bh-lay',
                    link: 'http://bh-lay.com/'
                }
            ]
        }
    };
}

export const globalSlice = createSlice({
    name: 'global',
    initialState: () => ({...new GlobalState()}),
    reducers: {
        assignState(state, action: PayloadAction<Partial<GlobalState>>) {
            Object.assign(state, action.payload);
        }
    },
    extraReducers(builder) {
        appendExtraHYDRATE(builder, 'global');
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

        await thunk.dispatch(articleActions.fetchList());
    })
};
