import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const ShowPage = React.lazy(() => import("./pages/ShowPage/ShowPage"));

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/home"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="showpage"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ShowPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default AppRouter;
