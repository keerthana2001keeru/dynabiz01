import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaLocationArrow, FaRegEnvelope } from "react-icons/fa";
import styles from "./addressInfo.module.scss";

export default function AddressInfo(props) {
  let HomeOneValue = {};
  if (props?.uiLayout && props?.uiLayout?.blockId) {
    HomeOneValue = props?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }

  return (
    <div className={"container-fluid " + styles.sectionSetup}>
      <div className={"row " + styles.addressInfoSet}>
      {HomeOneValue?.elements?.ContactTypes?.value[0]?.heading?.value && (
        <div className="col-md-4 col-12">
          <div className={styles.contentAllSet}>
            <div className={styles.iconSetUp}>
              <FaPhoneAlt className={styles.setFabIcon} />
            </div>
            <h3 className={styles.title}>
              {HomeOneValue?.elements?.ContactTypes?.value[0]?.heading?.value}
            </h3>
            <h5 className={styles.contentMain}>
              {HomeOneValue?.elements?.ContactTypes?.value[0]?.Text?.value}
            </h5>
            <Link
              href={
                `tel:${HomeOneValue?.elements?.ContactTypes?.value[0]?.cTypes?.value}` ||
                ""
              }
            >
              <a target={"_blank"}>
                <span className={styles.subContent}>
                  {
                    HomeOneValue?.elements?.ContactTypes?.value[0]?.cTypes
                      ?.value
                  }
                </span>
              </a>
            </Link>
          </div>
        </div>
      )}

{HomeOneValue?.elements?.ContactTypes?.value[1]?.heading?.value &&(
        <div className="col-md-4 col-12">
          <div className={styles.contentAllSet}>
            <div className={styles.iconSetUp}>
              <FaRegEnvelope className={styles.setFabIcon} />
            </div>
            <h3 className={styles.title}>
              {HomeOneValue?.elements?.ContactTypes?.value[1]?.heading?.value}
            </h3>
            <h5 className={styles.contentMain}>
              {HomeOneValue?.elements?.ContactTypes?.value[1]?.Text?.value}
            </h5>
            <Link
              href={
                `mailto:${HomeOneValue?.elements?.ContactTypes?.value[1]?.cTypes?.value}` ||
                ""
              }
            >
              <a target={"_blank"}>
                <span className={styles.subContent}>
                  {
                    HomeOneValue?.elements?.ContactTypes?.value[1]?.cTypes
                      ?.value
                  }
                </span>
              </a>
            </Link>
          </div>
        </div>
)}
 {HomeOneValue?.elements?.ContactTypes?.value[2]?.heading?.value && (
        <div className="col-md-4 col-12">
          <div className={styles.contentAllSet}>
            <div className={styles.iconSetUp}>
              <FaLocationArrow className={styles.setFabIcon} />
            </div>
            <h3 className={styles.title}>
              {HomeOneValue?.elements?.ContactTypes?.value[2]?.heading?.value}
            </h3>
            <h5 className={styles.contentMain}>
              {HomeOneValue?.elements?.ContactTypes?.value[2]?.Text?.value}
            </h5>
            <span className={styles.subContent}>
              {HomeOneValue?.elements?.ContactTypes?.value[2]?.cTypes?.value}
            </span>
          </div>
        </div>
 )}
      </div>
    </div>
  );
}
