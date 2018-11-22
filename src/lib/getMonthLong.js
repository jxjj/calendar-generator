import { Info } from "luxon";

export default function getMonthLong(monthNumber) {
  if (!monthNumber || monthNumber < 1 || monthNumber > 12) {
    throw new Error(`Invalid Month. Must be number: ${monthNumber}`);
  }
  return Info.months()[monthNumber - 1];
}
