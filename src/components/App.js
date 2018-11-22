import React, { useState } from "react";
import { DateTime } from "luxon";
import { ChromePicker } from "react-color";
import Month from "./Month";
import SelectMonth from "./SelectMonth";

import "./App.css";

export default function App() {
  const currentYear = DateTime.local().year;
  const currentMonth = DateTime.local().month;

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [gradientStart, setGradientStart] = useState("#e66465");
  const [gradientEnd, setGradientEnd] = useState("#9198e5");

  function handleMonthChange(e) {
    setMonth(Number.parseInt(e.target.value, 10));
  }

  function handleYearChange(e) {
    setYear(Number.parseInt(e.target.value, 10));
  }

  function handleGradientStartChange(color) {
    setGradientStart(color.hex);
  }
  function handleGradientEndChange(e) {
    setGradientEnd(e.target.value);
  }

  return (
    <div className="App">
      <div className="app-drawer">
        <header className="app-header">
          <h1>Calendar Generator</h1>
        </header>
        <form>
          <div className="input-group">
            <label>Year</label>
            <input type="number" value={year} onChange={handleYearChange} />
          </div>
          <div className="input-group">
            <label>Month</label>
            <SelectMonth
              id="input-month"
              name="input-month"
              value={month}
              onChange={handleMonthChange}
            />
          </div>
          <div className="input-group">
            <label>Start Color</label>
            {/* <input
              type="text"
              value={gradientStart}
              onChange={handleGradientStartChange}
            /> */}
            <ChromePicker
              color={gradientStart}
              onChangeComplete={handleGradientStartChange}
            />
          </div>
          <div className="input-group">
            <label>End Color</label>
            <input
              type="text"
              value={gradientEnd}
              onChange={handleGradientEndChange}
            />
          </div>
        </form>
      </div>
      <section className="preview">
        <Month
          month={month}
          year={year}
          startColor={gradientStart}
          endColor={gradientEnd}
        />
      </section>
    </div>
  );
}
