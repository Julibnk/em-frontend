import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';

import authReducer, { IAuthState } from '@store/auth-slice';
import layoutReducer, { ILayoutState } from '@store/layout-slice';

export type RootState = {
  auth: IAuthState;
  layout: ILayoutState;
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer,
  },
});

//Custom useDispatch and useSelector
export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
