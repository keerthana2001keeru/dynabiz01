import React from "react";
import HeaderThree from "./headerThree";
import HeaderTwo from "./headerTwo";
import styles from "./headerMain.module.scss";
import Link from "next/link";
import MegaMenu from "./Megamenu/megaMenu";

export default function HeaderMain(props) {
  //  console.log(props);
  //   console.log(props?.headerMain?.blocks);
  return (
    <div className="container-fluid p-0">
      <div
        id="cuscarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#cuscarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#cuscarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          {props?.uiLayout?.elements?.TopBannerSection?.value?.map((item) => {
            return (
              <div className="carousel-item active">
                <div className={styles.overlay}></div>
                <img
                  src={item?.bgImage?.value}
                  className={"d-block w-100 " + styles.imgHeight}
                  alt="..."
                />
                <div
                  className={"carousel-caption " + styles.captionCarouselSet}
                >
                  <h5 className={styles.sliderOneTitle}>
                    {item?.title?.value}
                  </h5>
                  <p className={styles.sliderOneDes}>{item?.subTitle?.value}</p>
                  <span className={styles.sliderBtnSet}>
                    {item?.buttonTextOne?.value ? (
                      // <Link href={banner?.socialLinks?.fbLink?.urlType == "R" ?  "#" + banner?.socialLinks?.fbLink?.value || ""
                      // : banner?.socialLinks?.fbLink?.value || ""}
                      // legacyBehavior
                      // target={banner?.socialLinks?.fbLink?.urlType == "E" ? "_blank" : ""}><a><i className="bx bxl-facebook" /></a></Link>
                      <Link href={item?.buttonLinkOne?.urlType == "R" ? "#" + item?.buttonLinkOne?.value || ""
                      : item?.buttonLinkOne?.value || ""}
                      legacyBehavior
                      target={item?.buttonLinkOne?.urlType == "E" ? "_blank" : ""}>
                        <button
                          className={`${styles.sliderBtnOne} ${styles.buttonSetUp}`}
                        >
                          {item?.buttonTextOne?.value}
                        </button>
                      </Link>
                    ) : (
                      ""
                    )}
                    {item?.buttonTextTwo?.value ? (
                      <Link href={item?.buttonLinkTwo?.urlType == "R" ? "#" + item?.buttonLinkTwo?.value || ""
                      : item?.buttonLinkTwo?.value || ""}
                      legacyBehavior
                      target={item?.buttonLinkTwo?.urlType == "E" ? "_blank" : ""}>
                        <button
                          className={`${styles.sliderBtnTwo} ${styles.buttonSetUp}`}
                        >
                          {item?.buttonTextTwo?.value}
                        </button>
                      </Link>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#cuscarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#cuscarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
      </div>
    </div>
  );
}
