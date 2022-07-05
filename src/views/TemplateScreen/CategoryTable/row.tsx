import { Td } from '@components/MantineOverwrite/Table';
import { ActionCell, BadgeCell } from '@components/TableCells';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionIcon } from '@mantine/core';
import { setModalOpenend } from '@store/layout-slice';
import { useDispatch } from '@store/store';
import { Category } from '../../../types/store';
import { TemplateBadge } from '@components/Badges';

type RowProps = {
  category: Category;
};

const CategoryTableRow = ({ category }: RowProps) => {
  const { id, name, description, templateIds } = category;

  const dispatch = useDispatch();

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
          {templateIds.map((templateId, i) => {
            return (
              <TemplateBadge key={templateId} id={templateId}></TemplateBadge>
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

export default CategoryTableRow;
