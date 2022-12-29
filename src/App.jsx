import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./components/loading/loading.component";

const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "*", element: <h1>Error</h1> },
    { path: "/detail/:id", element: <Detail /> },
  ];

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
