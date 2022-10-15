import { SelectItem } from '@mantine/core';
import { categoryAdapter } from './category-slice';
import { RootState } from './store';
// import { CategoryWithTemplates, TemplateWithCategories } from '../types/store';

// Selector que localiza las categories en el state
export const selectCategories = (state: RootState) => state.category;

// Selector que localiza el id de la categoria seleccionada
export const selectSelectedCategoryId = (state: RootState) =>
  state.category.selectedId;

// Selector que localiza la categoria seleccionada
export const selectSelectedCategory = (state: RootState) => {
  if (!state.category.selectedId) return undefined;
  return selectCategoryById(state, state.category.selectedId);
};

// Selector para transformar el listado de categorias para un componente Select o Combo
export const selectCategoriesForCombo = (state: RootState): SelectItem[] => {
  return selectAllCategories(state).map((category) => {
    return { value: category.id as string, label: category.name };
  });
};

// Selectores del getEntityAdapter
export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
} = categoryAdapter.getSelectors((state: RootState) => selectCategories(state));
