import {http} from '~/libs/http';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

export class ArticleState {
    list = [] as any[];
}

// export const fetchArticleList = createAsyncThunk('article/initialize', async (_: undefined, thunk) => {
//     // http.get('https://f.m.suning.com/api/ct.do');
//     const list = await http.post('article/list');
//     thunk.dispatch(articleSlice.actions.setArticleList(list as any));
//     // console.log('timestamp is: ' + thunk.getState());
// });

export const articleSlice = createSlice({
    name: 'article',
    initialState: () => ({...new ArticleState()}),
    reducers: {
        setArticleList(state, action: PayloadAction<any[]>) {
            state.list = action.payload;
        }
    }
});

export const articleActions = {
    fetchArticleList: createAsyncThunk('article/initialize', async (_: undefined, thunk) => {
        // http.get('https://f.m.suning.com/api/ct.do');
        const list = await http.post('article/list');
        thunk.dispatch(articleActions.setArticleList(list as any));
        // console.log('timestamp is: ' + thunk.getState());
    }),
    ...articleSlice.actions
};
