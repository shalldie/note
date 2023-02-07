/**
 * 全局相关
 */

import {http} from '~/libs/http';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {articleActions} from './article';
import {sleep} from '~/libs/utils';

export class AppState {
    time = '';
    initialized = false;
}

export const initialize = createAsyncThunk('app/initialize', async (_: undefined, thunk) => {
    // http.get('https://f.m.suning.com/api/ct.do');
    // const state = thunk.getState() as {app: AppState};
    // console.log('initialized', state.app.initialized);
    // if (state.app.initialized) {
    //     return;
    // }
    // thunk.dispatch(appActions.assignState({initialized: true}));
    await sleep(1000);
    thunk.dispatch(appSlice.actions.refreshTimeStamp());
    // await thunk.dispatch(articleActions.fetchArticleList());
    // console.log('timestamp is: ' + thunk.getState());
});

export const appSlice = createSlice({
    name: 'app',
    initialState: () => ({...new AppState()}),
    reducers: {
        assignState(state, action: PayloadAction<Partial<AppState>>) {
            Object.assign(state, action.payload);
        },
        refreshTimeStamp(state) {
            state.time = new Date().toLocaleTimeString();
        }
    }
});

export const appActions = {
    initialize: createAsyncThunk('app/initialize', async (_: undefined, thunk) => {
        // http.get('https://f.m.suning.com/api/ct.do');
        thunk.dispatch(appSlice.actions.refreshTimeStamp());
        await thunk.dispatch(articleActions.fetchArticleList());
        // console.log('timestamp is: ' + thunk.getState());
    }),
    ...appSlice.actions
};
