import { DateTime } from "luxon";

function getPreviousSunday(luxonDate) {
  const { weekday } = luxonDate;

  // how many days ago was the previous Sunday?
  // if today's weekday if Thursday (weekday == 4), the prev Sunday was 4 days ago
  return weekday === 7 ? luxonDate : luxonDate.minus({ days: weekday });
}

export function getWeekArray(year, month, day) {
  const dt = DateTime.utc(year, month, day);
  const prevSunday = getPreviousSunday(dt);

  const arr = [];
  for (
    let d = prevSunday; // begin with the previous Sunday,
    d < prevSunday.plus({ days: 7 }); // for the next week
    d = d.plus({ days: 1 }) // increment a day on each loop
  ) {
    arr.push(d.toISODate());
  }
  return arr;
}

export default (year, month) => {
  const firstDay = DateTime.utc(year, month, 1);
  const prevSunday = getPreviousSunday(firstDay);

  const { daysInMonth } = firstDay;
  const lastDay = DateTime.utc(year, month, daysInMonth);

  const arr = [];

  for (let d = prevSunday; d <= lastDay; d = d.plus({ days: 7 })) {
    arr.push(getWeekArray(d.year, d.month, d.day));
  }
  return arr;
};
