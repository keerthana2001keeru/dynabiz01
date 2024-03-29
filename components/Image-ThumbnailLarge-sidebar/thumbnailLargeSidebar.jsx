import React from "react";
import styles from "./thumbnailLargeSidebar.module.scss";

export default function ThumbnailSidebar(props) {
  var setposition = props?.imgitem?.layoutPosition?.value;
  // console.log(props)

  return (
    <>
      <div className={"row flex-wrap " + styles.sectionSetup}>
        <div
          className={
            setposition == "left"
              ? "order-md-1 my-auto col-md-4"
              : " order-md-2 my-auto col-md-4"
          }
        >
          <div className={styles.imgZoom}>
            <img
              src={props?.imgitem?.img?.value}
              className={"img-fluid " + styles.imgSetup}
              alt="..."
            />
            <div className={styles.overlayText}>
              {props?.imgitem?.title?.value}
            </div>
          </div>
        </div>
        <div
          className={
            setposition == "left"
              ? "order-md-2 col-md-8 "
              : " order-md-1 col-md-8 "
          }
        >
          <div className={styles.contentSetup}>
            <div className={styles.mainHeading}>
              {props?.imgitem?.title?.value}
            </div>
            <div className={styles.subHeading}>
              {props?.imgitem?.subTitle?.value}
            </div>
            <div className={styles.description}>
              {props?.imgitem?.des?.value}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
