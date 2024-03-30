import React from "react";
import ReactDOM from "react-dom/client";
import restpic from "../Images/restpic.jpeg";
import Body from "./Components/Body";
import Header from "./Components/Header";
import About from "./Components/About";
import Order from "./Components/Order";
import Error from "./Components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const MainCont = () => {
  return (
    <div className="mainCont">
      <Header />
      <Body />
    </div>
  );
};
const rout = createBrowserRouter([
  {
    path: "/",
    element:<MainCont/>,
    errorElement:<Error/>
  },
  {
    path:"/About-Us",
    element:<About/>
  },
  {
    path:"/Order",
    element:<Order/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={rout}/>);
