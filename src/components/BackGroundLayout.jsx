import { useEffect, useState } from "react";
import { useStateContext } from "../Context";

// Import images
import Clear from "./images/Clear.jpg";
import Cloudy from "./images/Cloudy.jpg";
import Fog from "./images/fog.png";
import Rainy from "./images/Rainy.jpg";
import Snow from "./images/snow.jpg";
import Stormy from "./images/Stormy.jpg";
import Sunny from "./images/Sunny.jpg";
const BackGroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather && weather.conditions) {
      const imageString = weather.conditions.toLowerCase();
      if (imageString.includes("clear")) {
        setImage(Clear);
      } else if (imageString.includes("cloud")) {
        setImage(Cloudy);
      } else if (
        imageString.includes("rain") ||
        imageString.includes("shower")
      ) {
        setImage(Rainy);
      } else if (imageString.includes("snow")) {
        setImage(Snow);
      } else if (imageString.includes("fog")) {
        setImage(Fog);
      } else if (
        imageString.includes("thunder") ||
        imageString.includes("storm")
      ) {
        setImage(Stormy);
      } else {
        setImage(Sunny); // Default image
      }
    }
  }, [weather]);

  return (
    <img
      src={image}
      alt="Weather background"
      className="h-screen w-full fixed left-0 top-0 -z-[10]"
    />
  );
};

export default BackGroundLayout;
