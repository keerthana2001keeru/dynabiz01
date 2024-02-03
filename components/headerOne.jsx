import React from "react";
import { BsFillEnvelopeFill, BsPersonCircle } from "react-icons/bs";
import styles from "./headerOne.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaGooglePlusG,
  FaPinterestP,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Header(props) {
  return (
    <div className="container-fluid p-0 d-lg-block d-none">
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "$color_text_light_one" }}
      >
        <div className="container-fluid justify-content-between">
          <ul
            className={
              "navbar-nav d-flex justify-content-around " +
              styles.grupSetWidthOne
            }
          >  
           {props?.uiSettings?.elements?.headerMenu?.HeaderMenu?.value?.map((item) => {
                            return (
                                <li className="nav-item dropdown">
                                    <a className={"nav-link dropdown-toggle " + styles.setNavColor} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      <b> {item?.name}</b> 
                                    </a>
                                    {item?.children?.length != 0 ? <ul className={'dropdown-menu ' + styles.dropdownMenu} aria-labelledby="navbarDropdownMenuLink">
                                        {item?.children?.map((child) => {
                                            return (
                                                <li>
                                                  <a className="dropdown-item" href="#">
                                                   <b> {child?.name}</b>
                                                    </a></li>
                                            )
                                        })}

                                    </ul> : null}

                                </li>
                            )
                        })} 
            {/* <li className="nav-item dropdown">
              <a
                className={"nav-link  " + styles.setNavColor}
                href="#"
                id="navbarDropdownMenuLink"
                // role="button"
                // data-bs-toggle="dropdown"
                // aria-expanded="false"
              >
                En
              </a>
             <ul className={'dropdown-menu ' + styles.dropdownMenu} aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Es</a></li>
                            </ul> 
            </li>
           <li className="nav-item dropdown">
                            <a className={"nav-link dropdown-toggle " + styles.setNavColor} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hamburg
                            </a>
                            <ul className={'dropdown-menu ' + styles.dropdownMenuTwo} aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">New York</a></li>
                            </ul>
                        </li>  */}
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul
              className={
                "navbar-nav d-flex justify-content-around " +
                styles.grupSetWidthTwo
              }
            >
              <li className="nav-item">
                <span
                  className={"nav-link " + styles.setNavColor}
                  aria-current="page"
                >
                  {" "}
                 <b> {props?.uiSettings?.elements?.contents?.times?.value}{" "}</b>
                </span>
              </li>
              <li className="nav-item">
                <Link  href={`tel:${props?.uiSettings?.elements?.contents?.PhNumber?.value}` ||
                    "#"
                  }
                >
                 
                    <a className={"nav-link " + styles.setNavColor}><FaPhoneAlt />
                     <b> {props?.uiSettings?.elements?.contents?.PhNumber?.value}</b>
                    </a>
               
                </Link>
              </li>
            </ul>
            <div className="me-auto"></div>
            <ul
              className={
                "navbar-nav d-flex justify-content-around " +
                styles.grupSetWidthThree
              }
            >
              <li className="nav-item">
             
                <Link
                  href={
                    `mailto:${props?.uiSettings?.elements?.contents?.mail?.value}` ||
                    "#" }
                  
                >
                  <a
                    className={"nav-link " + styles.setNavColor}
             
                  > <BsFillEnvelopeFill />
                  <b> {props?.uiSettings?.elements?.contents?.mail?.value}</b> 
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={
                    props?.uiSettings?.elements?.SocialIcons?.value[0]
                      ?.SocialIcons?.value || ""
                  }

                >
                  <a className={"nav-link " + styles.setNavColor}>
                    <FaFacebookF />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={
                    props?.uiSettings?.elements?.SocialIcons?.value[1]
                      ?.SocialIcons?.value || ""
                  }
                  target={"/blank"}
                >
                  <a className={"nav-link " + styles.setNavColor}>
                    <FaGooglePlusG />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={
                    props?.uiSettings?.elements?.SocialIcons?.value[3]
                      ?.SocialIcons?.value || ""
                  }
                  target={"/blank"}
                >
                  <a className={"nav-link " + styles.setNavColor}>
                    <FaTwitter />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={
                    props?.uiSettings?.elements?.SocialIcons?.value[4]
                      ?.SocialIcons?.value || ""
                  }
                  target={"/blank"}
                >
                  <a className={"nav-link " + styles.setNavColor}>
                    <FaInstagram />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
