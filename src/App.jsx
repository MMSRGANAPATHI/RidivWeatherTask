import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context";
import { BackGroundLayout, WeatherCard, MiniCard } from "./components";

function App() {
  const [input, setInput] = useState("");
  const { weather, values, place, setPlace } = useStateContext(); // Destructure setPlace from context

  const submitcity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <h1 className="font-bold tracking-white text-3xl">WeatherApp</h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2 ">
          <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem]" />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                submitcity(); // Call submitcity on Enter key press
              }
            }}
            type="text"
            className="focus:outline-none w-full text-[#212121] text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </nav>
      <BackGroundLayout />
      <main className="w-full flex flex-row gap-8 py-4 px-[10%] items-start justify-center">
        <WeatherCard
          place={place}
          windspeed={weather.wspd}
          temperature={weather.temperature}
          heatIndex={weather.heatIndex}
          humidity={weather.humidity}
          conditions={weather.conditions}
        />
        <div className="flex flex-wrap justify-center gap-8 w-[60%]">
          {values.slice(1, 7).map((curr) => {
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
