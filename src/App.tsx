import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import React, { Suspense } from "react";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/Login";
import ProductPage from "./pages/ProductPage";

// lazy import
const Home = React.lazy(() => import("./pages/Home"));
const Dashbord = React.lazy(() => import("./pages/dashboard/Dashbord"));
const About = React.lazy(() => import("./pages/About"));
const Setting = React.lazy(() => import("./pages/dashboard/Setting"));
const DashboardLayout = React.lazy(() => import("./layout/DashboardLayout"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>LOading....</h1>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="product">
              <Route path=":id" element={<ProductPage />} />
            </Route>

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashbord />} />
              <Route path="settings" element={<Setting />} />
            </Route>

            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="*" element={<h1>404 NO ROUTE FOUND</h1>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
