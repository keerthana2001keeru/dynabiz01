import React from "react";
import styles from "./faqs.module.scss";
import Footer from "../../components/footer";
import ContactTopBanner from "../../components/ContactTopBanner/contactTopBanner";
import MegaMenu from "../../components/Megamenu/megaMenu";
import HeaderTwo from "../../components/headerTwo";
import Head from "next/head";

export default function Faqs(props) {
  //console.log(props?.uiSettings?.TH00025P20?.blocks?.TH00025B73?.elements?.FavIconandText?.favicon?.value);
  return (
    <div>
      {/* <ContactTopBanner
        setCmp={props?.setCmp}
        uiSettings={props?.uiSettings?.TH00025P20}
      /> */}
      <Head>
        <title>
          {
            props?.uiSettings?.TH00025P20?.blocks?.TH00025B73?.elements
              ?.FavIconandText?.headtext?.value
          }
        </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href={
            props?.uiSettings?.TH00025P20?.blocks?.TH00025B73?.elements
              ?.FavIconandText?.favicon?.value
          }
        />
      </Head>
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
    </div>
  );
}
