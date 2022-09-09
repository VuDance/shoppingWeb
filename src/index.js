import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import CardContextProvider from "./Context/CardContextProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
      <CardContextProvider>
        <App />
      </CardContextProvider>
  </Router>
);

reportWebVitals();
