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
  preview?: string;
  variable1?: string;
  variable2?: string;
  variable3?: string;
  categoryIds: EntityId[];
};

export type Message = {
  id: EntityId;
};
