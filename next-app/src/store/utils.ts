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
