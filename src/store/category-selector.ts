import { categoryAdapter } from './category-slice';
import { RootState } from './store';
// import { CategoryWithTemplates, TemplateWithCategories } from '../types/store';

// Selector que localiza las categories en el state
export const selectCategories = (state: RootState) => state.category;

// Selectores del getEntityAdapter
export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
} = categoryAdapter.getSelectors((state: RootState) => selectCategories(state));
