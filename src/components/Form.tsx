import { FC } from "react";
import { FormType } from "../type/form";

export const Form: FC<FormType> = (props) => {
  const { setCity, getWeather } = props;
  return (
    <form>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" onClick={getWeather}>
        Get Weather
      </button>
    </form>
  );
};
