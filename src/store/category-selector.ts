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
  if (!state.category.selectedId) return null;
  return selectCategoryById(state, state.category.selectedId);
};

// Selectores del getEntityAdapter
export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
} = categoryAdapter.getSelectors((state: RootState) => selectCategories(state));
