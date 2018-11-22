import React from "react";
import { Info } from "luxon";
import rangeInclusive from "../lib/rangeInclusive";

export default props => {
  return (
    <select {...props}>
      {rangeInclusive(1, 12).map(n => (
        <option key={n} value={n}>
          {Info.months()[n - 1]}
        </option>
      ))}
    </select>
  );
};
