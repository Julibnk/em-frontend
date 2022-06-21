import { LoadingOverlay } from '@mantine/core';

const FullPageLoader = ({ children }) => {
  return (
    // <div style={{ position: 'relative' }}>
    <LoadingOverlay visible={true}>{children}</LoadingOverlay>
    // </div>
  );
};

export default FullPageLoader;
