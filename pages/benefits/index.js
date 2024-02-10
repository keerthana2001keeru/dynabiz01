import React from 'react'
import OurServiceDetailLayout from '../../layouts/OurServiceDetail/ourServiceDetailLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Benefits from '../../blocks/Benefits/benefits'
import { MapBlock } from '../../components/componets-map'

import Head from 'next/head'
export default function BenefitsChit(props) {
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P26?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P26?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | Benefits"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
            <section className='main'>

                <div>{mainContent} </div>

            </section>
        </>
    )
}
BenefitsChit.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurServiceDetailLayout uiSettings={userSetting}>
            {page}
        </OurServiceDetailLayout>
    )
}

