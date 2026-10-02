import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./routes/MainLayout";
import Products from "./components/ui/Products";
import AddProducts from "./components/ui/AddProducts";
import EditProducts from "./components/ui/EditProducts";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <div> 404 not found</div>,
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: "add",
          element: <AddProducts />,
        },
        {
          path: "editProduct",
          element: <EditProducts />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
