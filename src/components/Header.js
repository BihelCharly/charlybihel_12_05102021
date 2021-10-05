import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/Header.scss";

function Header() {
	return (
		<header>
			<img src={logo} className="Logo" alt="SportSee" title="Logo de SportSee" />
			<nav>
				<ul>
					<li><Link to={"/"} className="home">Accueil</Link></li>
					<li>Profil</li>
					<li>Réglage</li>
					<li>Communauté</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
