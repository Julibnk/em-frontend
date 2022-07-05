import { Td } from '@components/MantineOverwrite/Table';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionIcon } from '@mantine/core';

import { setModalOpenend } from '@store/layout-slice';
import { useDispatch } from '@store/store';
import { ActionCell, BadgeCell } from '@components/TableCells';
import { Template } from '../../../types/store';
import { CategoryBadge } from '@components/Badges';

type Props = {
  template: Template;
};

const TemplateTableRow = ({ template }: Props) => {
  const { id, name, description, categoryIds } = template;

  const dispatch = useDispatch();

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
          {categoryIds.map((id) => {
            return <CategoryBadge key={id} id={id}></CategoryBadge>;
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

export default TemplateTableRow;
