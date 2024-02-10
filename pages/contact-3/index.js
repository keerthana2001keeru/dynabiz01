import React from 'react'
import AddressInfo from '../../components/AddressInfo/addressInfo'
import Contactform from '../../components/ContactForm/contactform'
import Socialshare from '../../components/SocialShare/socialshare'
import MapsLoc from '../../components/Map/mapsLoc'
import ContactOne from '../../layouts/Contact/contactOne'
import { getHttpService } from '../../utilities/http-service-helper';
import { MapBlock } from '../../components/componets-map'
import Head from 'next/head'

const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Contact Us',
    subTitle: 'Get Intouch',
    overlay: true,
    contentSection: 'sectionSetup'
}
export default function ContactThree(props) {
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P11?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P11?.seo;
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
        <section className='main'>
            <div className="container-fluid p-0">
                <div className="row">
                    {/* <AddressInfo></AddressInfo>
                    <Contactform></Contactform>
                    <MapsLoc></MapsLoc>
                    <Socialshare></Socialshare> */}
                    {mainContent}
                </div>
            </div>
        </section>
        </>
    )
}
ContactThree.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <ContactOne setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </ContactOne>
    )
}

