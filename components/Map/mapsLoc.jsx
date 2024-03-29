import React from "react";
import styles from "./map.module.scss";

export default function map(props) {
  let HomeOneValue = {};
  if (props?.uiLayout && props?.uiLayout?.blockId) {
    HomeOneValue = props?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }
 
  return (
    <div className="container-fluid p-0">
      <div>
        <iframe
          src={HomeOneValue?.elements?.Map?.mapLink?.value}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className={styles.mapStyles}
        ></iframe>
      </div>
    </div>
  );
}
