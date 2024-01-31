import React from "react";
import styles from "./home.module.scss";
import Link from "next/link";

export default function HomeSectionTwo(pageProps) {
  let HomeOneValue = {};
  if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
    HomeOneValue = pageProps?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }

  return (
    <section className="sec-mar">
      <div
        className={"container-fluid p-0 "}
        style={{
          backgroundImage: `url(${HomeOneValue?.elements?.ServiceProvide?.backgroundImage?.value})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          zIndex: "2",
        }}
      >
        <div className="text-center">
          <h2 className={styles.HtwoSectionTitle}>
            {HomeOneValue?.elements?.ServiceProvide?.heading?.value}
          </h2>
          <h5 className={styles.HtwoSectionSubTitle}>
            {HomeOneValue?.elements?.ServiceProvide?.subHeading?.value}
          </h5>
        </div>
        <div className="row container-fluid mx-auto pt-5 pb-5">
          {HomeOneValue?.elements?.ServiceProvideCards?.value?.map(
            (item, index) => {
              return (
                <div
                  className={"col-md-4 col-sm-12 " + styles.HtwoSectionCardGrp}
                  key={index}
                >
                  <Link
                    href={
                      item?.cardLink?.urlType == "R"
                        ? "#" + item?.cardLink?.value || ""
                        : item?.cardLink?.value || ""
                    }
                    legacyBehavior
                    target={item?.cardLink?.urlType == "E" ? "_blank" : ""}
                  >
                    <div
                      className={
                        "card mb-3 shadow-lg p-3 " + styles.HtwoSectionCard
                      }
                    >
                      <img
                        className={
                          "img-fluid mx-auto " + styles.HtwoSectionCardImg
                        }
                        src={item?.IconImage?.value}
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h5
                          className={
                            "card-title " + styles.HtwoSectionCardTitle
                          }
                        >
                          {item?.Heading?.value}
                        </h5>
                        <div
                          className={"card-text " + styles.HtwoSectionCardDes}
                          dangerouslySetInnerHTML={{
                            __html: item?.Description?.value,
                          }}
                        ></div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
