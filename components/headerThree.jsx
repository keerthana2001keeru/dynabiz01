import React, { useState, useEffect } from "react";
import styles from "./headerThree.module.scss";
import { FaSearch, FaShoppingCart, FaHome, FaBars } from "react-icons/fa";
import { RiArrowDropRightLine } from "react-icons/ri";
import Link from "next/link";
import TestMobileHeader from "./TestMobileHeader/testMobileHeader";
import { useScrollPosition } from "./Hooks/useScrollPosition";

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
    <HeaderThreeMob uiLayout={uiLayout} />
  ) : (
    <HeaderThreeDes uiLayout={uiLayout} />
  );
};

const HeaderThreeDes = (props) => {
  const scrollposition = useScrollPosition();
  const uiLayout = props?.uiLayout;
  let logoImage = process?.env?.siteIdentity?.headerLogo
    ? process?.env?.siteIdentity?.headerLogo
    : process?.env?.siteIdentity?.siteLogo;
  let siteName = process?.env?.siteIdentity?.siteName;
  if (logoImage == "") {
    logoImage = process.env.basePath + "/Logo-white-01.png";
  }

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
          <a className="navbar-brand d-lg-none">
            <img
              alt="Grouparoo Logo"
              width={150}
              height={80}
              className={"img-fluid " + styles.logoSetup}
               src={logoImage}
              //src="/uploads/Logo-$color_text_light_one-01.png"
            />
          </a>
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
              <li className="nav-item">
                <Link href={"/"}>
                  <a
                    className={"nav-link " + styles.setNavLinkActive}
                    aria-current="page"
                  >
                    {" "}
                    <FaHome className={styles.homeIcon} />
                    Home
                  </a>
                </Link>
              </li>
              <li className={"nav-item " + styles.ktmMenu}>
                <Link href={"/"}>
                  <a
                    className={"nav-link " + styles.setNavLinkColor}
                    data-bs-toggle="dropdown"
                  >
                    Page
                  </a>
                </Link>
                <ul className={"dropdown-menu " + styles.dropDownMenus}>
                  <li>
                    <Link href={"/about-us"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about-us-2"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        About Us 2
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about-us-3"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        About Us 3
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about-our-team"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        About Our Team
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/career"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        Career
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a
                      href=""
                      className={"dropdown-item " + styles.dropdownItem}
                    >
                      Contact <RiArrowDropRightLine size={28} />{" "}
                    </a>
                    <ul className={"dropdown-menu submenu " + styles.subMenus}>
                      <li>
                        <Link href={"/contact"}>
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Contact
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/contact-2"}>
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Contact 2
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/contact-3"}>
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Contact 3
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href=""
                      className={"dropdown-item " + styles.dropdownItem}
                    >
                      Team <RiArrowDropRightLine size={28} />
                    </a>
                    <ul className={"dropdown-menu submenu " + styles.subMenus}>
                      <li>
                        <Link href={"/team-plain-style"}>
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Team / Plain Style
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/team-thumbnail-style"}>
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Team / Thumbnail Style
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/team-frame-style"}>
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Team / Frame Style
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"/price-table"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        Price Table
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/maintenance"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        Maintenance
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/coming-soon"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        Coming Soon
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/404"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        404 Page
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={"nav-item " + styles.ktmMenu}>
                <Link href={"/services"}>
                  <a
                    className={"nav-link " + styles.setNavLinkColor}
                    data-bs-toggle="dropdown"
                  >
                    Our Services
                  </a>
                </Link>
                <ul className={"dropdown-menu " + styles.dropDownMenus}>
                  <li>
                    <Link href={"/servicedetails"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        Capital Markets
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/servicedetails"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        Insurance
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/servicedetails"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        Blockchain
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/servicedetails"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        Technology Advisory
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/servicedetails"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        Finance & Risk
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/servicedetails"}>
                      <a className={"dropdown-item " + styles.dropdownItem}>
                        Portfolio Management
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={"nav-item dropdown " + styles.ktmMegaMenu}>
                <Link href={"/cases"}>
                  <a
                    className={"nav-link  " + styles.setNavLinkColor}
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Cases
                  </a>
                </Link>
                <div
                  className={"dropdown-menu " + styles.dropdownMenu}
                  aria-labelledby="navbarDropdown"
                >
                  <div className="d-flex flex-wrap justify-content-md-evenly">
                    <ul>
                      <li>
                        <a
                          className={"dropdown-item " + styles.dropdownItem}
                          href="#"
                        >
                          Portfolio Grid
                        </a>
                      </li>
                      <li>
                        <Link href="/cases">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Portfolio Columns
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio-frame">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Portfolio Columns With Frame
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio-nospace">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Portfolio Columns No Space
                          </a>
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          className={"dropdown-item " + styles.dropdownItem}
                          href="#"
                        >
                          Portfolio Modern
                        </a>
                      </li>
                      <li>
                        <Link href="/portfolio-modern">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Modern Columns
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio-modern-nospace">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Modern Columns No Space
                          </a>
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          className={"dropdown-item " + styles.dropdownItem}
                          href="#"
                        >
                          Portfolio Side Thumbnail
                        </a>
                      </li>
                      <li>
                        <Link href="/portfolio-left-right-large-thumbnail">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Portfolio Left & Right Large Thumbnail
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio-left-large-thumbnail">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Portfolio Left Large Thumbnail
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio-right-large-thumbnail">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Portfolio Right Large Thumbnail
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio-left-right-small-thumbnail">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Portfolio Left & Right Small Thumbnail
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio-left-small-thumbnail">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Portfolio Left Small Thumbnail
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio-right-small-thumbnail">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Portfolio Right Small Thumbnail
                          </a>
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          className={"dropdown-item " + styles.dropdownItem}
                          href="#"
                        >
                          Single Case(Portfolio)
                        </a>
                      </li>
                      <li>
                        <Link href="/portfolio-singlecase-one">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Custom Style 1
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio-singlecase-two">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Custom Style 2
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio-singlecase-three">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Custom Style 3
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className={"nav-link " + styles.setNavLinkColor} href="#">
                  Features
                </a>
              </li>
              <li className={"nav-item " + styles.ktmMenu}>
                <Link href={"/cases"}>
                  <a
                    className={"nav-link " + styles.setNavLinkColor}
                    data-bs-toggle="dropdown"
                  >
                    Blog
                  </a>
                </Link>
                <ul className={"dropdown-menu " + styles.dropDownMenus}>
                  <li>
                    <a
                      href=""
                      className={"dropdown-item " + styles.dropdownItem}
                    >
                      Blog Grid <RiArrowDropRightLine size={28} />
                    </a>
                    <ul className={"dropdown-menu submenu " + styles.subMenus}>
                      <li>
                        <Link href="/blog-grid-2-columns">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog Grid 2 Columns
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-grid-3-columns">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog Grid 3 Columns
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-grid-4-columns">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog Grid 4 Columns
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-grid-2-columns-no-space">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog Grid 2 Columns No Space
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-grid-3-columns-no-space">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog Grid 3 Columns No Space
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-grid-4-columns-no-space">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog Grid 4 Columns No Space
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href=""
                      className={"dropdown-item " + styles.dropdownItem}
                    >
                      Blog Columns <RiArrowDropRightLine size={28} />
                    </a>
                    <ul className={"dropdown-menu submenu " + styles.subMenus}>
                      <li>
                        <Link href="/blog-4-columns-with-frame">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog 4 Columns With Frame
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio-modern-nospace">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog 4 Columns
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-3-columns-with-frame-post-format">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog Columns With Post Format
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href=""
                      className={"dropdown-item " + styles.dropdownItem}
                    >
                      Blog Full <RiArrowDropRightLine size={28} />
                    </a>
                    <ul className={"dropdown-menu submenu " + styles.subMenus}>
                      <li>
                        <Link href="/blog-full-right-sidebar-with-frame">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog Full Right Sidebar
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-full-left-sidebar-with-frame">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog Full Left Sidebar
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-full-both-sidebar-with-frame">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog Full Both Sidebar With Frame
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-full-right-sidebar">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog Full Right Sidebar
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-full-left-sidebar">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog Full Left Sidebar
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-full-both-sidebar">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Blog Full Both Sidebar
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href=""
                      className={"dropdown-item " + styles.dropdownItem}
                    >
                      Single Post <RiArrowDropRightLine size={28} />
                    </a>
                    <ul className={"dropdown-menu submenu " + styles.subMenus}>
                      <li>
                        <Link href="/standard-post-type">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Standard Post Format
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/single-post-custom-layout-1">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Custom Layout 1
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/single-post-custom-layout-2">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Custom Layout 2
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/single-post-custom-layout-3">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Custom Layout 3
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/aside-post-format">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Aside Post Format
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/audio-post-format">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Audio Post Format
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/gallery-post-format">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Gallery Post Format
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/image-post-format">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Image Post Format
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/link-post-format">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Link Post Format
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/quote-post-format">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Quote Post Format
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/video-post-format">
                          <a className={"dropdown-item " + styles.dropdownItem}>
                            Video Post Format
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                                <a className={"nav-link " + styles.setNavLinkColor} href="#">Shop</a>
                            </li> */}
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
const HeaderThreeMob = (props) => {
  const uiLayout = props?.uiLayout;
  return <TestMobileHeader uiLayout={uiLayout} />;
};

export default function HeaderThree(props) {
  const uiLayout = props?.uiLayout;
  return (
    <ViewportProvider>
      <MyComponent uiLayout={uiLayout} />
    </ViewportProvider>
  );
}
