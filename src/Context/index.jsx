import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("delhi");
  const [location, setLocation] = useState(""); // Consistent naming

  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        contentType: "json",
        unitGroup: "us",
        aggregateHours: "24",
        location: place,
        shortColumnNames: 0,
      },
      headers: {
        "x-rapidapi-key": "c12ac5a9efmshd2728170dfb56aap11773ejsn737737bab306",
        "x-rapidapi-host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const thisData = Object.values(response.data.locations)[0];
      setLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
    } catch (e) {
      console.error("Error fetching weather data:", e);
      alert("This place does not exist or an error occurred.");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    console.log("Weather values:", values);
  }, [values]);

  return (
    <StateContext.Provider
      value={{ weather, setPlace, values, location, place }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
export { StateContextProvider };
