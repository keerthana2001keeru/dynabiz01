import Head from 'next/head'
import Image from 'next/image'
// import Header from '../components/headerOne'
// import HomeSectionOne from '../components/Home/homeSectionOne'
// import HomeSectionTwo from '../components/Home/homeSectionTwo'
// import HomeSectionThree from '../components/Home/homeSectionThree'
// import HomeSectionFour from '../components/Home/homeSectionFour'
// import HomeSectionFive from '../components/Home/homeSectionFive'
// import HomeSectionSix from '../components/Home/homeSectionSix'
// import HomeSectionSeven from '../components/Home/homeSectionSeven'
// import HomeSectionEight from '../components/Home/homeSectionEight'
// import HomeSectionNine from '../components/Home/homeSectionNine'
// import HomeSectionTen from '../components/Home/homeSectionTen'
import Layouts from '../layouts/Home/layouts'
import { getHttpService } from '../utilities/http-service-helper';

import { MapBlock } from '../components/componets-map'


export default function Home(props) {
  const userSettings = props?.uiSettings;

  const mainContent = userSettings?.TH00025P01?.blocks?.map(block => {
    if (block?.isBlockEnabled === true) {
      return (MapBlock(block.blockId, block));
    }
  });
  const seoValues = userSettings?.TH00025P01?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | home"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
    <div>
      {mainContent}
      {/* <ScrollUpButton
        AnimationDuration={20}
      /> */}
      {/* <HomeSectionOne></HomeSectionOne> */}
      {/* <HomeSectionTwo></HomeSectionTwo>
      <HomeSectionThree></HomeSectionThree>
      <HomeSectionFour></HomeSectionFour>
      <HomeSectionFive></HomeSectionFive>
      <HomeSectionSix></HomeSectionSix>
      <HomeSectionSeven></HomeSectionSeven>
      <HomeSectionEight></HomeSectionEight>
      <HomeSectionNine></HomeSectionNine>
      <HomeSectionTen></HomeSectionTen> */}
    </div>
    </>
  )
}
Home.getLayout = function getLayout(page) {
  const userSetting = page?.props?.uiSettings;
  return (
    <Layouts uiSettings={userSetting}>
      {page}
    </Layouts>
  )
}

// export default function Home(props) {

//   return (
//     <Layout uiSettings={userSettings}>
//       {mainContent}
//     </Layout>
//   );
// }
Home.layout = "L1";
// export async function getStaticProps() {
//   let uiSettings = {};
//   if (process.env.previewEnabled == "Y") {
    
//     uiSettings = require("../public/preview.json");

//   } else {
//     if (process.env.demoEnabled == "N") {
      
//       uiSettings = require("../public/mapping.json");
//     } else {
//       uiSettings = require("../public/config.json");
//     }
//   }
// }