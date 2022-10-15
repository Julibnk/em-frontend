import { setSelectedId as helperSetSelectedId } from '@helpers/reducers';
import { createSlice, createEntityAdapter, EntityId } from '@reduxjs/toolkit';

import { Category } from '../types/store';

export const categoryAdapter = createEntityAdapter<Category>();

type InitialState = {
  selectedId: EntityId | undefined;
};

const initialState = categoryAdapter.getInitialState({
  selectedId: undefined,
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
        {
          id: '10',
          name: 'Categoria 10',
          description: 'Categoria pa tu face',
          templateIds: ['100', '200'],
        },
        {
          id: '20',
          name: 'Categoria 20',
          description: 'Categoria pa tu face',
          templateIds: [],
        },
        {
          id: '30',
          name: 'Categoria 30',
          description: 'Categoria pa tu face',
          templateIds: [],
        },
        {
          id: '40',
          name: 'Categoria 40',
          description: 'Categoria pa tu face',
          templateIds: [],
        },
        {
          id: '50',
          name: 'Categoria 50',
          description: 'Categoria pa tu face',
          templateIds: [],
        },
        {
          id: '60',
          name: 'Categoria 60',
          description: 'Categoria pa tu face',
          templateIds: [],
        },
        {
          id: '70',
          name: 'Categoria 60',
          description: 'Categoria pa tu face',
          templateIds: [],
        },
        {
          id: '80',
          name: 'Categoria 60',
          description: 'Categoria pa tu face',
          templateIds: [],
        },
        {
          id: '90',
          name: 'Categoria 60',
          description: 'Categoria pa tu face',
          templateIds: [],
        },
        {
          id: '100',
          name: 'Categoria 60',
          description: 'Categoria pa tu face',
          templateIds: [],
        },
        {
          id: '110',
          name: 'Categoria 60',
          description: 'Categoria pa tu face',
          templateIds: [],
        },
        {
          id: '120',
          name: 'Categoria 60',
          description: 'Categoria pa tu face',
          templateIds: [],
        },
        {
          id: '130',
          name: 'Categoria 60',
          description: 'Categoria pa tu face',
          templateIds: [],
        },
        {
          id: '60',
          name: 'Categoria 60',
          description: 'Categoria pa tu face',
          templateIds: [],
        },
      ]);
    },
    setSelectedId: helperSetSelectedId,
  },
});

export const { addCategory, init, setSelectedId } = categorySlice.actions;

export default categorySlice.reducer;
