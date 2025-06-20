import { createBrowserRouter, RouterProvider } from "react-router";
import type { RouteObject } from "react-router";
import Main from "../components/Main";

const routes: RouteObject[] = [{ path: "/", element: <Main /> }];

const router = createBrowserRouter(routes);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
