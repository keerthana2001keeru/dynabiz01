import React from 'react'
import OurServiceListLayout from '../../layouts/OurService/ourServiceListLayout'
import OurServiceCard from '../../blocks/OurserviceCard/ourServiceCard'
import OurService from '../../blocks/Ourservice/ourService'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Our Services',
}
export default function Services(props) {
    const userSettings = props?.uiSettings;
    return (
        <>
            <section className='main'>
                <div>
                    <OurServiceCard></OurServiceCard>
                    <OurService></OurService>
                </div>
            </section>
        </>
    )
}
Services.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurServiceListLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </OurServiceListLayout>
    )
}

