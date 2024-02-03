import React from "react";
import styles from "./headerTwo.module.scss";
import Link from "next/link";

export default function HeaderTwo(props) {

  let logoImage = process?.env?.siteIdentity?.headerLogo
    ? process?.env?.siteIdentity?.headerLogo
    : process?.env?.siteIdentity?.siteLogo;
  let siteName = process?.env?.siteIdentity?.siteName;
  if (logoImage == "") {
    logoImage = "https://skartiocloud.sgp1.digitaloceanspaces.com/SKARTIO/THEME/1670321604794Logo-white-01.png";
  }
  return (
    <div className="container pt-5 d-lg-block d-none">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
     
          <Link  href="/">
            <img
              alt="Logo"
              width={180}
              // height={90}
              className="img-fluid"
              src={logoImage}
            />
          </Link>{" "}
      
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="me-auto"></div>
            <div
              className="d-flex justify-content-around"
              style={{ width: "530px" }}
            >
              {props?.uiSettings?.elements?.contents?.value?.map(
                (items, index) => {
                  return (
                    <div className="align-self-center" key={index}>
                      <figure>
                        <blockquote
                          className="blockquote"
                          style={{ marginTop: "1rem" }}
                        >
                          <p className={styles.setNavItemColor}>
                            {" "}
                            {items?.mainText?.value}{" "}
                          </p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                          <span className={styles.setNavItemSubColor}>
                            {" "}
                            {items?.subText?.value}
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                  );
                }
              )}
            </div>
            {props?.uiSettings?.elements?.button?.buttonText?.value && (
            <form className={"d-flex " + styles.btnSetup}>
                <Link href={props?.uiSettings?.elements?.button?.buttonLink?.urlType == "R" ?  "#" +  props?.uiSettings?.elements?.button?.buttonLink?.value || ""
                      :  props?.uiSettings?.elements?.button?.buttonLink?.value || ""}
                     legacyBehavior
                   target={ props?.uiSettings?.elements?.button?.buttonLink?.urlType == "E" ? "_blank" : ""}>
             
                <button
                  className={"btn " + styles.headerTwoButton}
                  type="submit"
                >
                  {props?.uiSettings?.elements?.button?.buttonText?.value}
                </button>
              </Link>
            </form>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
