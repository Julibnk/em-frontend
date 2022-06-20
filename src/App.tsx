import './App.css';

import { MantineProvider } from '@mantine/core';
import { theme } from './config';
import useInitApp from '@hooks/useInitApp';
import AppRouter from './AppRouter';

function App() {
  useInitApp();

  return (
    <MantineProvider
      theme={theme}
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
    >
      {/* // {fullPageLoading && <FullPageLoader />} */}
      <AppRouter></AppRouter>
      {/* // <Dialogs /> */}
    </MantineProvider>
  );
}

export default App;
