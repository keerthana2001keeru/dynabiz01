import React, { useState } from "react";
import styles from "./home.module.scss";
import { phoneValidation, emailValidation } from "../../validation/validation";
import { postHttpService } from "../../utilities/http-service-helper";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/material.css";
export default function HomeSectionTen(pageProps) {
  let HomeOneValue = {};
  if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
    HomeOneValue = pageProps?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }

  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueSub, setInputValueSub] = useState("");
  const [inputValuePhone, setInputValuePhone] = useState("");
  const [inputValueNote, setInputValueNote] = useState("");

  const [nameError, setNameError] = useState();
  const [mailError, setMailError] = useState();
  const [subError, setSubError] = useState();
  const [phError, setPhError] = useState();
  const [noteError, setNoteError] = useState();

  const [isVisible, setIsVisible] = useState(false);

  var phoneError;
  var mail;

  function submits() {
    if (inputValueEmail) {
      mail = emailValidation(inputValueEmail);
      if (mail != null) {
        setMailError(mail);
      } else {
        setMailError(null);
      }
    } else {
      setMailError("Enter A Valid Email Address");
    }

    if (!inputValueName) {
      setNameError("Full Name Required");
    } else {
      setNameError(null);
    }
    if (!inputValueSub) {
      setSubError("Please Enter Subject For This Enquery");
    } else {
      setSubError(null);
    }
    if (!inputValueNote) {
      setNoteError("Please Enter A Message For This Enquery");
    } else {
      setNoteError(null);
    }
    if (!isValid) {
      setPhError("Enter A Valid Phone");
    }
    if (!inputValueEmail && !phoneNumber) {
     // console.log("Error");
    } else if (
      isValid ||
      (inputValueEmail &&
        mail == null &&
        inputValueName &&
        inputValueSub &&
        inputValueNote)
    ) {
      updateCacheForKey();
    }
  }

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState();
  const [errorValMsg, setErrorValMsg] = useState();

  function handleOnChange(phoneNumber, country) {
    setPhoneNumber(phoneNumber);
    setIsValid(isValidPhoneNumber("+" + phoneNumber));
    if (isValid == false) {
      setErrorValMsg("Enter A Valid Phone");
    }
    if (country.countryCode == "in") {
      phoneError = phoneValidation(phoneNumber);
      if (phoneError != null) {
        setPhError(phoneError);
      } else {
        setPhError(null);
      }
    }
  }

  async function updateCacheForKey() {
    let payload = {
      pathParams: {},
      queryParams: {},
      data: {
        type: "P",
        name: inputValueName,
        designation: inputValueSub,
        email: inputValueEmail,
        phone: inputValuePhone,
        message: inputValueNote,
      },
    };
    const result = await postHttpService(
      "/useractions",
      payload,
      "captureLead"
    );
    if (result.status == 200 && result.data.status == 200) {

      toast.success("Thank You for contacting us... We'll get back to you soon!",{
        position: "top-center",
        autoClose: 3000,
      });
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      setInputValueName("");
      setInputValueEmail("");
      setInputValueSub("");
      setInputValueNote("");
      setPhoneNumber("+91");
      setMailError("");
      setPhError("");
    } else {
    }
  }

  return (
    <section className='sec-mar'>
    <div className={"container-fluid p-0 " + styles.hTenSetup}>
      <div className={"row " + styles.hTenAlignSetup}>
        <div className="col-12 col-md-6">
          <div className={"text-center " + styles.hTenContentSet}>
            <h2 className={styles.hTenTitle}>
              {HomeOneValue?.elements?.contactForm?.heading?.value}
            </h2>
            <hr className={styles.hTenDivider}></hr>
            <h5 className={styles.hTenDes} dangerouslySetInnerHTML={{
                            __html: HomeOneValue?.elements?.contactForm?.subContent?.value,
                          }}>
          
            </h5>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className={styles.hTenFrmAlignSetup}>
            <form className="row g-3">
              {/* {isVisible && (
                <div
                  className="alert alert-warning alert-dismissible"
                  role="alert"
                > */}

<ToastContainer
          toastStyle={{ backgroundColor: "black", color: "white" }}
        />

                  {/* <div>
                    Thank You for contacting us... We’ll get back to you soon!
                  </div> */}
                {/* </div>
              )} */}
              <div className="col-md-6">
                <input
                  type="text"
                  className={"py-3 " + styles.hTenFormInput}
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
                  className={"py-3 " + styles.hTenFormInput}
                  id="inputPassword4"
                  placeholder="Email*"
                  value={inputValueEmail}
                  onChange={(e) => setInputValueEmail(e.target.value)}
                />
                <div className={styles.errors}>
                  {mailError ? mailError : ""}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  className={"py-3 " + styles.hTenFormInput}
                  id="inputAddress"
                  placeholder="Subject*"
                  value={inputValueSub}
                  onChange={(e) => setInputValueSub(e.target.value)}
                />
                <div className={styles.errors}>{subError ? subError : ""}</div>
              </div>
              <div className="col-md-6">
                {/* <input
                  type="phone"
                  className={"py-3 " + styles.hTenFormInput}
                  id="inputPassword4"
                  placeholder="Phone Number"
                  value={inputValuePhone}
                  onChange={(e) => setInputValuePhone(e.target.value)}
                /> */}
                <PhoneInput
                  className="react-tel-inputs .form-control"
                  country={"in"}
                  value={phoneNumber}
                  onChange={handleOnChange}
                  isValid={isValid}
                  countryCodeEditable={false}
                  inputProps={{
                    name: "phone",
                    className:
                      "form-control w-100 h-100 rounded-0 py-3 bg-tranparent",
                    // className:"form-control",
                    required: true,
                    autoFocus: false,
                  }}
                />
                <div className={styles.errors}>
                  {phError ? phError : !isValid ? errorValMsg : ""}
                </div>
              </div>
              <div className="col-12">
                <textarea
                  className={"py-3 " + styles.hTenFormInput}
                  id="exampleFormControlTextarea1"
                  rows="6"
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
                  {HomeOneValue?.elements?.contactForm?.buttonText?.value}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
