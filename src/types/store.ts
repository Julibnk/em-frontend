import { EntityId } from '@reduxjs/toolkit';

export type Category = {
  id: EntityId;
  name: string;
  description?: string;
  templateIds: EntityId[];
};

export type Template = {
  id: EntityId;
  name: string;
  description?: string;
  categoryIds: EntityId[];
};
