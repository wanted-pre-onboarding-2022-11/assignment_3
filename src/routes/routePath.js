import NotFoundPage from "../pages/NotFoundPage";
import CarDetailPage from "../pages/CarDetailPage";
import CarMainPage from "../pages/MainCarPage";

export const routePath = {
  carMainPage: "/",
  carDetailPage: "detail/:id",
  notFoundPage: "*",
};

export const routes = [
  {
    path: routePath.carMainPage,
    element: <CarMainPage />,
  },
  {
    path: routePath.carDetailPage,
    element: <CarDetailPage />,
  },
  {
    path: routePath.notFoundPage,
    element: <NotFoundPage />,
  },
];
