import React, { useState } from "react";
import styles from "./contactForm.module.scss";
import { phoneValidation, emailValidation } from "../../validation/validation";
import { postHttpService } from "../../utilities/http-service-helper";

import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/material.css";
import { isValidPhoneNumber } from "libphonenumber-js";

export default function Contactform(props) {
  let HomeOneValue = {};
  if (props?.uiLayout && props?.uiLayout?.blockId) {
    HomeOneValue = props?.uiLayout;
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

  async function updateCacheForKey() {
    let payload = {
      pathParams: {},
      queryParams: {},
      data: {
        type: "P",
        name: inputValueName,
        designation: inputValueSub,
        email: inputValueEmail,
        phone: phoneNumber,
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
      // setInputValuePhone("");
      setInputValueNote("");
      setPhoneNumber("+91");
      setMailError("");
      setPhError("");
    } else {
    }
  }

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState();
  const [errorValMsg, setErrorValMsg] = useState();
  const [ctrycode, setCtrycode] = useState();

  function handleOnChange(phoneNumber, country) {
    setPhoneNumber(phoneNumber);
    setCtrycode(country.countryCode);
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

  return (
    <div className={"container-fluid " + styles.containerSetUp}>
      <div className={styles.formContentSet}>
        <div className={"text-center"}>
          <h2 className={styles.formTitle}>
            {HomeOneValue?.elements?.ContactForm?.FormTitle?.value}
          </h2>
          <h5 className={styles.formSubTitle}>
            {/* A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. */}
            {HomeOneValue?.elements?.ContactForm?.FormSubTitle?.value}
          </h5>
          <hr className={styles.hDivider} />
        </div>
        <div className={styles.contactFrmAlignSetup}>
          <form className="row g-3">
        
          <ToastContainer
          toastStyle={{ backgroundColor: "black", color: "white" }}
        />
            {isVisible && (
              <div
                className="alert alert-warning alert-dismissible"
                role="alert"
              >
                <div>
                  Thank You for contacting us... We’ll get back to you soon!
                </div>
              </div>
            )}

            <div className="col-md-6">
              <input
                type="text"
                className={"py-3 " + styles.contactFormInput}
                id="inputEmail4"
                placeholder="Full Name*"
                value={inputValueName}
                onChange={(e) => setInputValueName(e.target.value)}
              />
              <div className={styles.errors}>{nameError ? nameError : ""}</div>
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className={"py-3 " + styles.contactFormInput}
                id="inputPassword4"
                placeholder="Email*"
                value={inputValueEmail}
                onChange={(e) => setInputValueEmail(e.target.value)}
              />
              <div className={styles.errors}>{mailError ? mailError : ""}</div>
            </div>
            <div className="col-12 col-md-6">
              <input
                type="text"
                className={"py-3 " + styles.contactFormInput}
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
                className={"py-3 " + styles.contactFormInput}
                id="inputPassword4"
                placeholder="Phone Number*"
                value={inputValuePhone}
                onChange={(e) => setInputValuePhone(e.target.value)}
              /> */}
              <PhoneInput
               autoFormat={true}
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
                className={"py-3 " + styles.contactFormInput}
                id="exampleFormControlTextarea1"
                rows="6"
                placeholder="Message*"
                value={inputValueNote}
                onChange={(e) => setInputValueNote(e.target.value)}
              ></textarea>
              <div className={styles.errors}>{noteError ? noteError : ""}</div>
            </div>

            <div className="col-12 d-flex justify-content-center">
              <button
                type="button"
                className={`${styles.contactBtnSetUp} ${styles.contactBtn}`}
                onClick={() => submits()}
              >
                {HomeOneValue?.elements?.ContactForm?.FormButton?.value}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
