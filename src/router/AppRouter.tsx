import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import LoginPage from "../pages/auth/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  }
]);

const AppRouter = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default AppRouter
