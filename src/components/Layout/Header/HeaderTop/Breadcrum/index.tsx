import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Breadcrumbs, ActionIcon } from '@mantine/core';

const items = [
  { title: '', href: '#' },
  { title: 'Hola', href: '#' },
].map((item, index) => (
  <ActionIcon variant='filled' color='turquoise' key={index}>
    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
  </ActionIcon>
));

export const Breadcrum = () => {
  return <Breadcrumbs>{items}</Breadcrumbs>;
};
