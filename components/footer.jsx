import React, { useState } from "react";
import Link from "next/link";
import styles from "./footer.module.scss";
import {
  FaLocationArrow,
  FaPhone,
  FaRegEnvelopeOpen,
  FaLongArrowAltRight,
  FaFacebookF,
  FaGooglePlusG,
  FaPinterestP,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { emailValidation } from "../validation/validation";
import { postHttpService } from "../utilities/http-service-helper";
import { ToastContainer, toast } from "react-toastify";

export default function Footer(props) {
  const uiLayout = props?.uiSettings;

  const [isActive, setActive] = useState("");

  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueNote, setInputValueNote] = useState("");

  const [nameError, setNameError] = useState();
  const [mailError, setMailError] = useState();
  const [noteError, setNoteError] = useState();

  const [isVisible, setIsVisible] = useState(false);

  var mail;

  function submits() {
    mail = emailValidation(inputValueEmail);
    if (mail != null) {
      setMailError(mail);
    } else {
      setMailError(null);
    }

    if (!inputValueName) {
      setNameError("Full Name Required");
    } else {
      setNameError(null);
    }

    if (!inputValueNote) {
      setNoteError("Please Enter A Message For This Enquery");
    } else {
      setNoteError(null);
    }

    if (mail == null && inputValueName && inputValueNote) {
      updateCacheForKey();
    }
  }

  async function updateCacheForKey() {
    let payload = {
      pathParams: {},
      queryParams: {},
      data: {
        type: "P",
        name: inputValueName,
        designation: "",
        email: inputValueEmail,
        phone: "",
        message: inputValueNote,
      },
    };
    const result = await postHttpService(
      "/useractions",
      payload,
      "captureLead"
    );
    if (result.status == 200 && result.data.status == 200) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      setInputValueName("");
      setInputValueEmail("");
      setInputValueNote("");
    } else {
    }
  }
  var logoImage = process?.env?.siteIdentity?.footerLogo
  ? process?.env?.siteIdentity?.footerLogo
  : process?.env?.siteIdentity?.siteLogo;
let siteName = process?.env?.siteIdentity?.siteName;
if (logoImage == "") {
  logoImage = process.env.basePath + "/Logo-white-01.png";
  
}
  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#303030" }}>
      <footer className="section bg-footer pt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="">
                <img
                  alt="Grouparoo Logo"
                  width={150}
                  height={80}
                  className="img-fluid"
                  src={logoImage}
                    //uiLayout?.blocks?.TH00025B66?.elements?.footerAddress?.logo
                     // ?.value
                 // }
                />
                <div className="list-unstyled footer-link mt-4">
                  <div className="linkPadding d-flex">
                    
                      <FaLocationArrow className={styles.footerFaIconSetup} />
                 
                    <div>
                      <Link href="">
                        <span className={styles.footerSecOne}>
                          {
                            uiLayout?.blocks?.TH00025B66?.elements
                              ?.footerAddress?.addressLine?.value
                          }
                        </span>
                      </Link>
                    </div>
                  </div>
                  <br/>
                  <div className="linkPadding d-flex">
                    <div>
                      <FaPhone className={styles.footerFaIconSetup} />
                    </div>
                    <div>
                      <Link
                        href={
                          `tel:${uiLayout?.blocks?.TH00025B66?.elements?.footerAddress?.PhNumber?.value}` ||
                          ""
                        }
                      >
                        <a target={"_blank"}>
                          <span className={styles.footerSecOne}>
                            {
                              uiLayout?.blocks?.TH00025B66?.elements
                                ?.footerAddress?.PhNumber?.value
                            }
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <br/>
                  <div className="linkPadding d-flex">
                    <div>
                      <FaRegEnvelopeOpen className={styles.footerFaIconSetup} />
                    </div>
                    <div>
                      <Link
                        href={
                          `mailto:${uiLayout?.blocks?.TH00025B66?.elements?.footerAddress?.emailAddress?.value}` ||
                          ""
                        }
                      >
                        <a target={"_blank"}>
                          <span className={styles.footerSecOne}>
                            {
                              uiLayout?.blocks?.TH00025B66?.elements
                                ?.footerAddress?.emailAddress?.value
                            }
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {uiLayout?.blocks?.TH00025B66?.elements?.footerSection2Heading &&
            uiLayout?.blocks?.TH00025B66?.elements?.footerSection2Child ? (
              <div className="col">
                <div className="">
                  <h6 className={"footer-heading " + styles.footerSecHeading}>
                    {
                      uiLayout?.blocks?.TH00025B66?.elements
                        ?.footerSection2Heading?.heading?.value
                    }
                  </h6>
                  <div className="list-unstyled footer-link mt-4">
                    {uiLayout?.blocks?.TH00025B66?.elements?.footerSection2Child?.value?.map(
                      (items, index) => {
                        return (
                          <div className="linkPadding pt-2 pb-2" key={index}>
                            <Link href={items?.sectionLabelLink?.value || ""}>
                              <div>
                                <div className={styles.footerSecTwo}>
                                  {" "}
                                  {items?.sectionLabel?.value}
                                </div>
                                <div className={styles.subFooterSecTwo}>
                                  {items?.sectionSubLabel?.value}
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {uiLayout?.blocks?.TH00025B66?.elements?.footerSection3Heading &&
            uiLayout?.blocks?.TH00025B66?.elements?.footerSection3Child ? (
              <div className="col">
                <div className="">
                  <h6 className={"footer-heading " + styles.footerSecHeading}>
                    {
                      uiLayout?.blocks?.TH00025B66?.elements
                        ?.footerSection3Heading?.heading?.value
                    }
                  </h6>
                  <div className="list-unstyled footer-link mt-4">
                    {uiLayout?.blocks?.TH00025B66?.elements?.footerSection3Child?.value?.map(
                      (items, index) => {
                        return (
                          <p className="linkPadding" key={index}>
                            <Link href={items?.sectionLabelLink?.value || ""}>
                              <span className={styles.iconVisible}>
                                <FaLongArrowAltRight
                                  className={
                                    isActive == `${items?.sectionLabel?.value}`
                                      ? `${styles.activeIcon}`
                                      : styles.hiddenIcon
                                  }
                                />
                                <span
                                  className={
                                    isActive == `${items?.sectionLabel?.value}`
                                      ? `${styles.active}`
                                      : `${styles.footerSecThree}`
                                  }
                                  onClick={() =>
                                    setActive(`${items?.sectionLabel?.value}`)
                                  }
                                >
                                  {" "}
                                  {items?.sectionLabel?.value}
                                </span>
                              </span>
                            </Link>
                          </p>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="col">
              <h6 className={"footer-heading " + styles.footerSecHeading}>
                Contact Form
              </h6>
              <form className="row g-3 mt-4">
                {isVisible && (
                  <div
                    className="alert alert-warning alert-dismissible"
                    role="alert"
                  >
                    <div>We’ll get back to you soon!</div>
                  </div>
                )}
                <div className="col-md-6">
                  <input
                    type="text"
                    className={"py-2 " + styles.footerFormInput}
                    id="inputEmail4"
                    placeholder="Full Name*"
                    value={inputValueName}
                    onChange={(e) => setInputValueName(e.target.value)}
                  />
                  <div className={styles.errors}>
                    {nameError ? nameError : ""}
                  </div>
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className={"py-2 " + styles.footerFormInput}
                    id="inputPassword4"
                    placeholder="Email*"
                    value={inputValueEmail}
                    onChange={(e) => setInputValueEmail(e.target.value)}
                  />
                  <div className={styles.errors}>
                    {mailError ? mailError : ""}
                  </div>
                </div>
                <div className="col-12">
                  <textarea
                    className={"py-2 " + styles.footerFormInput}
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Message*"
                    value={inputValueNote}
                    onChange={(e) => setInputValueNote(e.target.value)}
                  ></textarea>
                  <div className={styles.errors}>
                    {noteError ? noteError : ""}
                  </div>
                </div>

                <div className="col-12">
                  <button
                    type="button"
                    className={`${styles.HtenbuttonSetUp} ${styles.HtenBtnOne}`}
                    onClick={() => submits()}
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="d-flex justify-content-between m-3"
          style={{ gap: "10px" }}
        >
          <div className={"footer-alt mb-0 f-14 " + styles.footerEndSection}>
            {
              uiLayout?.blocks?.TH00025B67?.elements?.footerCopyright?.copyright
                ?.value
            }
          </div>
          <div className="mb-0 ">
            <ul className={"d-flex " + styles.listDot}>
              <li>
                <Link
                  href={
                    uiLayout?.blocks?.TH00025B67?.elements?.socialIcons
                      ?.facebookLink?.value || ""
                  }
                  target={"/blank"}
                >
                  <a className={styles.setFabIconColor}>
                    <FaFacebookF />
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={
                    uiLayout?.blocks?.TH00025B67?.elements?.socialIcons
                      ?.GooglePlusLink?.value || ""
                  }
                  target={"/blank"}
                >
                  <a className={" " + styles.setFabIconColor}>
                    <FaGooglePlusG />
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={
                    uiLayout?.blocks?.TH00025B67?.elements?.socialIcons
                      ?.twitterLink?.value || ""
                  }
                  target={"/blank"}
                >
                  <a className={" " + styles.setFabIconColor}>
                    <FaTwitter />
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={
                    uiLayout?.blocks?.TH00025B67?.elements?.socialIcons
                      ?.instagramLink?.value || ""
                  }
                  target={"/blank"}
                >
                  <a className={" " + styles.setFabIconColor}>
                    <FaInstagram />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
