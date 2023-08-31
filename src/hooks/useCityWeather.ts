import { useState } from "react";
import { ResultsType } from "../type/results";
import axios from "axios";
import { CityWeather } from "../type/api/cityWeather";

export const useCityWeather = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsType>({
    time: "",
    country: "",
    cityName: "",
    temperature: null,
    conditionText: "",
    icon: "",
  });

  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get<CityWeather>(
        `http://api.weatherapi.com/v1/current.json?key=xxxxxxyyyyyzzzzzzzz&q=${city}&aqi=no`
      )
      .then((res) => {
        setResults({
          time: res.data.location.localtime,
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon,
        });
        setCity("");
        setLoading(false);
      })
      .catch((error) =>
        alert(
          "エラーが発生しました。ページをリロードして、もう一度トライしてください。"
        )
      );
  };

  return { loading, city, setCity, getWeather, results };
};
