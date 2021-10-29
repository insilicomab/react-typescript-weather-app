import { FC } from "react";
import { ResultsType } from "../type/results";

type Props = {
  results: ResultsType;
};

export const Results: FC<Props> = (props) => {
  const { results } = props;
  const { cityName, country, temperature, conditionText, icon } = results;
  return (
    <>
      {cityName && <div className="results-city">{cityName}</div>}
      {country && <div className="results-country">{country}</div>}
      {temperature && (
        <div className="results-temp">
          {temperature} <span>°C</span>
        </div>
      )}
      {conditionText && (
        <div className="results-condition">
          <img src={icon} alt="icon" />
          <span>{conditionText}</span>
        </div>
      )}
    </>
  );
};
