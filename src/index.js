import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./MainPage/MainPage";

import "./MainPage/assets/main_page.css";
import "./Card/assets/card.css";



const app = (<MainPage/>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
