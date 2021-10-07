import React from "react";
import SimpleBarChart from "../components/SimpleBarChart";
import TinyLineChart from "../components/TinyLineChart";
import SimpleRadarChart from "../components/SimpleRadarChart";
import Data from "../data/data";
import "../styles/Home.scss";

export default function Home() {
  return (
    <>
      <div className="welcome-block">
        <p className="welcome-user">
          Bonjour{" "}
          <span className="user--name">
            {Data.USER_MAIN_DATA[0].userInfos.firstName}
          </span>
        </p>
        <p className="welcome-goals">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <SimpleBarChart />
      <TinyLineChart />
      <SimpleRadarChart />
    </>
  );
}
