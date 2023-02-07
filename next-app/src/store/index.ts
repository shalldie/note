import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {appSlice} from './app';
import {articleSlice} from './article';

export const store = configureStore({
    reducer: {
        [appSlice.name]: appSlice.reducer,
        [articleSlice.name]: articleSlice.reducer
    }
});

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
export type TAppThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, Action<string>>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
