import React from "react";
import Footer from "../../components/footer";
import Modal from "../../components/Modal/modal";
import HeaderMain from "../../components/headerMain";
import HeaderOne from "../../components/headerOne";
import styles from "./layoutStyle.module.scss";
import { FaSearch } from "react-icons/fa";
import HeaderTwo from "../../components/headerTwo";
import MegaMenu from "../../components/Megamenu/megaMenu";
import Head from "next/head";

export default function Layouts(props) {
 // console.log(props);
  return (
    <>
      
      <HeaderOne
        uiSettings={props?.uiSettings?.TH00025P20?.blocks?.TH00025B65}
      ></HeaderOne>
      <div className="defaultPositionHeader">
        <HeaderTwo
          uiSettings={props?.uiSettings?.TH00025P20?.blocks?.TH00025B64}
        ></HeaderTwo>
        <MegaMenu
          uiSettings={props?.uiSettings?.TH00025P20?.blocks?.TH00025B63}
          logo={props?.uiSettings?.TH00025P20?.blocks?.TH00025B64}
        ></MegaMenu>
      </div>

      {/* <HeaderMain
        uiSettings={props?.uiSettings?.TH00025P20}
        // headerMain={props?.uiSettings?.TH00025P01}
      ></HeaderMain> */}
      {props.children}
     <Footer uiSettings={props?.uiSettings?.TH00025P21}></Footer> 
      <Modal id={"exampleModal"}>
        <div className="modal-body mx-auto">
          <div className="d-flex">
            <form className="row g-3">
              <div className="col">
                <input
                  type="text"
                  className={"py-3 " + styles.contactFormInput}
                  placeholder="Search ..."
                />
              </div>
            </form>
            <FaSearch className={styles.iconSetup} style={{ color: "$color_text_light_one" }} />
          </div>
        </div>
      </Modal>
    </>
  );
}
