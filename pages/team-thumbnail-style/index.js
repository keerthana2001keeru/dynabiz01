import React from 'react'
import PersonnelThumbBgClrCarousel from '../../blocks/PersonnelThumbBgClrCarousel/personnelThumbBgClrCarousel'
import PersonnelThumbBgImgCarousel from '../../blocks/PersonnelThumbBgImgCarousel/personnelThumbBgImgCarousel'
import PersonnelThumbnailColNospace from '../../blocks/PersonnelThumbnailColNospace/personnelThumbnailColNospace'
import PersonnelThumbnailColumn from '../../blocks/PersonnelThumbnailColumn/personnelThumbnailColumn'
import TeamPlaneThumbnailFrameLayout from '../../layouts/Team/teamPlaneThumbnailFrameLayout'
import { MapBlock } from '../../components/componets-map'
import { getHttpService } from '../../utilities/http-service-helper';

import Head from 'next/head'
export default function TeamThumbnailStyle(props) {
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P07?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P05?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | team thumbnail"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
        <div>
            {mainContent}
            {/* <PersonnelThumbnailColumn /> */}
            {/* <PersonnelThumbnailColNospace />
            <PersonnelThumbBgClrCarousel />
            <PersonnelThumbBgImgCarousel /> */}
        </div>
        </>
    )
}
TeamThumbnailStyle.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <TeamPlaneThumbnailFrameLayout uiSettings={userSetting}>
            {page}
        </TeamPlaneThumbnailFrameLayout>
    )
}

