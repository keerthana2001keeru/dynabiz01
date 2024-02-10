import React from 'react'
import PriceTableBlkOne from '../../blocks/PriceTableBlkOne/priceTableBlkOne'
import TeamPlaneThumbnailFrameLayout from '../../layouts/Team/teamPlaneThumbnailFrameLayout'
import { getHttpService } from '../../utilities/http-service-helper';

import Head from 'next/head'
import { MapBlock } from '../../components/componets-map';
const priceTableSetup = [
    {
        bgImage: '',
        smallTitleStyle: 'smallTitle',
        titleStyle: 'title',
        contentStyle: 'contentsetup'
    },
    {
        bgImage: '/uploads/page-title-background.jpg',
        smallTitleStyle: 'smallTitleTwo',
        titleStyle: 'titleTwo',
        contentStyle: 'contentsetupTwo'
    }
]
export default function PriceTable(props) {



    const userSettings = props?.uiSettings;

    const mainContent = userSettings?.TH00025P13?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P13?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | Price table"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>


 
        <div>
            {mainContent}
           {priceTableSetup.map((item, index) => { 
                return ( 
                    <PriceTableBlkOne setCmp={item} key={index} />
                ) 
          })} 
        </div>
        </>
    )
}
PriceTable.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <TeamPlaneThumbnailFrameLayout uiSettings={userSetting}>
            {page}
        </TeamPlaneThumbnailFrameLayout>
    )
}

