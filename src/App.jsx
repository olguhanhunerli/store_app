import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/Main";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ProductsDetailsPage from "./pages/ProductsDetails";
import ErrorPage from "./pages/errors/Error";
import ServerErrorPage from "./pages/errors/ServerError";
import NotFoundErrorPage from "./pages/errors/Notfound";
import { useEffect } from "react";
import request from "./api/apiClient";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <ProductsPage />,
          },
          {
            path: ":productid",
            element: <ProductsDetailsPage />,
          },
        ],
      },

      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "errors",
        children: [
          {
            index: true,
            element: <ErrorPage />,
          },
          {
            path: "server-error",
            element: <ServerErrorPage />,
          },
          {
            path: "not-found",
            element: <NotFoundErrorPage />,
          },
        ],
      },
    ],
  },
]);
function App() {
  useEffect(() => {
    request.cart
      .get()
      .then((cart) => console.log(cart))
      .catch((error) => console.log(error));
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
