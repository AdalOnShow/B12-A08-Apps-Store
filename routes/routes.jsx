import { createBrowserRouter } from "react-router";
import Root from "./../pages/Root";
import NotFound from "../pages/errors/NotFound";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import Home from "../pages/home/home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "apps",
        Component: Apps
      },
      {
        path: "installation",
        Component: Installation
      }
    ]
  },
])