import React from "react";
import Data from "../data/data";
import logoCal from "../assets/calories-icon.svg";
import logoProt from "../assets/protein-icon.svg";
import logoCarb from "../assets/carbs-icon.svg";
import logoFat from "../assets/fat-icon.svg";
import "../styles/Nutrition.scss";

export default function Nutrition() {
  const keyData = Object.entries(Data.USER_MAIN_DATA[0].keyData);
  const newDataArray = [];
  const newNameArray = ["Calories", "Proteines", "Glucides", "Lipides"];
  const newLogoArray = ["", logoCal, logoProt, logoCarb, logoFat];

  keyData.forEach((element, index) => {
    const newObject = {
      name: newNameArray[index++],
      value: element[1],
      logo: newLogoArray[index++],
    };
    newDataArray.push(newObject);
  });

  return (
    <div className="nutrition-block">
      {newDataArray.map((element, index) => (
        <article className="nutrition-article" key={index}>
          <img
            src={element.logo}
            alt={element.name}
            title={"Logo " + element.name}
          />
          <p>{element.value + "kCal"}</p>
          <p>{element.name}</p>
        </article>
      ))}
    </div>
  );
}
