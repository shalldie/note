/**
 * 全局相关
 */

import {http} from '~/libs/http';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {articleActions} from './article';
import {makeExtraReducers} from './utils';
import {TRootState} from '.';

export class CommonState {
    time = '';
    initialized = false;
}

export const commonSlice = createSlice({
    name: 'common',
    initialState: () => ({...new CommonState()}),
    reducers: {
        assignState(state, action: PayloadAction<Partial<CommonState>>) {
            Object.assign(state, action.payload);
        },
        refreshTimeStamp(state) {
            console.log('invoke refresh time');
            state.time = new Date().toLocaleTimeString();
        }
    },
    extraReducers: {
        ...makeExtraReducers('common')
    }
});

export const commonActions = {
    initialize: createAsyncThunk('common/initialize', async (_: undefined, thunk) => {
        const initialized = (thunk.getState() as TRootState).common.initialized;
        if (initialized) {
            return;
        }
        thunk.dispatch(commonActions.assignState({initialized: true}));

        // http.get('https://f.m.suning.com/api/ct.do');
        thunk.dispatch(commonSlice.actions.refreshTimeStamp());
        await thunk.dispatch(articleActions.fetchList());
        // console.log('timestamp is: ' + thunk.getState());

        // console.log('invoke initalize');
    }),
    ...commonSlice.actions
};
