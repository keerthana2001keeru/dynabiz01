import React from 'react'
import AboutUsThreeBlk from '../../blocks/AboutUsThreeBlk/aboutUsThreeBlk'
import AboutUsThreeBlkTwo from '../../blocks/AboutUsThreeBlkTwo/aboutUsThreeBlkTwo'
import BlogCustomBlockTwo from '../../blocks/BlogCustomBlockTwo/blogCustomBlockTwo'
import ProgressBarWithConentBlk from '../../blocks/ProgressBarWithConentBlock/progressBarWithConentBlk'
import TeamListIconTextBlock from '../../blocks/TeamListIconTextBlock/teamListIconTextBlock'
import TwoColumnTextBlock from '../../blocks/TwoColumnTextBlock/twoColumnTextBlock'
import TeamListLayout from '../../layouts/TeamListLayout/teamListLayout'
import { MapBlock } from '../../components/componets-map'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
const blogImgblkTwo = [
    {
        bgImg: '/uploads/about-3-bg-2.jpg',
        heading: '',
        mainHeading: 'Read The Story Behind Our Success',
        notes: 'We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement',
        overlayCls: '',
        bgSize: 'bgImageTwo',
        mainHeadingStyle: 'mainHeadingTwo'
    }
]
export default function AboutUsThree(props) {
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P04?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    //console.log(userSettings)
    const seoValues = userSettings?.TH00025P04?.seo;
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
            {/* <TeamListIconTextBlock /> */}
            {/* <ProgressBarWithConentBlk /> */}
            {/* <AboutUsThreeBlk /> */}
            {/* <BlogCustomBlockTwo setData={blogImgblkTwo} /> */}
            {/* <AboutUsThreeBlkTwo /> */}
        </div>
        </>
    )
}
AboutUsThree.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <TeamListLayout uiSettings={userSetting}>
            {page}
        </TeamListLayout>
    )
}

