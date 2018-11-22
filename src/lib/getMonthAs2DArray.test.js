import { DateTime } from "luxon";
import getMonthAs2DArray, { getWeekArray } from "./getMonthAs2DArray";

describe("monthAs2DArray", () => {
  it("returns 2d array of given year, month", () => {
    const month = getMonthAs2DArray(2018, 11);
    expect(month[0]).toEqual([
      "2018-10-28", // Sun
      "2018-10-29", // Mon
      "2018-10-30", // Tue
      "2018-10-31", // Wed
      "2018-11-01", // Thu
      "2018-11-02", // Fri
      "2018-11-03" // Sat
    ]);

    expect(month[4][6]).toEqual("2018-12-01");
  });

  it("handles months where the last day is Sunday", () => {
    const month = getMonthAs2DArray(2018, 9);
    // expect(month.length).toBe(6); // 6 total weeks
    expect(month[5][0]).toEqual("2018-09-30");
  });

  it("doesnt have any blank weeks", () => {
    for (let monthNum = 1; monthNum <= 12; monthNum++) {
      const month = getMonthAs2DArray(2018, monthNum);
      const firstValOfLastRow = month[month.length - 1][0];
      const monthOfFirstValOfLastRow = DateTime.fromISO(firstValOfLastRow)
        .month;
      expect(monthOfFirstValOfLastRow).toBe(monthNum);
    }
  });
});

describe("getWeekArray", () => {
  it("returns a Sun-Sat week array given a startDate", () => {
    expect(getWeekArray(2018, 11, 1)).toEqual([
      "2018-10-28", // Sun
      "2018-10-29", // Mon
      "2018-10-30", // Tue
      "2018-10-31", // Wed
      "2018-11-01", // Thu
      "2018-11-02", // Fri
      "2018-11-03" // Sat
    ]);
  });
});
