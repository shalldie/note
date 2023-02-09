export * from './common';
export * from './article';

import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {commonSlice} from './common';
import {articleSlice} from './article';

const makeStore = () =>
    configureStore({
        reducer: {
            [commonSlice.name]: commonSlice.reducer,
            [articleSlice.name]: articleSlice.reducer
        },
        devTools: true
    });

// export const store = configureStore({
//     reducer: {
//         [commonSlice.name]: commonSlice.reducer,
//         [articleSlice.name]: articleSlice.reducer
//     }
// });

export const wrapper = createWrapper<TAppStore>(makeStore);

// export const makeExtraReducers = (scopeName: string) => {
//     return {
//         [HYDRATE]: (state, action) => {
//             return {
//                 ...state,
//                 ...action.payload[scopeName]
//             };
//         }
//     };
// };

// export type TAppDispatch = typeof store.dispatch;
export type TAppDispatch = ReturnType<typeof makeStore>['dispatch'];
export type TAppStore = ReturnType<typeof makeStore>;
export type TRootState = ReturnType<TAppStore['getState']>;
export type TAppThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, Action>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
