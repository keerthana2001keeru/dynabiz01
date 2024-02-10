import React from 'react'
import OurServiceDetailLayout from '../../layouts/OurServiceDetail/ourServiceDetailLayout'
//import styles from '../layouts/OurServiceDetail/ourServiceDetail.module.scss'
import Breadcrumb from '../../components/Breadcrumb/breadcrumb'
import ImageWrapText from '../../components/ImageWithText/imageWrapText'
import OurServiceCardSet from '../../blocks/OurServiceCardSet/ourServiceCardSet'
import AccordionWithPara from '../../blocks/AccordionWithPara/accordionWithPara'
import ServiceMemCardSet from '../../blocks/ServiceMemCardSet/serviceMemCardSet'
import OurServiceLeftSidebar from '../../blocks/OurServiceLeftSidebar/ourServiceLeftSidebar'
import { getHttpService } from '../../utilities/http-service-helper';
import PlansTable from '../../blocks/PlansTable/plansTable'
import { MapBlock } from '../../components/componets-map'
import Head from 'next/head'
const topBanner =
{
    bgImage: '/uploads/about-team-bg.jpg',
    title: 'At all times have a helping hand',
    subTitle: '',
    overlay: false,
    contentSection: 'sectionSetupTwo'
}
export default function Plans(props) {
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P25?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P25?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | PLAN"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
            <section className='main'>

                <div >{mainContent} </div>

            </section>
        </>
    )
}
Plans.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurServiceDetailLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </OurServiceDetailLayout>
    )
}

