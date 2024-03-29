import React, { useState, useEffect } from "react";
import styles from "./megaMenu.module.scss";
import { FaSearch, FaShoppingCart, FaHome, FaBars } from "react-icons/fa";
import { RiArrowDropRightLine } from "react-icons/ri";
import Link from "next/link";
import TestMobileHeader from "../TestMobileHeader/testMobileHeader";
import { useScrollPosition } from "../Hooks/useScrollPosition";
import MobileMegaMenuHeader from "../MobileMegaMenuHeader/mobileMenuHeader";

const viewportContext4 = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
  });
  React.useEffect(() => {
    setHeight(window.innerWidth);
  });
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext4.Provider value={{ width, height }}>
      {children}
    </viewportContext4.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext4);
  return { width, height };
};
const MyComponent = (props) => {
  const uiLayout = props?.uiLayout;

  const { width } = useViewport();
  const breakpoint = 770;

  return width < breakpoint ? (
    <MegaMenuMob uiLayout={uiLayout} webLogo={props?.webLogo} />
  ) : (
    <MegaMenuDes uiLayout={uiLayout} webLogo={props?.webLogo} />
  );
};

const MegaMenuDes = (props) => {
  const scrollposition = useScrollPosition();
  const uiLayout = props?.uiLayout;

  return (
    <div className={"container-xl " + styles.containersetup}>
      <nav
        className={
          scrollposition > 500
            ? "navbar fixed-top navbar-expand-md navbar-light " +
              styles.navbarTransparentTwo
            : "navbar navbar-expand-md navbar-light " + styles.navbarTransparent
        }
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand d-md-none" href="/">
            {/* <img
              alt="Logo"
              width={150}
              height={80}
              className={"img-fluid " + styles.logoSetup}
              //src={props?.webLogo}
            /> */}
          {/* </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <FaBars style={{ color: "$color_text_light_one" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {uiLayout?.elements?.headerMegaMenu?.HeaderMenu?.value?.map(
                (item, i) => {
                  if (item?.children?.length > 0) {
                    return (
                      <li
                        className={"nav-item dropdown " + styles.ktmMegaMenu}
                        key={i}
                      >
                        <Link href={item?.link || ""}>
                          <a
                            className={"nav-link  " + styles.setNavLinkColor}
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {item?.name}
                          </a>
                        </Link>
                        <div
                          className={"dropdown-menu " + styles.dropdownMenu}
                          aria-labelledby="navbarDropdown"
                        >
                          <div className="d-flex flex-wrap justify-content-md-evenly">
                            {item?.children?.map((childItem, i) => {
                              return (
                                <ul key={i}>
                                  <li>
                                    <Link href={childItem?.link || ""}>
                                      <a
                                        className={
                                          "dropdown-item " + styles.dropdownItem
                                        }
                                      >
                                        {childItem?.name}
                                      </a>
                                    </Link>
                                  </li>
                                  {childItem?.children?.map(
                                    (childItemTwo, i) => {
                                      return (
                                        <li key={i}>
                                          <Link href={childItemTwo?.link || ""}>
                                            <a
                                              className={
                                                "dropdown-item " +
                                                styles.dropdownItem
                                              }
                                            >
                                              {childItemTwo?.name}
                                            </a>
                                          </Link>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              );
                            })}
                          </div>
                        </div>
                      </li>
                    );
                  } else {
                    return (
                      <Link href={item?.link || ""}>
                        <li
                          className={"nav-item dropdown " + styles.ktmMegaMenu}
                          key={i}
                          style={{ cursor: "pointer" }}
                        >
                          <a
                            className={"nav-link  " + styles.setNavLinkColor}
                            // id="navbarDropdown"
                            // role="button"
                            // data-bs-toggle="dropdown"
                            // aria-expanded="false"
                          >
                            {item?.name}
                          </a>
                        </li>
                      </Link>
                    );
                  }
                }
              )}
            </ul>
          </div>
          <div
            className={
              "d-flex justify-content-around d-lg-block d-none " +
              styles.setWidthIconSet
            }
          >
            {/* <FaSearch
              className={styles.iconSetup}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            /> */}
            {/* <FaShoppingCart className={styles.iconSetup} /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
const MegaMenuMob = (props) => {
  const uiLayout = props?.uiLayout;
  return <MobileMegaMenuHeader uiLayout={uiLayout} webLogos={props?.webLogo} />;
};

export default function MegaMenu(props) {
  const uiLayout = props?.uiSettings;
  return (
    <ViewportProvider>
      <MyComponent
        uiLayout={uiLayout}
        webLogo={props?.logo?.elements?.websiteLogo?.logo?.value}
      />
    </ViewportProvider>
  );
}
