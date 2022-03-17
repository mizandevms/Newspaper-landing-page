import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/partials/Footer/Footer";
import Header from "./Components/partials/Header/Header";


// components
const Home = React.lazy(() => import("./Components/Home/Home"));

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Suspense fallback="Loading...">
              <Home />
            </React.Suspense>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
