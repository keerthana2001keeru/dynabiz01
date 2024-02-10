import React from 'react'
import OurServiceDetailLayout from '../../layouts/OurServiceDetail/ourServiceDetailLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import FaqsAndSecurities from '../../blocks/FaqAndSecurities/faqAndSecurities'
import { MapBlock } from '../../components/componets-map';
import Head from 'next/head'
const topBanner =
{
    bgImage: '/uploads/about-team-bg.jpg',
    title: 'Securities',
    subTitle: 'Be aware and be sure',
    overlay: false,
    contentSection: 'sectionSetupTwo'
}
export default function Security(props) {
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P24?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P24?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | Secuirities"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
            <section className='main'>

                <div>{mainContent}</div>

            </section>
        </>
    )
}
Security.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurServiceDetailLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </OurServiceDetailLayout>
    )
}

