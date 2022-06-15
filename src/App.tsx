import useInitApp from "@hooks/useInitApp";
import "./App.css";
import AppRouter from "./AppRouter";

function App() {
  useInitApp();

  return (
    // <ConfigProvider locale={esES}>
    // {fullPageLoading && <FullPageLoader />}
    <AppRouter></AppRouter>
    // <Dialogs />
    // </ConfigProvider>
  );
}

export default App;
