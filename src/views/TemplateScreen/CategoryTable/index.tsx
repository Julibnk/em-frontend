import { Table, Th, Td } from '@components/MantineOverwrite/Table';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
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
    // { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    // { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    // { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    // { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    // { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];

  const { colors } = useMantineTheme();
  // const theme = useMantineTheme();

  // console.log(theme);

  const color = Object.keys(colors);

  // debugger;
  // console.log(colors);
  // console.log(color);
  // console.log(color[3]);

  // const a = color[3];
  // console.log(typeof a);
  // console.log(colors['dark']);

  const rows = elements.map((element) => (
    <tr key={element.id}>
      <Td>{element.name}</Td>
      <Td>{element.description}</Td>
      <Td>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem' }}>
          {element.templateList.map(({ id, name }, i) => {
            console.log(color[i]);

            return (
              <Badge key={id} color={color[i]}>
                {name}
              </Badge>
              // <Badge key={id}>{name}
            );
          })}
        </div>
      </Td>
      <Td>
        <div
          style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center' }}
        >
          <ActionIcon>
            <FontAwesomeIcon size='lg' icon={faPen}></FontAwesomeIcon>
          </ActionIcon>
          <ActionIcon>
            <FontAwesomeIcon size='lg' icon={faTrashAlt}></FontAwesomeIcon>
          </ActionIcon>
        </div>
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
          <Th align='center'>Plantillas</Th>
          <Th align='center'>Acciones</Th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    // </table>
  );
};

export default CategoryTable;
