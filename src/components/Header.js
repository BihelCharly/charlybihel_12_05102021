import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/Header.scss";

function Header() {
  return (
    <header>
      <img
        src={logo}
        className="logo"
        alt="SportSee"
        title="Logo de SportSee"
      />
      <nav>
        <ul>
          <li>
            <Link to={"/"} className="home">
              Accueil
            </Link>
          </li>
          <li>
            <Link to={"/*"} className="home">
              Profil
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/*"} className="home">
              Réglage
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/*"} className="home">
              Communauté
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
