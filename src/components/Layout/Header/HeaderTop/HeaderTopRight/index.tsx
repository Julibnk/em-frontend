import styles from './styles.module.css';

import { Avatar } from '@mantine/core';

export const HeaderTopRight = () => {
  // <FontAwesomeIcon icon="fab fa-whatsapp" />
  return (
    <div>
      <Avatar className={styles.avatar} radius='xl'>
        RN
      </Avatar>
      {/* <ActionIcon> */}
      {/* <FontAwesomeIcon icon={['fab', 'whatsapp']} /> */}
      {/* <FontAwesomeIcon icon='whatsapp' /> */}
      {/* </ActionIcon> */}
    </div>
  );
};
