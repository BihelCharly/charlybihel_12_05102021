import React from "react";
import '../styles/Home.scss';

function Home() {
  return (
    <div className="welcome-block">
      <p className="welcome-user">Bonjour <span className="user--name">Thomas</span></p>
      <p className="welcome-goals">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Home;
