import React from "react";
import ReactDOM from "react-dom/client";
import "./Home.css";
import DashboardApp from "./dashboardApp";
import { BrowserRouter } from "react-router-dom";
let root = null
root = ReactDOM.createRoot(document.getElementById("root"));
function Home(){
    root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DashboardApp />
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default Home;