import React, { Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import PageNotFound from "./pages/utils/PageNotFound";
import ProductDisplay from "./pages/product/sub/ProductDisplay";
import { useInitialLoadingQuery } from "./endpoints/handlers/initial-load-handler";

//Layouts
import RootLayout from "./utils/layouts/RootLayout";
import ProductLayout from "./utils/layouts/ProductLayout";
import ProductCart from "./pages/product/sub/ProductCart";

const Products = React.lazy(() => import("./pages/product/Products"));
const Login = React.lazy(() => import("./pages/login/Login"));
const Register = React.lazy(() => import("./pages/register/Register"));
const Brands = React.lazy(() => import("./pages/brands/Brands"));
const AboutUs = React.lazy(() => import("./pages/about/AboutUs"));

const App = () => {
  // const { data = [] } = useInitialLoadingQuery();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        {
          path: "products",
          element: <ProductLayout />,
          children: [
            {
              path: "",
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <Products />
                </Suspense>
              ),
            },
            { path: "details", element: <ProductDisplay /> },
            { path: "cart", element: <ProductCart /> },
          ],
        },
        {
          path: "/products/details",
          element: <ProductDisplay />,
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
