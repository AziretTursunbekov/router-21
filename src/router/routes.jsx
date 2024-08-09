import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Profile from "../pages/Profile";
import About from "../pages/About";
// import Phones from "../pages/Phones";
import MobileInfo from "../components/MobileInfo";
import MainLayout from "../components/layout/MainLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/mobileInfo/:PhoneId",
        element: <MobileInfo />,
      },
    ],
  },
]);
