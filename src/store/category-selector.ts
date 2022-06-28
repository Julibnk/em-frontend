import { categoryAdapter } from './category-slice';
import { RootState } from './store';
import { createSelector } from '@reduxjs/toolkit';
import { selectTemplates } from './template-selector';
// import { CategoryWithTemplates, TemplateWithCategories } from '../types/store';

export const selectCategories = (state: RootState) => state.category;

// Selectores del adapter
export const { selectAll: selectAllCategories } = categoryAdapter.getSelectors(
  (state: RootState) => state.category
);

// Selectores a medida
export const getAllCategoriesWithTemplates = createSelector(
  selectAllCategories,
  selectTemplates,
  (categories, templates) => {
    return categories.map((category) => {
      return {
        ...category,
        templates: category.templateIds.map((id) => {
          return templates.entities[id];
        }),
      };
    });
  }
);
