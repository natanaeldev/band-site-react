import { useQuery, useMutation, useQueryClient } from "react-query";
import { DataGrid } from "@mui/x-data-grid";

import FooterSection from "../../components/FooterSection/FooterSection";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";

import getShowPageData from "../../util/api/showpage-fetchdata";

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
            {/* <iframe
              className="iframe"
              width="100%"
              height="166"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/219074813&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <div
              style="
              font-size: 10px;
              color: #cccccc;
              line-break: anywhere;
              word-break: normal;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-family: Interstate, Lucida Grande, Lucida Sans Unicode,
                Lucida Sans, Garuda, Verdana, Tahoma, sans-serif;
              font-weight: 100;
            "
            >
              <a
                href="https://soundcloud.com/linkin_park"
                title="LINKIN_PARK"
                target="_blank"
                style="color: #cccccc; text-decoration: none"
              >
                LINKIN_PARK
              </a>
              ·
              <a
                href="https://soundcloud.com/linkin_park/in-the-end"
                title="In the End"
                target="_blank"
                style="color: #cccccc; text-decoration: none"
              >
                In the End
              </a>
            </div>{" "} */}
          </div>
        </section>
        <Shows data={data} />
      </main>
      <FooterSection />
    </>
  );
}

export default ShowPage;
