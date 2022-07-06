import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';

import authReducer from '@store/auth-slice';
import layoutReducer from '@store/layout-slice';
import categoryReducer from '@store/category-slice';
import templateReducer from '@store/template-slice';
import messageReducer from '@store/message-slice';

// export type RootState = {
//   auth: AuthState;
//   layout: LayoutState;
//   category: EntityState<Category>;
// };

// Dinamico, a revisar en futuro

export const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer,
    category: categoryReducer,
    template: templateReducer,
    message: messageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

//Custom useDispatch and useSelector
export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
