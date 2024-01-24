import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ROOT } from "./utils/constants/routes";
import useCurrentRoutes from "./hooks/useCurrentRoutes";

function App() {
  const { routes } = useCurrentRoutes();

  return (
    <Router>
      <Routes>
        {Object.entries(routes).map(([routeKey, route]) => {
          const { element: Element } = route;
          return <Route key={routeKey} path={routeKey} element={<Element />} />;
        })}
        <Route path={"*"} element={<Navigate to={ROOT} />} />
      </Routes>
    </Router>
  );
}

export default App;
