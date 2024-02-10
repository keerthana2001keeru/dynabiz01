import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Home.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// If you want you can use SCSS instead of css
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'react-toastify/dist/ReactToastify.css';


import { useEffect } from "react";
import Head from 'next/head';
import CookieBanner from '../blocks/cookies/CookieBanner';


function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  //var title = pageProps?.uiSettings?.TH00137C03 ?.blocks?.TH00137C03B02?.elements?.webTitle?.title?.value;
  //var loader = pageProps?.uiSettings?.TH00137C03 ?.blocks?.TH00137C03B03?.elements?.animationimgLoader?.image?.value;

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  let uiSettings = {};
  if (process.env.previewEnabled == "Y") {
    
    uiSettings = require("../public/preview.json");

  } else {
    if (process.env.demoEnabled == "N") {
      
      uiSettings = require("../public/mapping.json");
    } else {
      uiSettings = require("../public/config.json");
    }
  }
  let favIcon = process?.env?.siteIdentity?.favIcon;

  if (favIcon == "") {
    favIcon = process.env.basePath + '/assets/img/sm-logo.svg';
  }
console.log(uiSettings)
  return (
    <>
        
    {getLayout(<Component {...pageProps}  uiSettings={uiSettings}
    />)}
      <Head>
          <link rel="icon" type="image/jpg" href={favIcon}></link>
          {/* <title>{process.env.siteIdentity.siteName ? process.env.siteIdentity.siteName : "Lumina"}</title> */}
         
          {/* <meta name="description"
          content={process.env.siteIdentity.siteDescription ? process.env.siteIdentity.siteDescription : "Lumina is an Software development company. We excel at digital product engineering. We solve complex business challenges through agility and innovation. We call it interpreting imaginations digitally. We specialize on Cloud Computing, DevOps, Infrastructure Services and Kubernetes solutions predominantly to provide best in class IT services to our clients. "} />
          <meta name="keywords"
          content="Lumina, CLOUD CONSULTING, CONTAINER SOLUTIONS, DEVOPS CONSULTING, INFRASTRUCTURE SERVICES, AUTOMATION TESTING, RECRUITMENT SERVICES" /> */}
        
         
          </Head>
          <CookieBanner/>
    </>
  )
}

export default MyApp
