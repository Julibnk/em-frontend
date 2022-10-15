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

export type MessageStatus = 'DRAFT' | 'SENT' | 'SCHEDULED' | 'ERROR';

export type Message = {
  id: EntityId;
  status: MessageStatus;
  sentDate?: Date;
  destinationPrefix: string;
  destinationPhone: string;
  variable1: string;
  variable2: string;
  variable3: string;
  templateId: string;
  phoneId: string;
  categoryId?: string;
  scheduled?: boolean;
  scheduleDate?: Date;
};
