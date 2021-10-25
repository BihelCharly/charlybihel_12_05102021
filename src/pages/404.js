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
        <p className="notfound">Page introuvable</p>
        <p>
          <Link to={"/"} className="returnhome">
            Retourner à la page d'accueil
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Error404;
