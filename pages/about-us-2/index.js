import React from 'react'
import { MapBlock } from '../../components/componets-map'
import SimpleSliderBlk from '../../blocks/SimpleSliderBlock/simpleSliderBlk'
import { getHttpService } from '../../utilities/http-service-helper';
import OurServiceDetailLayout from '../../layouts/OurServiceDetail/ourServiceDetailLayout';
import Head from 'next/head';

const topBanner =
{
    bgImage: '/uploads/about-team-bg.jpg',
    title: 'About Us',
    subTitle: 'WE PROVIDE THE SOLUTION FOR ASSET MANAGEMENT',
    overlay: true,
    contentSection: 'sectionSetupTwo'
}
export default function AboutUsTwo(props) {
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P03?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P03?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | About us"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
        <div>
            {mainContent}
            {/* <TwoColumnTextBlock /> */}
            {/* <TeamSuccessStoryBlk />
            <IconContentCrdBlock /> */}
            {/* <FixedImgWithTextRLblock /> */}
            {/* <SimpleSliderBlk /> */}
        </div>
        </>
    )
}
AboutUsTwo.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurServiceDetailLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </OurServiceDetailLayout>
    )
}

