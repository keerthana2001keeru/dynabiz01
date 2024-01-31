import React from "react";
import Slider from "react-slick";
import styles from "./home.module.scss";
import { FaQuoteLeft } from "react-icons/fa";

export default function HomeSectionSix(pageProps) {
  let HomeOneValue = {};
  if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
    HomeOneValue = pageProps?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className='sec-mar'>
    <div className="container-fluid p-0">
      {HomeOneValue?.elements?.logos ? (
        <div className={"row " + styles.hSixIocnSetup}>
          <Slider {...settings}>
            {HomeOneValue?.elements?.logos?.value?.map((item, index) => {
              return (
                <div className="col text-center" key={index}>
                  <img
                    className={styles.imgSetup}
                    src={item?.logo?.value}
                    alt=""
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      ) : (
        ""
      )}

      <div className={"row pt-5 " + styles.hSixShadows}>
        <div className="col-12 col-md-6">
          <img
            className="img-fluid"
            src={HomeOneValue?.elements?.QuoteSection?.PersonImage?.value}
            alt=""
          />
        </div>
        <div className="col-12 col-md-6">
          <div className={styles.hSixContentGrp}>
            <FaQuoteLeft
              size={70}
              style={{ color: "lightgray", marginBottom: "5px" }}
            />
            <h2 className={styles.hSixquote} dangerouslySetInnerHTML={{
                            __html: HomeOneValue?.elements?.QuoteSection?.quote?.value,
                          }}>

            </h2>
            <h4 className={styles.hSixNameSection}>
              {HomeOneValue?.elements?.QuoteSection?.writerName?.value}
            </h4>
            <h6 className={styles.hSixDesigSection}>
              {HomeOneValue?.elements?.QuoteSection?.designation?.value}
            </h6>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
