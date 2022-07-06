import { setSelectedId as helperSetSelectedId } from '@helpers/reducers';
import { createSlice, createEntityAdapter, EntityId } from '@reduxjs/toolkit';

import { Category } from '../types/store';

export const categoryAdapter = createEntityAdapter<Category>();

type InitialState = {
  selectedId: EntityId | null;
};

const initialState = categoryAdapter.getInitialState({
  selectedId: null,
} as InitialState);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: categoryAdapter.addOne,
    init: (state) => {
      //   categoryAdapter.addMany(state, {
      //     ['1231']: { name: '1231', templateIds: [] },
      //   });
      categoryAdapter.addMany(state, [
        { id: '10', name: 'Categoria 10', templateIds: ['100', '200'] },
        { id: '20', name: 'Categoria 20', templateIds: [] },
        { id: '30', name: 'Categoria 30', templateIds: [] },
        { id: '40', name: 'Categoria 40', templateIds: [] },
        { id: '50', name: 'Categoria 50', templateIds: [] },
        { id: '60', name: 'Categoria 60', templateIds: [] },
      ]);
    },
    setSelectedId: helperSetSelectedId,
  },
});

export const { addCategory, init, setSelectedId } = categorySlice.actions;

export default categorySlice.reducer;
