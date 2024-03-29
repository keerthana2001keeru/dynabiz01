import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGooglePlusG,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import styles from "./socialshare.module.scss";

export default function Socialshare(props) {
  let HomeOneValue = {};
  if (props?.uiLayout && props?.uiLayout?.blockId) {
    HomeOneValue = props?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }
 // console.log(HomeOneValue);
  return (
    <div className="container-fluid">
        {props?.fbLink?.value || props?.fbLink?.value || props?.fbLink?.value (
      <div className={styles.iconConfigSet}>
        <ul className={"d-flex justify-content-center " + styles.listDot}>
          <li>
          {props?.fbLink?.value && (
                        <Link href={ props?.fbLink?.urlType == "R" ?  "#" + props?.fbLink?.value || ""
                      : props?.fbLink?.value || ""} 
                      legacyBehavior
                      >
                          <a target={props?.fbLink?.urlType == "E" ? "_blank" : ""}>
                          <FaFacebookF className={styles.setFabIconColor} />
                          </a>
                        </Link>
                     )}

          
          </li>
          <li>

          {props?.fbLink?.value && (
                        <Link href={ props?.fbLink?.urlType == "R" ?  "#" + props?.fbLink?.value || ""
                      : props?.fbLink?.value || ""} 
                      legacyBehavior
                      >
                          <a target={props?.fbLink?.urlType == "E" ? "_blank" : ""}>
                          <FaGooglePlusG className={styles.setFabIconColor} />
                          </a>
                        </Link>
                     )}
            {/* <a className={" " + styles.setFabIconColor} href="#">
              <FaGooglePlusG />
            </a> */}
          </li>
          <li>
          {props?.fbLink?.value && (
                        <Link href={ props?.fbLink?.urlType == "R" ?  "#" + props?.fbLink?.value || ""
                      : props?.fbLink?.value || ""} 
                      legacyBehavior
                      >
                          <a target={props?.fbLink?.urlType == "E" ? "_blank" : ""}>
                          <FaPinterestP className={styles.setFabIconColor} />
                          </a>
                        </Link>
                     )}
            {/* <a className={" " + styles.setFabIconColor} href="#">
              <FaPinterestP />
            </a> */}
          </li>
          <li>
          {props?.fbLink?.value && (
                        <Link href={ props?.fbLink?.urlType == "R" ?  "#" + props?.fbLink?.value || ""
                      : props?.fbLink?.value || ""} 
                      legacyBehavior
                      >
                          <a target={props?.fbLink?.urlType == "E" ? "_blank" : ""}>
                          <FaTwitter className={styles.setFabIconColor} />
                          </a>
                        </Link>
                     )}

            {/* <a className={" " + styles.setFabIconColor} href="#">
              <FaTwitter />
            </a> */}
          </li>
          {/* <li>
            <a className={" " + styles.setFabIconColor} href="#">
              <FaInstagram />
            </a>
          </li> */}
        </ul>
      </div>
        )}
    </div>
  );
}
