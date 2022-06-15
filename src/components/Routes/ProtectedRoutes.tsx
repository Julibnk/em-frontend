import Layout from "@components/Layout";
import SampleScreen from "@views/SampleScreen";
// import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import FullPageLoader from "@components/FullPageLoader/FullPageLoader";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<SampleScreen />}></Route>
      </Route>
      {/* <Route path="*" element={<Navigate replace to={`/projects`} />} /> */}
      {/* <Route index element={<h1>Hello</h1>} /> */}
      {/* <Route path="bye" element={<h1>Bye</h1>} /> */}

      {/* <Route path="*" element={<h1>Not found</h1>} /> */}
    </Routes>
  );
};

export default ProtectedRoutes;
