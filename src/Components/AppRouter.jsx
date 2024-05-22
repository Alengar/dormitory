import { Route, Routes } from "react-router-dom";
import { routes } from "../utils/routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={<route.element />} key={index} />
      ))}
    </Routes>
  );
};

export default AppRouter;
