import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
	return (
		<header>
			{/* <img src={logo} className="LogoKasa" alt="Kasa" title="Logo de Kasa" /> */}
			<nav>
				<li>
					<Link to={"/"} className="home">Accueil</Link>
				</li>
				<li>
					À Propos
				</li>
			</nav>
		</header>
	);
}

export default Header;
