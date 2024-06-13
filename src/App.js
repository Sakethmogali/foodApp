import React from "react";
import ReactDOM from "react-dom/client";
import restpic from "../Images/restpic.jpeg";
import Body from "./Components/Body";
import Header from "./Components/Header";
import About from "./Components/About";
import RestarauntMenu from "./Components/RestaurantMenu";
import Order from "./Components/Order";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./utils/store";
const MainCont = () => {
  return (
    <Provider store={AppStore}>
      <div className="mainCont">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
const rout = createBrowserRouter([
  {
    path: "/",
    element: <MainCont />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About-Us",
        element: <About />,
      },
      {
        path: "/Order",
        element: <Order />,
      },
      {
        path: "/restaurants/:restID",
        element: <RestarauntMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={rout} />);
