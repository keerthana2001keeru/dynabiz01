import React from "react";
import styles from "./blogGalleryCardPost.module.scss";
import { FaAddressBook, FaRegFolder } from "react-icons/fa";
import Slider from "react-slick/lib/slider";

const galleryImges = [
  {
    image: "/uploads/pexels-photo-529923-400x257.jpeg",
  },
  {
    image: "/uploads/pexels-photo-374018-400x257.jpeg",
  },
  {
    image: "/uploads/pexels-pexels-photo-515169-400x257.jpeg",
  },
  {
    image: "/uploads/pexels-photo-515169-400x257.jpeg",
  },
];

export default function BlogGalleryCardPost(props) {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    currentSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className={"card shadow-sm bg-body rounded " + styles.HcardTwoSetUp}>
      <div className="row">
        <Slider {...settings}>
          {galleryImges.map((item, i) => {
            return (
              <div key={i} className="col text-center">
                <img src={item.image} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className={"card-body " + styles.hCrdTwoContentGrp}>
        <p className="card-text" style={{ marginBottom: "2px" }}>
          <small className={"text-muted " + styles.hCrdTwoSubTitle}>
            {props?.setCmp[0]?.subTitle}
          </small>
        </p>
        <h5 className={"card-title " + styles.hCrdTwoTitle}>
          {props?.setCmp[0]?.title}
        </h5>
        <p className={"card-text " + styles.hCrdTwoDes}>
          {props?.setCmp[0]?.description}
        </p>
      </div>
      <div className={"card-footer " + styles.HcardTwoFooter}>
        <div className="row">
          <div className="col">
            <p className="card-text">
              <small className={"text-muted " + styles.hCrdTwoFooterText}>
                <FaAddressBook size={15} style={{ marginRight: "5px" }} />
                {props?.setCmp[0]?.tagOne}
              </small>
            </p>
          </div>
          <div className="col">
            <p className="card-text">
              <small className={"text-muted " + styles.hCrdTwoFooterText}>
                <FaRegFolder size={15} style={{ marginRight: "5px" }} />
                {props?.setCmp[0]?.tagTwo}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
