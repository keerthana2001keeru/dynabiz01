import React from 'react'
import MaintenancePage from '../../components/Maintenance/maintenance'
import SimplePageLayout from '../../layouts/simplePageLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
export default function Maintenance(props) {
    const userSettings = props?.uiSettings?.TH00025P14?.blocks;
    const seoValues = userSettings?.TH00025P14?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | Maintenance"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
        <div>
            <section className='main'>
                <MaintenancePage setCmp={userSettings} />
            </section>
        </div>
        </>
    )
}
Maintenance.getLayout = function getLayout(page) {
    return (
        <SimplePageLayout>
            {page}
        </SimplePageLayout>
    )
}

