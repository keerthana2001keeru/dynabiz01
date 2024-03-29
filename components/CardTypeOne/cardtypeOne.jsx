import React from "react";
import styles from "./cardtypeone.module.scss";

export default function CardtypeOne(props) {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <img
            className={
              props?.setCmp?.IconImage?.style?.iconStyle
                ? "img-fluid " +
                  styles[props?.setCmp?.IconImage?.style?.iconStyle]
                : "img-fluid " + styles.HoneSectionIcon
            }
            src={props?.setCmp?.IconImage?.value}
          ></img>
        </div>
        <div className={"col-md-9 " + styles.HoneContentSet}>
          <h3
            className={
              props?.setCmp?.Heading?.style?.headingStyle
                ? styles[props?.setCmp?.Heading?.style?.headingStyle]
                : styles.HoneSectionTitle
            }
          >
            {props?.setCmp?.Heading?.value}
          </h3>
          <h6
            className={styles.HoneSectionDes
              // props?.setCmp?.Description?.style?.contentStyle
              //   ? styles[props?.setCmp?.Description?.style?.contentStyle]
              //   : styles.HoneSectionDes
            }
            dangerouslySetInnerHTML={{
              __html: props?.setCmp?.Description?.value,
            }}                        >
            
            
          </h6>
        </div>
      </div>
    </>
  );
}
