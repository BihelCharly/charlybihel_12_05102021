import React from "react";
import { useAxios } from "../api/Api";
import { Redirect, useLocation } from "react-router";
import SimpleBarChart from "../components/SimpleBarChart";
import TinyLineChart from "../components/TinyLineChart";
import SimpleRadarChart from "../components/SimpleRadarChart";
import CustomPie from "../components/CustomPie";
import Nutrition from "../components/Nutrition";
import logo from "../assets/logo.png";
import "../styles/Home.scss";

export default function Home() {
  // Getting id in url then send it to Api.js to fetch datas trough childrens components
  const url = useLocation().pathname.toString();
  const { loading, error, user, activity, sessions, performance } = useAxios({
    method: "GET",
    url: url,
  });
  if (loading) {
    return (
      // During loading datas
      <main className="dashboard">
        <div className="error">
          <div className="error-block">
            <img
              src={logo}
              className="biglogo"
              alt="SportSee"
              title="Logo de SportSee"
            />
            <p className="notfound">Chargement</p>
          </div>
        </div>
      </main>
    );
  } else if (error) {
    // If api returning error then redirect
    return <Redirect to="/error" />;
  } else {
    // If not then display childrens components and them the props from the API
    return (
      <main className="dashboard">
        <div className="welcome-block">
          <p className="welcome-user">
            Bonjour{" "}
            <span className="user--name">{user.userInfos.firstName}</span>
          </p>
          <p className="welcome-goals">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
        <section className="charts-block">
          <SimpleBarChart activity={activity.data.sessions} />
          <div className="cards-block">
            <TinyLineChart sessions={sessions.data} />
            <SimpleRadarChart performance={performance.data} />
            <CustomPie score={user.todayScore ? user.todayScore : user.score} />
          </div>
          <Nutrition keyData={user.keyData} />
        </section>
      </main>
    );
  }
}
