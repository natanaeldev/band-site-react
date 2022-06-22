import React from "react";
import ShowList from "../../components/ShowList/ShowList";

function Shows({ data }) {
  return (
    <section className="shows">
      <div>
        <h2 className="shows__title">Shows</h2>
      </div>
      <div className="shows__wrapper">
        <ul className="shows__list-title phone-hidden">
          <li className="shows__item-title">DATE</li>
          <li className="shows__item-title">VENUE</li>
          <li className="shows__item-title">LOCATION</li>
        </ul>
        {data?.data.map((show) => {
          return <ShowList shows={show} />;
        })}
      </div>
    </section>
  );
}

export default Shows;
