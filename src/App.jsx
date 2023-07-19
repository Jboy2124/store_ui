import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/home/Homepage";
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
        { path: "about-us", element: <AboutUs /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
