import React from "react";
import Data from "../data/data";
import logoCal from "../assets/calories-icon.svg";
import logoProt from "../assets/protein-icon.svg";
import logoCarb from "../assets/carbs-icon.svg";
import logoFat from "../assets/fat-icon.svg";
import "../styles/Nutrition.scss";

export default function Nutrition() {
  const cal = Data.USER_MAIN_DATA[0].keyData.calorieCount;
  const prot = Data.USER_MAIN_DATA[0].keyData.proteinCount;
  const carb = Data.USER_MAIN_DATA[0].keyData.carbohydrateCount;
  const fat = Data.USER_MAIN_DATA[0].keyData.lipidCount;
  return (
    <div className="nutrition-block">
      <div className="calories">
        <img src={logoCal} alt="Calories" title="Logo Calories" />
        <p>{cal + "kCal"}</p>
        <p>Calories</p>
      </div>
    </div>
  );
}
