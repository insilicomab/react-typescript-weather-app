import { useState } from "react";
import { Form } from "./components/Form";
import { Results } from "./components/Results";
import { Title } from "./components/Title";
import { ResultsType } from "./type/results";
import "./App.css";

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });

  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=53535532cc1b4eada6c125622212908&q=London&aqi=no"
    )
      .then((res) => res.json())
      .then((data) =>
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        })
      );
  };

  return (
    <div>
      <div>
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
