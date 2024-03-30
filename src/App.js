import React from "react";
import ReactDOM from "react-dom/client";
import restpic from "../Images/restpic.jpeg";
import Body from "./Components/Body"
import Header from "./Components/Header"
const MainCont = () => {
  return (
    <div className="mainCont">
      <Header />
      <Body />

    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainCont />);
