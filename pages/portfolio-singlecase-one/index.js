import React from 'react'
import SinglecaseBlockOne from '../../blocks/Portfolio/PortfolioSingleCaseBlkOne/singlecaseBlockOne'
import SinglecaseBlockTwo from '../../blocks/Portfolio/PortfolioSingleCaseBlkTwo/singlecaseBlockTwo'
import OurCaseList from '../../layouts/OurCases/ourCaseList'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Startup Funding',
}
export default function Portfolio_singlecase_one(props) {
    const userSettings = props?.uiSettings;
    return (
        <div className='container'>
            <section className='main'>
                <SinglecaseBlockOne />
                <SinglecaseBlockTwo />
            </section>
        </div>
    )
}
Portfolio_singlecase_one.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurCaseList setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </OurCaseList>
    )
}
