import React from 'react'
import FixedImgWithContentRight from '../../blocks/FixedImgWithContentRight/fixedImgWithContentRight'
import TeamListCardCarouselBlock from '../../blocks/TeamListCardCarouselBlock/teamListCardCarouselBlock'
import TeamListIconTextBlock from '../../blocks/TeamListIconTextBlock/teamListIconTextBlock'
import TeamSuccessStoryBlk from '../../blocks/TeamSuccessStoryBlock/teamSuccessStoryBlk'
import TitleWithUlListContentBGBlk from '../../blocks/TitleWithUlListContentBGBlk/titleWithUlListContentBGBlk'
import TwoColumnTextBlock from '../../blocks/TwoColumnTextBlock/twoColumnTextBlock'
import TeamListLayout from '../../layouts/TeamListLayout/teamListLayout'
import { MapBlock } from '../../components/componets-map'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'

export default function AboutUs(props) {
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P02?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P02?.seo;
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


            {/* TeamListIconTextBlock,
            TwoColumnTextBlock,
            TeamListCardCarouselBlock,
            FixedImgWithContentRight,
            TeamSuccessStoryBlk,
            TitleWithUlListContentBGBlk */}
        </div>
        </>
    )
}
AboutUs.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <TeamListLayout uiSettings={userSetting}>
            {page}
        </TeamListLayout>
    )
}

