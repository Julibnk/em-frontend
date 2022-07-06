import { createSlice, createEntityAdapter, EntityId } from '@reduxjs/toolkit';

import { setSelectedId as helperSetSelectedId } from '@helpers/reducers';

import { Template } from '../types/store';

export const templateAdapter = createEntityAdapter<Template>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

type InitialState = {
  selectedId: EntityId | undefined;
};

const initialState = templateAdapter.getInitialState({
  selectedId: undefined,
} as InitialState);

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    addTemplate: templateAdapter.addOne,
    init: (state) => {
      //   categoryAdapter.addMany(state, {
      //     ['1231']: { name: '1231', templateIds: [] },
      //   });
      templateAdapter.addMany(state, [
        {
          id: '100',
          name: 'Template 100',
          description: 'plantilla 1',
          preview: 'Holabienvenido a blablablablbaba',
          categoryIds: [10, 40],
        },
        {
          id: '200',
          name: 'Template 200',
          description: 'plantilla 1',
          preview: 'Holabienvenido a blablablablbaba',
          categoryIds: [],
        },
        {
          id: '300',
          name: 'Template 300',
          description: 'plantilla 1',
          preview: 'Holabienvenido a blablablablbaba',
          categoryIds: ['20', '60'],
        },
        {
          id: '400',
          name: 'Template 400',
          description: 'plantilla 1',
          preview: 'Holabienvenido a blablablablbaba',
          categoryIds: [],
        },
        {
          id: '500',
          name: 'Template 500',
          description: 'plantilla 1',
          preview: 'Holabienvenido a blablablablbaba',
          categoryIds: [],
        },
        {
          id: '600',
          name: 'Template 600',
          description: 'plantilla 1',
          preview: 'Holabienvenido a blablablablbaba',
          categoryIds: [],
        },
      ]);
    },
    setSelectedId: helperSetSelectedId,
  },
});

export const { addTemplate, init, setSelectedId } = templateSlice.actions;

export default templateSlice.reducer;
