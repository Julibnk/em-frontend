// import { Table } from '@mantine/core';
// import CustomTable
// import { idText } from 'typescript';
import CustomTable from '@components/MantineOverwrite/Table';

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
    { id: '1', name: '12', description: '12', templateList: [] },
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

  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.name}</td>
      <td>{element.description}</td>
      <td></td>
      <td></td>
    </tr>
  ));

  return (
    <CustomTable>
      {/* <table> */}
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Plantillas</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </CustomTable>
    // </table>
  );
};

export default CategoryTable;
