import React from "react";
import ReactPlayer from "react-player";

import { useQuery } from "react-query";

import FooterSection from "../../components/FooterSection/FooterSection";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";

import getShowPageData from "../../util/fetch-helper/showpage-fetchdata";

import "./ShowPage.scss";
import Shows from "../../components/Shows/Shows";

function ShowPage() {
  const { data, status } = useQuery("showdates", getShowPageData);

  return (
    <>
      <header className="header">
        <NavBarComponent />
      </header>
      <main>
        <section className="hero">
          <div className="hero__wrapper">
            <div className="hero-box">
              <p className="hero__title-p">Beautiful Beasts Album</p>
              <h1 className="hero__title">Queen of Yellow x For The Stings</h1>
            </div>
            <div>
              <ReactPlayer
                url="https://soundcloud.com/linkin_park/in-the-end?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                playing={true}
              />
            </div>
          </div>
        </section>
        <Shows data={data} />
      </main>
      <FooterSection />
    </>
  );
}

export default ShowPage;
