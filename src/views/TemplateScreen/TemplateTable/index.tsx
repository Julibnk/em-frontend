import { Table, Th, Td } from '@components/MantineOverwrite/Table';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { stringSorter } from '@helpers/sorters';
import { ActionIcon, Badge, useMantineTheme } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { setModalOpenend } from '@store/layout-slice';
import { useDispatch } from '@store/store';
import { ActionCell, BadgeCell } from '@components/TableCells';

type Template = {
  id: string;
  name: string;
  description: string;
  categoryList: Category[];
};

type Category = {
  id: string;
  name: string;
};

type RowProps = {
  template: Template;
};

const Row = ({ template }: RowProps) => {
  const { id, name, description, categoryList } = template;

  const { colors } = useMantineTheme();
  const dispatch = useDispatch();

  const color = Object.keys(colors).sort((a, b) => stringSorter(a, b));

  const handleOnEdit = () => {
    dispatch(setModalOpenend({ modal: 'template', opened: true }));
  };
  const handleOnDelete = () => {
    dispatch(setModalOpenend({ modal: 'template', opened: true }));
  };

  return (
    <tr key={id}>
      <Td emphasized>{name}</Td>
      <Td>{description}</Td>
      <Td>
        <BadgeCell>
          {categoryList.map(({ id, name }, i) => {
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

const TemplateTable = () => {
  const elements: Template[] = [
    {
      id: '1',
      name: '12',
      description: '12',
      categoryList: [
        { id: '1', name: 'barrancos' },
        { id: '2', name: 'canoas' },
        { id: '3', name: 'sella' },
      ],
    },
    { id: '2', name: '12', description: '12', categoryList: [] },
    { id: '3', name: '12', description: '12', categoryList: [] },
    { id: '4', name: '12', description: '12', categoryList: [] },
    { id: '5', name: '12', description: '12', categoryList: [] },
  ];

  const { t } = useTranslation();

  return (
    <Table>
      <thead>
        <tr>
          <Th>{t('name')}</Th>
          <Th>{t('description')}</Th>
          <Th textAlign='center'>{t('category', { count: 0 })}</Th>
          <Th textAlign='center'>{t('actions')}</Th>
        </tr>
      </thead>
      <tbody>
        {elements.map((template) => (
          <Row key={template.id} template={template}></Row>
        ))}
      </tbody>
    </Table>
  );
};

export default TemplateTable;
