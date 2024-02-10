import React from 'react'
import ComingSoonPage from '../../components/ComingSoon/comingSoon'
import SimplePageLayout from '../../layouts/simplePageLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
export default function ComingSoon(props) {
    const userSettings = props?.uiSettings?.TH00025P15?.blocks;


   const seoValues = userSettings?.TH00025P15?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | Coming-soon"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
        <div>
            <ComingSoonPage setCmp={userSettings} />
        </div>
        </>
    )
}
ComingSoon.getLayout = function getLayout(page) {
    return (
        <SimplePageLayout>
            {page}
        </SimplePageLayout>
    )
}

