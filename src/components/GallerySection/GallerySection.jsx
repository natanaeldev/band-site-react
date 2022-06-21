import React from "react";

import photo1 from "../../assets/Images/Photo-gallery-1.jpg";
import photo2 from "../../assets/Images/Photo-gallery-2.jpg";
import photo3 from "../../assets/Images/Photo-gallery-3.jpg";
import photo4 from "../../assets/Images/Photo-gallery-4.jpg";
import photo5 from "../../assets/Images/Photo-gallery-5.jpg";
import photo6 from "../../assets/Images/Photo-gallery-6.jpg";
import photo7 from "../../assets/Images/Photo-gallery-7.jpg";
import photo8 from "../../assets/Images/Photo-gallery-8.jpg";
import photo9 from "../../assets/Images/Photo-gallery-9.jpg";
import "./GallerySection.scss";

function GallerySection() {
  return (
    <section className="gallery">
      <h2 className="gallery__title">Photo Gallery</h2>
      <div className="gallery__wrapper">
        <img className="gallery__img" src={photo1} alt="" />

        <img className="gallery__img" src={photo2} alt="" />
        <img className="gallery__img" src={photo3} alt="" />
        <img className="gallery__img" src={photo4} alt="" />
        <img className="gallery__img" src={photo5} alt="" />
        <img className="gallery__img" src={photo6} alt="" />
        <img className="gallery__img" src={photo7} alt="" />
        <img className="gallery__img" src={photo8} alt="" />
        <img className="gallery__img" src={photo9} alt="" />
      </div>
    </section>
  );
}

export default GallerySection;
