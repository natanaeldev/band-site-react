import React from "react";

import Band from "../../assets/Images/band.jpg";
import "./AboutSection.scss";

function AboutSection() {
  return (
    <section className="about">
      <h2 className="about__title">About the Musicians</h2>
      <div className="about__wrapper">
        <img className="about__img" src={Band} alt="band " />
        <blockquote className="about__p-quote">
          "We push each other to be the best. It's not uncommon for one of us to
          say 'this needs to be better, back to the drawing board'”
          <br />
          <cite className="cite">
            - Bryan Teddy, lead vocalist of The Bees Knees
          </cite>
        </blockquote>
        <h3 className="about__subtitle">The Bees Knees</h3>
        <article className="about__wrapper-p">
          <p className="about__p">
            The Bees Knees is a pop rock band originating from San Francisco,
            California. The band consists of lead vocalist Bryan Teddy,
            guitarist Mack Tolkens, guitarist Andrew Green, bassist Kent Zulkee
            and drummer Freddie Fischer. The band achieved its first commercial
            success as an unsigned act, drawing attention from manager Cam
            Adams. Having worked with other popular acts (The Elephant In The
            Room, One Trick Pony, The Cat’s Meow), Adams was confident the band
            could succeed even further, pushing them to sign with Magenta
            Records.
          </p>
          <p className="about__p">
            From there, the band has soared, gaining international recognition
            and ranking in the top 10 on the Poster Charts. New fans immediately
            fell in love with the band’s original and organic attitude,
            solidifying their place as one of the hottest and fastest up and
            coming acts of this century. Fans affectionately refer to themselves
            as “The Hive” and are drawn to their candid and authentic
            performances on stage. Looking forward to touring in the future, The
            Bees Knees are currently recording their second studio album,
            looking to be released in late 2021.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutSection;
