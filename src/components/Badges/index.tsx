import { Badge, MantineColor } from '@mantine/core';
import { EntityId } from '@reduxjs/toolkit';
import { selectCategoryById } from '@store/category-selector';
import { useSelector } from '@store/store';
import { selectTemplateById } from '@store/template-selector';

type Props = {
  id: EntityId;
  color: MantineColor;
};

export const CategoryBadge = ({ id, color = 'red' }: Props) => {
  const category = useSelector((state) => selectCategoryById(state, id));

  if (typeof category === 'undefined') return <></>;

  return <Badge color={color}>{category.name}</Badge>;
};

export const TemplateBadge = ({ id, color = 'red' }: Props) => {
  const template = useSelector((state) => selectTemplateById(state, id));

  if (typeof template === 'undefined') return <></>;

  return <Badge color={color}>{template.name}</Badge>;
};
