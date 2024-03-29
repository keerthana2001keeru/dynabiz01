import React from "react";
import styles from "./simpleparagraph.module.scss";

export default function SimpleParagraph(props) {
  return (
    <div className="container-fluid">
      <p className={styles.text}
       dangerouslySetInnerHTML={{
        __html: props?.setCmp?.paragraphContent?.value,
      }}
      
      ></p>
    </div>
  );
}
