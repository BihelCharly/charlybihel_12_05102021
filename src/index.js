import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Error404 from "./pages/404";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

const Root = () => (
  <HashRouter basename="/">
    <Header />
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="*" component={Error404} />
      <Route component={Error404} />
    </Switch>
  </HashRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
