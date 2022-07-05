import { EntityId } from '@reduxjs/toolkit';

export type Category = {
  id: EntityId;
  name: string;
  description?: string;
  templateIds: EntityId[];
  // templates: Template[];
};

export type Template = {
  id: EntityId;
  name: string;
  description?: string;
  categoryIds: EntityId[];
  // categories: Category[];
};

// export interface TemplateWithCategories extends Template {
//   categories: Category[];
// }
