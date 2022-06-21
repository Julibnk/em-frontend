import './App.css';

import { MantineProvider } from '@mantine/core';
import { theme } from './config';
import useInitApp from '@hooks/useInitApp';
import AppRouter from './AppRouter';
import Modals from '@views/Modals';

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

      <AppRouter />
      <Modals />
    </MantineProvider>
  );
}

export default App;
