import { Button, Group, ModalProps } from '@mantine/core';
import { setModalOpenend } from '@store/layout-slice';
import { useSelector, useDispatch } from '@store/store';
import CategoryForm from './CategoryForm';
import Modal from '@components/Modal';

const CategoryModal = () => {
  const dispatch = useDispatch();
  const { modals } = useSelector((state) => state.layout);

  const { opened } = modals.category;

  const handleOnClose = () => {
    dispatch(setModalOpenend({ modal: 'category', opened: false }));
  };

  const modalProps: ModalProps = {
    opened: opened,
    onClose: handleOnClose,
    title: 'test',
  };

  return (
    <Modal {...modalProps}>
      <CategoryForm></CategoryForm>
      <Group position='right'>
        <Button onClick={handleOnClose}>Close Modal</Button>
      </Group>
    </Modal>
  );
};

export default CategoryModal;
