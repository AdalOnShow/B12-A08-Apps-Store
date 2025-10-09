import { createBrowserRouter } from "react-router";
import Root from "./../pages/Root";
import NotFound from "../pages/errors/NotFound";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import AppDetails from "../pages/AppDetails";
import AppsNotFound from "../pages/errors/AppsNotFound";
import Home from "../pages/Home";


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
        path: "/app-details/:id",
        Component: AppDetails,
        errorElement: AppsNotFound
      },
      {
        path: "/apps",
        Component: Apps
      },
      {
        path: "/app-details",
        Component: Apps
      },
      {
        path: "/installation",
        Component: Installation
      }
    ]
  },
])