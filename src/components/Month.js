import React from "react";
import { DateTime } from "luxon";
import getMonthAs2DArray from "../lib/getMonthAs2DArray";
import getMonthLong from "../lib/getMonthLong";

import "./Month.css";

const Day = ({ day }) => <div className="day">{day}</div>;

const MonthRow = ({ dates }) => (
  <div className="month-row">
    {dates.map((day, i) => (
      <Day key={i} day={day} />
    ))}
  </div>
);

const MonthHeaderRow = () => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="month-header-row">
      {weekdays.map(label => (
        <div key={label} className="month-header-row__label">
          {label}
        </div>
      ))}
    </div>
  );
};

export default ({ year, month }) => {
  const monthArray = getMonthAs2DArray(year, month);

  // replace non-month dates with ''
  const cleanMonth = monthArray.map(row =>
    row.map(DateTime.fromISO).map(d => (d.month === month ? d.day : ""))
  );

  return (
    <div className="month">
      <h1>
        <span className="month__name">{getMonthLong(month)}</span>
        <span className="month__year">{year}</span>
      </h1>
      <div className="month-grid">
        <MonthHeaderRow />
        {cleanMonth.map((dates, i) => (
          <MonthRow key={i} dates={dates} />
        ))}
      </div>
    </div>
  );
};
