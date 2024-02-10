import React from 'react'
import CareerblockOne from '../../blocks/CareerBlockOne/careerblockOne'
import CareerBlkTwoJobDetail from '../../blocks/CareerBlockTwoJobDetails/careerBlkTwoJobDetail'
import CareerLayout from '../../layouts/CareerLayout/careerLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
import { MapBlock } from '../../components/componets-map';
export default function Career(props) {
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P12?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P12?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | Career"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
        <div>
{mainContent}
            {/* <CareerblockOne /> */}
            <CareerBlkTwoJobDetail /> 
        </div>
        </>
    )
}
Career.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <CareerLayout uiSettings={userSetting}>
            {page}
        </CareerLayout>
    )
}

