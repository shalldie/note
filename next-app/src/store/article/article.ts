import {http} from '~/libs/http';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IArticleDetail, IArticleListItem} from './article.model';

export class ArticleState {
    labels = [{name: 'loading...'}] as {name: string; count: number}[];

    /**
     * 最近的文章
     *
     * @type {IArticleListItem[]}
     * @memberof ArticleState
     */
    recentList: IArticleListItem[] = [];

    /**
     * 推荐的文章
     *
     * @type {IArticleListItem[]}
     * @memberof ArticleState
     */
    recommendList: IArticleListItem[] = [];

    /**
     * 文章列表
     *
     * @memberof ArticleState
     */
    articleList = [] as IArticleListItem[];

    /**
     * 文章详情
     *
     * @memberof ArticleState
     */
    detail = null as IArticleDetail | null;
}

export const articleSlice = createSlice({
    name: 'article',
    initialState: () => ({...new ArticleState()}),
    reducers: {
        assignState(state, action: PayloadAction<Partial<ArticleState>>) {
            Object.assign(state, action.payload);
        }
    }
});

export const articleActions = {
    ...articleSlice.actions,
    fetchLabels: createAsyncThunk('article/fetchLabels', async (_: undefined, thunk) => {
        const list = await http.post('article/labels');
        thunk.dispatch(articleActions.assignState({labels: list as any}));
    }),
    fetchRencentList: createAsyncThunk('article/fetchRencentList', async (_: undefined, thunk) => {
        const list = await http.post<IArticleListItem[]>('article/list', {
            pageSize: 5
        });
        thunk.dispatch(articleActions.assignState({recentList: list}));
    }),
    fetchRecommendList: createAsyncThunk('article/fetchRecommendList', async (_: undefined, thunk) => {
        const list = await http.post<IArticleListItem[]>('article/recommendList');
        thunk.dispatch(articleActions.assignState({recommendList: list}));
    }),
    fetchArticleList: createAsyncThunk('article/fetchArticleListf', async (_: undefined, thunk) => {
        const list = await http.post<IArticleListItem[]>('article/list');
        thunk.dispatch(articleActions.assignState({articleList: list}));
    }),
    fetchDetail: createAsyncThunk('article/info', async (name: string, thunk) => {
        const detail = await http.post<IArticleDetail>('article/info', {name});
        thunk.dispatch(articleActions.assignState({detail}));
    })
};
