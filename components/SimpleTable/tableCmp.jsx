import React, { useRef, useState } from "react";
import styles from "./tableCmp.module.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import { phoneValidation, emailValidation } from "../../validation/validation";
import { postHttpService } from "../../utilities/http-service-helper";

function TableCmp(props) {
  const [plansId, setPlansId] = useState();
  const modalRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueNote, setInputValueNote] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState();
  const [errorValMsg, setErrorValMsg] = useState();
  const [ctrycode, setCtrycode] = useState();

  const [nameError, setNameError] = useState();
  const [mailError, setMailError] = useState();
  const [subError, setSubError] = useState();
  const [phError, setPhError] = useState();
  const [noteError, setNoteError] = useState();

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
    if (!inputValueNote) {
      setNoteError("Please Enter A Message For This Enquery");
    } else {
      setNoteError(null);
    }

    if (!isValid) {
      setPhError("Enter A Valid Phone");
    }

    if (!inputValueEmail && !phoneNumber) {
      console.log("Error");
    } else if (
      isValid ||
      (inputValueEmail && mail == null && inputValueName && inputValueNote)
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
        designation: "",
        email: inputValueEmail,
        phone: phoneNumber,
        message: inputValueNote,
        enquiry: {
          subject: plansId,
          message: inputValueNote,
        },
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

        const modal = modalRef.current;
        if (modal) {
          modal.classList.remove("show");
          modal.style.display = "none";
          modal.removeAttribute("aria-modal");
          modal.setAttribute("aria-hidden", true);
        }
        // Remove the modal-open class from the body element
        document.body.classList.remove("modal-open");

        // Remove the overlay element
        const overlay = document.querySelector(".modal-backdrop");
        if (overlay) {
          overlay.parentNode.removeChild(overlay);
        }
        const backdrop = document.querySelector(".modal-backdrop");
        if (backdrop) {
          backdrop.parentNode.removeChild(backdrop);
        }
        // Add the data-bs-toggle and data-bs-target attributes back to the button element
        const openModalButton = document.querySelector("#openModalButton");
        if (openModalButton) {
          openModalButton.setAttribute("data-bs-toggle", "modal");
          openModalButton.setAttribute("data-bs-target", "#staticBackdrop");
        }
      }, 4000);
      setPlansId("");
      setInputValueName("");
      setInputValueEmail("");
      setInputValueNote("");
      setPhoneNumber("");
      setMailError("");
      setPhError("");
    } else {
    }
  }

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

  function frmclr() {
    setMailError("");
    setPhError("");
    setNameError("");
    setNoteError("");
    setErrorValMsg("");
  }

  return (
    <>
      <div className="p-5">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              {/* <tr style={{ borderBottom: "transparent" }}>
              <th> </th>
              <th colspan="2" className={styles.tableMainTitle}>
                Followers
              </th>
              <th colspan="2" className={styles.tableMainTitle}>
                Email subscribers
              </th>
            </tr> */}
              <tr
                className={props?.headerSetup == true ? styles.headerSetup : ""}
                style={{ borderBottom: "transparent" }}
              >
                <th
                  className={
                    props?.headerSetup == true
                      ? styles.tableMainTitle
                      : "text-center " + styles.tableMainTitle
                  }
                >
                  {props?.setCmp?.plansTable?.HeadingOne?.value}
                </th>
                <th
                  className={
                    props?.headerSetup == true
                      ? styles.tableMainTitle
                      : "text-center " + styles.tableMainTitle
                  }
                >
                  {props?.setCmp?.plansTable?.HeadingTwo?.value}
                </th>
                <th
                  className={
                    props?.headerSetup == true
                      ? styles.tableMainTitle
                      : "text-center " + styles.tableMainTitle
                  }
                >
                  {props?.setCmp?.plansTable?.HeadingThree?.value}
                </th>
                <th
                  className={
                    props?.headerSetup == true
                      ? styles.tableMainTitle
                      : "text-center " + styles.tableMainTitle
                  }
                >
                  {props?.setCmp?.plansTable?.HeadingFour?.value}
                </th>
                <th
                  className={
                    props?.headerSetup == true
                      ? styles.tableMainTitle
                      : "text-center " + styles.tableMainTitle
                  }
                >
                  {props?.setCmp?.plansTable?.HeadingFive?.value}
                </th>
                <th
                  className={
                    props?.headerSetup == true
                      ? styles.tableMainTitle
                      : "text-center " + styles.tableMainTitle
                  }
                >
                  {props?.setCmp?.plansTable?.HeadingSix?.value}
                </th>
                <th
                  className={
                    props?.headerSetup == true
                      ? styles.tableMainTitle
                      : "text-center " + styles.tableMainTitle
                  }
                >
                  {props?.setCmp?.plansTable?.HeadingSeven?.value}
                </th>
                {props?.headerSetup == true ? (
                  ""
                ) : (
                  <th
                    className={
                      props?.headerSetup == true
                        ? styles.tableMainTitle
                        : "text-center " + styles.tableMainTitle
                    }
                  >
                    Action
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {props?.setCmp?.plansTableValue?.value?.map((item, index) => {
                return (
                  <tr id={index} className={styles.tableRow}>
                    <td
                      className={
                        props?.headerSetup == true
                          ? styles.tableContent
                          : "text-center " + styles.tableContent
                      }
                    >
                      {item?.HeadingOneValue?.value}
                    </td>
                    <td
                      className={
                        props?.headerSetup == true
                          ? styles.tableContent
                          : "text-center " + styles.tableContent
                      }
                    >
                      {item?.HeadingTwoValue?.value}
                    </td>
                    <td
                      className={
                        props?.headerSetup == true
                          ? styles.tableContent
                          : "text-center " + styles.tableContent
                      }
                    >
                      {item?.HeadingThreeValue?.value}
                    </td>
                    <td
                      className={
                        props?.headerSetup == true
                          ? styles.tableContent
                          : "text-center " + styles.tableContent
                      }
                    >
                      {item?.HeadingFourValue?.value}
                    </td>
                    <td
                      className={
                        props?.headerSetup == true
                          ? styles.tableContent
                          : "text-center " + styles.tableContent
                      }
                    >
                      {item?.HeadingFiveValue?.value}
                    </td>
                    <td
                      className={
                        props?.headerSetup == true
                          ? styles.tableContent
                          : "text-center " + styles.tableContent
                      }
                    >
                      {item?.HeadingSixValue?.value}
                    </td>
                    <td
                      className={
                        props?.headerSetup == true
                          ? styles.tableContent
                          : "text-center " + styles.tableContent
                      }
                    >
                      {item?.HeadingSevenValue?.value}
                    </td>
                    {props?.headerSetup == true ? (
                      ""
                    ) : (
                      <td className={styles.tableContent}>
                        <button
                          className={styles.enqBtn}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          id="openModalButton"
                          onClick={() =>
                            setPlansId(
                              item?.HeadingOneValue?.value +
                                "( #" +
                                item?.ChitIDValue?.value +
                                " )"
                            )
                          }
                        >
                          Enquire
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Enquire
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => frmclr()}
              ></button>
            </div>
            <div className="modal-body">
              {!isVisible && (
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className={"py-3 " + styles.disableFrmInput}
                      id="inputEmail4"
                      value={plansId}
                      disabled
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className={"py-3 " + styles.contactFormInput}
                      id="inputEmail4"
                      placeholder="Full Name*"
                      value={inputValueName}
                      onChange={(e) => setInputValueName(e.target.value)}
                    />
                    <div className={styles.errors}>
                      {nameError ? nameError : ""}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="email"
                      className={"py-3 " + styles.contactFormInput}
                      id="inputPassword4"
                      placeholder="Email*"
                      value={inputValueEmail}
                      onChange={(e) => setInputValueEmail(e.target.value)}
                    />
                    <div className={styles.errors}>
                      {mailError ? mailError : ""}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <PhoneInput
                      className="react-tel-inputs-enq"
                      country={"in"}
                      value={phoneNumber}
                      onChange={handleOnChange}
                      isValid={isValid}
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
                    <div className={styles.errors}>
                      {noteError ? noteError : ""}
                    </div>
                  </div>
                </div>
              )}

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
            </div>
            <div className="modal-footer">
              {!isVisible && (
                <button
                  type="button"
                  className={styles.enqSubmitBtn}
                  onClick={() => submits()}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableCmp;
