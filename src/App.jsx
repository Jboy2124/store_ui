import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/home/Homepage";
import PageNotFound from "./pages/utils/PageNotFound";
const Products = React.lazy(() => import("./pages/product/Products"));
const Login = React.lazy(() => import("./pages/login/Login"));
const Register = React.lazy(() => import("./pages/register/Register"));
const Brands = React.lazy(() => import("./pages/brands/Brands"));
const AboutUs = React.lazy(() => import("./pages/about/AboutUs"));

const App = () => {
  function Layout() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        {
          path: "products",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Products />
            </Suspense>
          ),
        },
        {
          path: "brands",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Brands />
            </Suspense>
          ),
        },
        {
          path: "about-us",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <AboutUs />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "login",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "register",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Register />
        </Suspense>
      ),
    },
    { path: "*", element: <PageNotFound /> },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
