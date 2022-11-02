import NotFound from "../pages/404";
import CarDetail from "../pages/CarDetail";
import CarMain from "../pages/MainCar";

export const routePath = {
  carMain: "/",
  CarDetail: "detail/:id",
  NotFound: "*",
};

export const routes = [
  {
    path: routePath.carMain,
    element: <CarMain />,
  },
  {
    path: routePath.CarDetail,
    element: <CarDetail />,
  },
  {
    path: routePath.NotFound,
    element: <NotFound />,
  },
];
