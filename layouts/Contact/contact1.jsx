import React from "react";
import Footer from "../../components/footer";
import ContactTopBanner from "../../components/ContactTopBanner/contactTopBanner";
import MegaMenu from "../../components/Megamenu/megaMenu";
import HeaderTwo from "../../components/headerTwo";
import Head from "next/head";
import ContactTopBanner2 from "../../components/contactTopBanner2/contactTopBanner2";

export default function Contact1(props) {
  return (
    <>
      
       <ContactTopBanner2 setCmp={props?.setCmp} uiSettings={props?.uiSettings?.TH00025P20} /> 
      <div className="d-lg-none">
        <MegaMenu
          uiSettings={props?.uiSettings?.TH00025P20?.blocks?.TH00025B63}
          logo={props?.uiSettings?.TH00025P20?.blocks?.TH00025B64}
        ></MegaMenu>
      </div>
      <div className="defaultPositionHeader">
        <div style={{ zIndex: "2", position: "relative" }}>
          <HeaderTwo
            uiSettings={props?.uiSettings?.TH00025P20?.blocks?.TH00025B64}
          ></HeaderTwo>
        </div>
        <div className="d-lg-block d-none">
          <MegaMenu
            uiSettings={props?.uiSettings?.TH00025P20?.blocks?.TH00025B63}
            logo={props?.uiSettings?.TH00025P20?.blocks?.TH00025B64}
          ></MegaMenu>
        </div>
      </div>
      {props.children}
      <Footer uiSettings={props?.uiSettings?.TH00025P21}></Footer>
    </>
  );
}
