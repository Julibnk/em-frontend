import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { Template } from '../types/store';

export const templateAdapter = createEntityAdapter<Template>();
const initialState = templateAdapter.getInitialState();

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
        { id: '100', name: 'Template 100', categoryIds: [] },
        { id: '200', name: 'Template 200', categoryIds: [] },
        { id: '300', name: 'Template 300', categoryIds: [] },
        { id: '400', name: 'Template 400', categoryIds: [] },
        { id: '500', name: 'Template 500', categoryIds: [] },
        { id: '600', name: 'Template 600', categoryIds: [] },
      ]);
    },
  },
});

export const { addTemplate, init } = templateSlice.actions;

export default templateSlice.reducer;
