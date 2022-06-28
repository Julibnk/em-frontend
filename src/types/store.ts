export interface Category {
  id: string;
  name: string;
  description?: string;
  templateIds: string[];
}

export interface CategoryWithTemplates extends Category {
  templates: Template[];
}

export interface Template {
  id: string;
  name: string;
  description?: string;
  categoryIds: string[];
}

// export interface TemplateWithCategories extends Template {
//   categories: Category[];
// }
