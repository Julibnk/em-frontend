import { Table, Th, Td } from '@components/MantineOverwrite/Table';
import { ActionCell, BadgeCell } from '@components/TableCells';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { stringSorter } from '@helpers/sorters';
import { ActionIcon, Badge, useMantineTheme } from '@mantine/core';
import { init } from '@store/category-slice';
import { init as initTemplate } from '@store/template-slice';
import { setModalOpenend } from '@store/layout-slice';
import { useDispatch, useSelector } from '@store/store';
import { Category, CategoryWithTemplates } from '../../../types/store';
import { useTranslation } from 'react-i18next';
import {
  getAllCategoriesWithTemplates,
  selectAllCategories,
} from '@store/category-selector';

// type Template = {
//   id: string;
//   name: string;
// };

// type Category = {
//   id: string;
//   name: string;
//   description: string;
//   templateList: Template[];
// };

type RowProps = {
  category: CategoryWithTemplates;
};

// Falta tipar

const Row = ({ category }) => {
  const { id, name, description, templates } = category;

  const { colors } = useMantineTheme();

  const dispatch = useDispatch();

  const color = Object.keys(colors).sort((a, b) => stringSorter(a, b));

  const handleOnEdit = () => {
    dispatch(setModalOpenend({ modal: 'category', opened: true }));
  };
  const handleOnDelete = () => {
    dispatch(setModalOpenend({ modal: 'category', opened: true }));
  };

  return (
    <tr key={id}>
      <Td emphasized>{name}</Td>
      <Td>{description}</Td>
      <Td>
        <BadgeCell>
          {templates.map(({ id, name }, i) => {
            return (
              <Badge key={id} color={color[i]}>
                {name}
              </Badge>
            );
          })}
        </BadgeCell>
      </Td>
      <Td>
        <ActionCell>
          <ActionIcon onClick={handleOnEdit}>
            <FontAwesomeIcon size='lg' icon={faPen}></FontAwesomeIcon>
          </ActionIcon>
          <ActionIcon onClick={handleOnDelete}>
            <FontAwesomeIcon size='lg' icon={faTrashAlt}></FontAwesomeIcon>
          </ActionIcon>
        </ActionCell>
      </Td>
    </tr>
  );
};

const CategoryTable = () => {
  const dispatch = useDispatch();
  dispatch(init());
  dispatch(initTemplate());

  const categories = useSelector((state) =>
    getAllCategoriesWithTemplates(state)
  );

  console.log(categories);

  const { t } = useTranslation();

  return (
    <Table>
      <thead>
        <tr>
          <Th>{t('name')}</Th>
          <Th>{t('description')}</Th>
          <Th textAlign='center'>{t('template', { count: 0 })}</Th>
          <Th textAlign='center'>{t('actions')}</Th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <Row key={category.id} category={category}></Row>
        ))}
      </tbody>
    </Table>
  );
};

export default CategoryTable;
