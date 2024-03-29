import React from "react";
import styles from "./thumbnailSmallSidebar.module.scss";

export default function ThumbnailSmallSidebar(props) {
  var setposition = props?.imgitem?.layoutPosition?.value;

  return (
    <div>
      <div className={"row " + styles.sectionSetup}>
        <div
          className={
            setposition == "left"
              ? "col-md-4 order-md-1 my-auto"
              : "col-md-4 order-md-2 my-auto"
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
              ? "col-md-8 order-md-2"
              : "col-md-8 order-md-1"
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
    </div>
  );
}
