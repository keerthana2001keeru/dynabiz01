import React from 'react'
import AddressWithMap from '../../components/AddressWithMap/addressWithMap'
import Contactform from '../../components/ContactForm/contactform'
import MapsLoc from '../../components/Map/mapsLoc'
import Socialshare from '../../components/SocialShare/socialshare'
import ContactOne from '../../layouts/Contact/contactOne'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
import TeamListLayout from '../../layouts/TeamListLayout/teamListLayout'
import { MapBlock } from '../../components/componets-map'
const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Contact Us',
    subTitle: 'Get Intouch',
    overlay: true,
    contentSection: 'sectionSetup'
}
export default function ContactTwo(props) {
    const userSettings = props?.uiSettings;

    const mainContent = userSettings?.TH00025P10?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P10?.seo;
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
            <div className="container-xxl p-0">
                <div className="row p-5">
                    <div className='col-12 col-md-8'>
                        <Contactform/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <AddressWithMap />
                    </div>

                </div>
                <Socialshare/>
            </div>
        </section>
        </>
    )
}
ContactTwo.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        // <ContactOne setCmp={topBanner} uiSettings={userSetting}>
        //     {page}
        // </ContactOne>
          <TeamListLayout uiSettings={userSetting}>
          {page}
      </TeamListLayout>
    )
}

