import React from 'react'
import OurServiceDetailLayout from '../../layouts/OurServiceDetail/ourServiceDetailLayout'
import Head from 'next/head'
import styles from '../../layouts/OurServiceDetail/ourServiceDetail.module.scss'
import Breadcrumb from '../../components/Breadcrumb/breadcrumb'
import ImageWrapText from '../../components/ImageWithText/imageWrapText'
import OurServiceCardSet from '../../blocks/OurServiceCardSet/ourServiceCardSet'
import AccordionWithPara from '../../blocks/AccordionWithPara/accordionWithPara'
import ServiceMemCardSet from '../../blocks/ServiceMemCardSet/serviceMemCardSet'
import OurServiceLeftSidebar from '../../blocks/OurServiceLeftSidebar/ourServiceLeftSidebar'
import { getHttpService } from '../../utilities/http-service-helper';
import TeamListLayout from '../../layouts/TeamListLayout/teamListLayout'

const topBanner =
{
    bgImage: '/uploads/about-team-bg.jpg',
    title: '',
    subTitle: '',
    overlay: false,
    contentSection: 'sectionSetup'
}
export default function ServiceDetails(props) {
    const userSettings = props?.uiSettings;
    return (
        <>
            <section className='main'>
                <Breadcrumb></Breadcrumb>
                <div className={styles.layoutSetUp}>
                    <div className='row'>
                        <div className='col-lg-3 order-2 order-lg-1'>
                            <OurServiceLeftSidebar></OurServiceLeftSidebar>
                        </div>
                        <div className={"col-lg-9 pb-5 order-1 order-lg-2 " + styles.subLayoutSetup}>
                            <ImageWrapText></ImageWrapText>
                            <OurServiceCardSet></OurServiceCardSet>
                            <AccordionWithPara></AccordionWithPara>
                            <ServiceMemCardSet></ServiceMemCardSet>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
ServiceDetails.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        // <OurServiceDetailLayout setCmp={topBanner} uiSettings={userSetting}>
        //     {page}
        // </OurServiceDetailLayout>
        <TeamListLayout uiSettings={userSetting}>
        {page}
    </TeamListLayout>
    )
}

