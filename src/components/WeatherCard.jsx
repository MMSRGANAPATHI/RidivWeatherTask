import React, { useEffect, useState } from "react";
import { useDate } from "../Utils/useDate";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import storm from "../assets/icons/storm.png";
import snow from "../assets/icons/snow.png";
import wind from "../assets/icons/windy.png";
import "../index.css";
const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();
  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("storm")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("windy")) {
        setIcon(wind);
      }
    }
  }, [iconString]);
  return (
    <div className="w-[22rem] h-[22rem] glassCard p-4">
      <div className="flex w-full just-center,item-center gap-4 mt-12 mb-4">
        <img src={icon} alt="weather icon" />
        <p className="font-bold text-5xl justiify-center items-center">
          {temperature}&deg;C
        </p>
      </div>
      <div className="font-bold text-center text-xl ">{place}</div>
      <div className="w-full justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
        <p className="flex-1 text-center p-2">{time}</p>
      </div>
      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <p className="flex-2 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          windspeed<p className="font-normal">{windspeed}</p>
        </p>
        <p className="fl3ex-1 text-center p-2 font-bold rounded-lg bg-green-600">
          Humidity<p className="font-normal">{humidity}</p>
        </p>
      </div>
      <div className="w-full p-3 mt-4 justify-between item-center">
        <p className="font-semibold text-lg">HeatIndex</p>
        <p className="font-normal">{heatIndex ? heatIndex : "N/A"}</p>
      </div>
      <hr className="bg-slate-600" />
      <div className="w-full p-4 flx justify-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
