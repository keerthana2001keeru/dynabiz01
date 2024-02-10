import Contactform from '../../components/ContactForm/contactform'
import Socialshare from '../../components/SocialShare/socialshare'
import React from 'react'
import ContactOne from '../../layouts/Contact/contactOne'
import MapaddressBlock from '../../blocks/MapaddressBlock/mapaddressBlock'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
import { MapBlock } from '../../components/componets-map'
import Contact1 from '../../layouts/Contact/contact1'
import CareerLayout from '../../layouts/CareerLayout/careerLayout'
import TeamListLayout from '../../layouts/TeamListLayout/teamListLayout'

// const topBanner =
// {
//     bgImage: '/uploads/about-team-bg.jpg',
//     title: 'Contact Us',
//     subTitle: 'Get Intouch',
//     overlay: false,
//     contentSection: 'sectionSetup'
// }
export default function Contact(props) {
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P09?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P09?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | Contact"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
        <div>
            <section className='main'>
                <div className="container-fluid p-0">
                    <div className="row p-0 m-0">
                       {mainContent} 
                        {/* <MapaddressBlock/> */}
                       
                        {/* <Contactform/>  */}
                        {/* <Socialshare/> */}
                       
                       
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}
Contact.getLayout = function getLayout(page) {
   const userSetting = page?.props?.uiSettings;
    return (
    //      <Contact1 setCmp={topBanner} uiSettings={userSetting}>
    //        {page}
    //    </Contact1>
        <TeamListLayout uiSettings={userSetting}>
        {page}
    </TeamListLayout>
    )
}

