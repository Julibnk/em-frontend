import { Table, Th, Td } from '@components/MantineOverwrite/Table';
import { ActionCell, BadgeCell } from '@components/TableCells';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { stringSorter } from '@helpers/sorters';
import { ActionIcon, Badge, useMantineTheme } from '@mantine/core';
import { setModalOpenend } from '@store/layout-slice';
import { useDispatch } from '@store/store';
import { useTranslation } from 'react-i18next';

type Template = {
  id: string;
  name: string;
};

type Category = {
  id: string;
  name: string;
  description: string;
  templateList: Template[];
};

type RowProps = {
  category: Category;
};

const Row = ({ category }: RowProps) => {
  const { id, name, description, templateList } = category;

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
          {templateList.map(({ id, name }, i) => {
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
  const elements: Category[] = [
    {
      id: '1',
      name: '12',
      description: '12',
      templateList: [
        { id: '1', name: 'cita_barranco' },
        { id: '2', name: 'cita_barranco' },
        { id: '3', name: 'cita_barranco' },
      ],
    },
    { id: '2', name: '12', description: '12', templateList: [] },
    { id: '3', name: '12', description: '12', templateList: [] },
    { id: '4', name: '12', description: '12', templateList: [] },
    { id: '5', name: '12', description: '12', templateList: [] },
  ];

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
        {elements.map((category) => (
          <Row key={category.id} category={category}></Row>
        ))}
      </tbody>
    </Table>
  );
};

export default CategoryTable;
