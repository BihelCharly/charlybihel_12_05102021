import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/404.scss";

function Error404() {
  return (
    <div className="error">
      <div className="error-block">
        <img
          src={logo}
          className="biglogo"
          alt="SportSee"
          title="Logo de SportSee"
        />
        <div className="link-block">
          <Link to={"/user/12"} className="return">
            Utilisateur #12
          </Link>
          <Link to={"/user/18"} className="return">
            Utilisateur #18
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error404;
