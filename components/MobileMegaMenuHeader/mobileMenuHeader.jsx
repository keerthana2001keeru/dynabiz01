import Link from "next/link";
import React from "react";
import styles from "./mobileMenu.module.scss";

export default function MobileMegaMenuHeader(props) {
  let HomeOneValue = {};
  if (props?.uiLayout && props?.uiLayout?.blockId) {
    HomeOneValue = props?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }

  return (
    <div>
      <input type="checkbox" id="main-nav-check" />
      <div id="menu">
        <label htmlFor="main-nav-check" className="toggle" title="Close">
          &times;
        </label>
        <ul>
          {HomeOneValue?.elements?.headerMegaMenu?.HeaderMenu?.value?.map(
            (item, i) => {
              if (item?.children?.length > 0) {
                return (
                  <li key={i}>
                    <Link href={item?.link || ""}>
                      <a>{item?.name}</a>
                    </Link>
                    <label htmlFor="fof" className="toggle-sub">
                      &#9658;
                    </label>
                    <input type="checkbox" id="fof" className="sub-nav-check" />
                    <ul id={i} className="sub-nav">
                      <li className="sub-heading">
                        {item?.name}
                        <label htmlFor="fof" className="toggle" title="Back">
                          &#9658;
                        </label>
                      </li>
                      {item?.children?.map((itemChild, i) => {
                        return (
                          <li key={i}>
                            <Link href={itemChild?.link || ""}>
                              <a>{itemChild?.name}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li key={i}>
                    <Link href={item?.link || ""}>
                      <a>{item?.name}</a>
                    </Link>
                  </li>
                );
              }
            }
          )}
        </ul>
      </div>
      {/* closing menu */}

      <div className="containerSetup">
        <div id="header">
          <span className={styles.classtwo}>
            <img
              alt="Grouparoo Logo"
              width={150}
              height={80}
              className={"img-fluid " + styles.logoSetup}
              src={props?.webLogos}
            />
          </span>
          <label htmlFor="main-nav-check" className="toggle" title="Menu">
            &#x2261;
          </label>
        </div>
        {/* closing "#header" */}
      </div>
      {/* <!-- closing ".container" --> */}
    </div>
  );
}
