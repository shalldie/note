import {http} from '~/libs/http';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {appendExtraHYDRATE} from '../utils';
import {IArticleDetail, IArticleListItem} from './article.model';

export class ArticleState {
    list = [] as IArticleListItem[];

    detail = null as IArticleDetail | null;
}

export const articleSlice = createSlice({
    name: 'article',
    initialState: () => ({...new ArticleState()}),
    reducers: {
        assignState(state, action: PayloadAction<Partial<ArticleState>>) {
            Object.assign(state, action.payload);
        }
    },
    extraReducers(builder) {
        appendExtraHYDRATE(builder, 'article');
    }
});

export const articleActions = {
    ...articleSlice.actions,
    fetchList: createAsyncThunk('article/list', async (_: undefined, thunk) => {
        const list = await http.post<IArticleListItem[]>('article/list');
        thunk.dispatch(articleActions.assignState({list}));
    }),
    fetchDetail: createAsyncThunk('article/info', async (name: string, thunk) => {
        const detail = await http.post<IArticleDetail>('article/info', {name});
        thunk.dispatch(articleActions.assignState({detail}));
    })
};
