import styles from './styles.module.css';

import { Button, Group, Modal, ModalProps } from '@mantine/core';
import { setModalOpenend } from '@store/layout-slice';
import { useSelector, useDispatch } from '@store/store';
import CategoryForm from './CategoryForm';

const CategoryModal = () => {
  const dispatch = useDispatch();
  const { modals } = useSelector((state) => state.layout);

  const { opened } = modals.category;

  const handleOnClose = () => {
    dispatch(setModalOpenend({ modal: 'category', opened: false }));
  };

  const modalProps: ModalProps = {
    opened: opened,
    centered: true,
    onClose: handleOnClose,
    title: 'test',
    // padding: 'xs',
    classNames: {
      modal: styles.modal,
      header: styles.header,
      title: styles.title,
      body: styles.body,
    },
  };

  //   <Modal
  //   opened={opened}
  //   // onClose={() => setOpened(false)}
  //   title="Introduce yourself!"
  // >
  //   {/* Modal content */}
  // </Modal>
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
