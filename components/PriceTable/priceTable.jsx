import React from "react";
import styles from "./priceTable.module.scss";
import { FaCheck, FaRegLightbulb } from "react-icons/fa";

export default function PriceTable(props) {
  return (
    <div className="container-fluid p-0">
      <div className={"card " + styles[props?.setCmp?.crdStyle]}>
        <div
          className={"text-center " + styles[props?.setCmp?.topSectionStyle]}
        >
          <div className={styles.topIcon}>
            <FaRegLightbulb size={35} />
          </div>
          <div className={styles.topTitle}>{props?.setCmp?.topHeading}</div>
          <div className={styles.topSubTitle}>
            {props?.setCmp?.topSubHeading}
          </div>
        </div>
        <div className="text-center">
          <div
            className={"card-body " + styles[props?.setCmp?.subSectionStyle]}
          >
            <span className={styles.titlePrefix}>$</span>
            <span className={styles.cardTitle}>
              {props?.setCmp?.subSectionContent}
            </span>
            <span className={styles.titleSufix}>/ MO</span>
          </div>
          <ul className="list-group list-group-flush">
            {props?.setCmp?.listItems?.map((items, index) => {
              return (
                <li
                  key={index}
                  className={"list-group-item " + styles.listGrup}
                >
                  <FaCheck size={15} className={styles.listIconSetup} />{" "}
                  {items?.itemText}{" "}
                </li>
              );
            })}
          </ul>
          <div className={"card-body " + styles.setBgClr}>
            <button
              className={`${styles.btnSetUp} ${
                styles[props?.setCmp?.buttonStyle]
              }`}
            >
              {props?.setCmp?.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
