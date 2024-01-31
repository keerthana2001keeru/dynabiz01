import React from "react";
import styles from "./home.module.scss";

export default function HomeSectionOne(pageProps) {
  let HomeOneValue = {};
  if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
    HomeOneValue = pageProps?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }

  return (
    
    <section >
    
    <div className={"container-fluid p-5 " + styles.HoneSectionSetUp}>
      <div className="row pt-5 pb-5">
        {HomeOneValue?.elements?.HomePageSectionOne?.value?.map(
          (item, index) => {
            return (
              <div className="col-md-4 col-sm-12" key={index}>
                <div className="row">
                  <div className="col-md-3">
                    <img
                      className={"img-fluid " + styles.HoneSectionIcon}
                      src={item?.IconImage?.value}
                    ></img>
                  </div>
                  <div className={"col-md-9 " + styles.HoneContentSet}>
                    <h3 className={styles.HoneSectionTitle}>
                      {item?.Heading?.value}
                    </h3>
                
                    <div className={styles.HoneSectionDes} dangerouslySetInnerHTML={{ __html: item?.Description?.value}}></div>
                    
                 
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
    </section>
  );
}
