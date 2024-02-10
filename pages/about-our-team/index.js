import React from 'react'
import TeamHiringSectionBlk from '../../blocks/TeamHiringSectionBlock/teamHiringSectionBlk'
import TeamListIconTextBlock from '../../blocks/TeamListIconTextBlock/teamListIconTextBlock'
import TeamListMemberCrdBlock from '../../blocks/TeamListMemberCrdBlock/teamListMemberCrdBlock'
import TeamSuccessStoryBlk from '../../blocks/TeamSuccessStoryBlock/teamSuccessStoryBlk'
import TeamListLayout from '../../layouts/TeamListLayout/teamListLayout'
import { MapBlock } from '../../components/componets-map'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'


export default function AboutOurteam(props) {
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P05?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P05?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | About our team"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
        <div>
            {mainContent}
            {/* <TeamListMemberCrdBlock /> */}
            {/* <TeamListIconTextBlock /> */}
            {/* <TeamSuccessStoryBlk /> */}
            {/* <TeamHiringSectionBlk /> */}
        </div>
        </>
    )
}
AboutOurteam.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <TeamListLayout uiSettings={userSetting}>
            {page}
        </TeamListLayout>
    )
}

