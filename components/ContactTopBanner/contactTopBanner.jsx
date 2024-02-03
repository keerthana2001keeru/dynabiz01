import React from "react";
import styles from "./contactTopBanner.module.scss";
import Header from "../headerOne";
import HeaderThree from "../headerThree";
import HeaderTwo from "../headerTwo";
import MegaMenu from "../Megamenu/megaMenu";

export default function ContactTopBanner(props) {
  let HomeOneValue = {};
  if (props?.uiLayout && props?.uiLayout?.blockId) {
    HomeOneValue = props?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }
 // console.log(HomeOneValue?.elements?.TopBannerSection?.overlay?.value);
  return (
    <div className="container-fluid p-0">
      {/* <div className="d-lg-none">
        <MegaMenu uiSettings={props?.uiSettings?.blocks?.TH00025B63}></MegaMenu>
      </div> */}
      <div
        className={
          HomeOneValue?.elements?.TopBannerSection?.overlay?.value
            ? styles.overlayMain
            : ""
        }
      >
        {HomeOneValue?.elements?.TopBannerSection?.overlay?.value ? (
          <div className={styles.overlay}></div>
        ) : (
          ""
        )}
        <div
          style={{
            backgroundImage: `url(${HomeOneValue?.elements?.TopBannerSection?.bgImage?.value})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* <div style={{ zIndex: "2", position: "relative" }}>
            <HeaderTwo
              uiSettings={props?.uiSettings?.blocks?.TH00025B64}
            ></HeaderTwo>
          </div>
          <div className="d-lg-block d-none">
            <MegaMenu
              uiSettings={props?.uiSettings?.blocks?.TH00025B63}
            ></MegaMenu>
          </div> */}

          <div
            className={
              styles[
                HomeOneValue?.elements?.TopBannerSection?.contentSection?.value
              ]
            }
          >
            <div className={styles.title}>
              {HomeOneValue?.elements?.TopBannerSection?.title?.value}
            </div>
            <div className={styles.subtitle}>
              {HomeOneValue?.elements?.TopBannerSection?.subTitle?.value}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
