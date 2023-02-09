import {http} from '~/libs/http';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {makeExtraReducers} from '../utils';
import {IArticleDetail, IArticleListItem} from './article.model';

export class ArticleState {
    list = [] as IArticleListItem[];

    detail = null as IArticleDetail | null;
}

export const articleSlice = createSlice({
    name: 'article',
    initialState: () => ({...new ArticleState()}),
    reducers: {
        setList(state, action: PayloadAction<any[]>) {
            state.list = action.payload;
        },
        setDetail(state, action: PayloadAction<IArticleDetail>) {
            state.detail = action.payload;
        }
    },
    extraReducers: {
        ...makeExtraReducers('article')
    }
});

export const articleActions = {
    fetchList: createAsyncThunk('article/list', async (_: undefined, thunk) => {
        const list = await http.post('article/list');
        thunk.dispatch(articleActions.setList(list as any));
    }),
    fetchDetail: createAsyncThunk('article/info', async (name: string, thunk) => {
        // console.log('--- invoke fetchDetail');
        // console.log('name', name);
        const detail = await http.post<IArticleDetail>('article/info', {name});
        // console.log(detail);
        thunk.dispatch(articleActions.setDetail(detail));
    }),
    ...articleSlice.actions
};
