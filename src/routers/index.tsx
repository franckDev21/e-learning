import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProgrameDetail from "../pages/Programme";
import Programes from "../pages/Programme/Home";

const pages: any[] = [
  { path: "/", component: <Home /> },
  { path: "/auth", component: <Login /> },
  { path: "/programme/:name", component: <ProgrameDetail /> },
  { path: "/programmes", component: <Programes /> }
];

const AppRouting: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {pages.map(({ component, path }) => {
          return (
            <Route
              key={path}
              element={component}
              path={path}
            />
          );
        })}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
