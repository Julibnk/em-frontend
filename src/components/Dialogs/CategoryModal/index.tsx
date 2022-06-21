import { Modal } from '@mantine/core';
import { setModalOpenend } from '@store/layout-slice';
import { useSelector } from '@store/store';
import { useDispatch } from '../../../store/store';

const CategoryModal = () => {
  const dispatch = useDispatch();
  const { modals } = useSelector((state) => state.layout);

  const { opened } = modals.category;

  //   <Modal
  //   opened={opened}
  //   // onClose={() => setOpened(false)}
  //   title="Introduce yourself!"
  // >
  //   {/* Modal content */}
  // </Modal>
  return (
    <Modal
      opened={opened}
      onClose={() =>
        dispatch(setModalOpenend({ modal: 'category', opened: false }))
      }
      title='test'
    >
      <div>CategoryDialog</div>
    </Modal>
  );
};

export default CategoryModal;
