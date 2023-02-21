import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';

export const makeExtraReducers = (scopeName: string) => {
    return {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload[scopeName]
            };
        }
    };
};

export function appendExtraHYDRATE(builder: ActionReducerMapBuilder<any>, scopeName: string) {
    builder.addCase(HYDRATE, (state, action: any) => {
        console.log('invoke HYDRATE', scopeName);

        console.log('pre', state);
        console.log('next', action.payload[scopeName]);
        return {
            ...state,
            ...action.payload[scopeName]
        };
    });
}
