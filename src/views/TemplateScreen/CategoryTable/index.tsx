import { Table, Th, Td } from '@components/MantineOverwrite/Table';
import { ActionCell, BadgeCell } from '@components/TableCells';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionIcon, Badge, useMantineTheme } from '@mantine/core';

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
        { id: '4', name: 'cita_barranco' },
        { id: '5', name: 'cita_barranco' },
      ],
    },
    { id: '2', name: '12', description: '12', templateList: [] },
    { id: '3', name: '12', description: '12', templateList: [] },
    { id: '4', name: '12', description: '12', templateList: [] },
    { id: '5', name: '12', description: '12', templateList: [] },
  ];

  const { colors } = useMantineTheme();

  const color = Object.keys(colors);

  const rows = elements.map((element) => (
    <tr key={element.id}>
      <Td emphasized>{element.name}</Td>
      <Td>{element.description}</Td>
      <Td>
        <BadgeCell>
          {element.templateList.map(({ id, name }, i) => {
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
          <ActionIcon>
            <FontAwesomeIcon size='lg' icon={faPen}></FontAwesomeIcon>
          </ActionIcon>
          <ActionIcon color='gray'>
            <FontAwesomeIcon size='lg' icon={faTrashAlt}></FontAwesomeIcon>
          </ActionIcon>
        </ActionCell>
      </Td>
    </tr>
  ));

  return (
    <Table>
      {/* <table> */}
      <thead>
        <tr>
          <Th>Nombre</Th>
          <Th>Descripcion</Th>
          <Th textAlign='center'>Plantillas</Th>
          <Th textAlign='center'>Acciones</Th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    // </table>
  );
};

export default CategoryTable;
