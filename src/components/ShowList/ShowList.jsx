import React from "react";
import date from "../../util/date";

function ShowList({ shows }) {
  return (
    <ul className="shows__list">
      <li className="shows__item">{date(shows.date)}</li>
      <li className="shows__item">{shows.place}</li>
      <li className="shows__item">{shows.location}</li>

      <button className="shows__button phone-hidden">BUY TICKETS</button>
    </ul>
  );
}

export default ShowList;
