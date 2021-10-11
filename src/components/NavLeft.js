import React from "react";
import "../styles/NavLeft.scss";
import logoYoga from "../assets/yoga.svg";
import logoSwim from "../assets/swim.svg";
import logoCycle from "../assets/cycle.svg";
import logoGym from "../assets/gym.svg";

export default function NavLeft() {
  return (
    <nav className="nav-left">
      <ul>
        <li>
          <img
            src={logoYoga}
            className="logo--yoga nav-logo"
            alt="Yoga"
            title="Logo Yoga"
          />
        </li>
        <li>
          {" "}
          <img
            src={logoSwim}
            className="logo--Swim nav-logo"
            alt="Swim"
            title="Logo Swim"
          />
        </li>
        <li>
          {" "}
          <img
            src={logoCycle}
            className="logo--Cycle nav-logo"
            alt="Cycle"
            title="Logo de Cycle"
          />
        </li>
        <li>
          {" "}
          <img
            src={logoGym}
            className="logo--Gym nav-logo"
            alt="Gym"
            title="Logo de Gym"
          />
        </li>
      </ul>
      <div className="copiryght">
        <p>Copiryght, SportSee 2020</p>
      </div>
    </nav>
  );
}
