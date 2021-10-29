import { FC } from "react";
import { FormType } from "../type/form";

export const Form: FC<FormType> = (props) => {
  const { city, setCity, getWeather } = props;
  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" value={city}>
        Get Weather
      </button>
    </form>
  );
};
