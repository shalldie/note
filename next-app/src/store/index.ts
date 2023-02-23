export * from './article';

import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {articleSlice} from './article';
import {globalSlice} from './global';

const makeStore = ({reduxWrapperMiddleware}) =>
    configureStore({
        reducer: {
            [globalSlice.name]: globalSlice.reducer,
            [articleSlice.name]: articleSlice.reducer
        },
        devTools: true,
        middleware: getDefaultMiddleware =>
            [
                ...getDefaultMiddleware(),
                // process.browser ? logger : null,
                // pokemonApi.middleware,
                reduxWrapperMiddleware
            ].filter(Boolean) as any
    });

export const wrapper = createWrapper<TAppStore>(makeStore, {debug: false});

// export type TAppDispatch = typeof store.dispatch;
export type TAppDispatch = ReturnType<typeof makeStore>['dispatch'];
export type TAppStore = ReturnType<typeof makeStore>;
export type TRootState = ReturnType<TAppStore['getState']>;
export type TAppThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, Action>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
