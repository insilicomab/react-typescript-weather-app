import { FC } from "react";
import { ResultsType } from "../type/results";

type Props = {
  results: ResultsType;
};

export const Results: FC<Props> = (props) => {
  return <h1>気象データ</h1>;
};
