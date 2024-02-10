import React from 'react'
import SecurityNormBlk from '../../blocks/SecurityNorms/securityNormBlk';
import { MapBlock } from '../../components/componets-map';
import OurServiceDetailLayout from '../../layouts/OurServiceDetail/ourServiceDetailLayout';
import { getHttpService } from '../../utilities/http-service-helper';

import Head from 'next/head'
const portfolio = [
    {
        img: '/uploads/pexels-photo-380769 (1).jpeg',
        title: ' STARTUP FUNDING',
        subTitle: 'sub one',
        des: 'something on it first ',
        position: 'left'
    },
    {
        img: '/uploads/pexels-photo-380769 (1).jpeg',
        title: ' seconf title',
        subTitle: 'sub two',
        des: 'something on it second',
        position: 'right'
    }
]
const topBanner =
{
    bgImage: '/uploads/about-team-bg.jpg',
    title: 'Security-Norms',
    subTitle: 'Be aware and be sure',
    overlay: false,
    contentSection: 'sectionSetupTwo'
}
export default function Security_norms(props) {
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P22?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P22?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | secuirity norms"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
        <div>
            <section className='main'>
                {mainContent}
            </section>
        </div>
        </>
    )
}
Security_norms.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurServiceDetailLayout uiSettings={userSetting}>
            {page}
        </OurServiceDetailLayout>
    )
}

