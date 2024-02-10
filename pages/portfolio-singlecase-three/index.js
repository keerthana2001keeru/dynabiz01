import React from 'react'
import SingleCaseBlkFive from '../../blocks/Portfolio/PortfolioSingleCaseBlkFive/singleCaseBlkFive'
import SingleCaseBlkSix from '../../blocks/Portfolio/PortfolioSingleCaseBlkSix/singleCaseBlkSix'
import OurCaseList from '../../layouts/OurCases/ourCaseList'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Accounting Advisory',
}
export default function PortfolioSinglecaseThree(props) {
    const userSettings = props?.uiSettings;
    return (
        <div className='container'>
            <section className='main'>
                <SingleCaseBlkSix />
                <SingleCaseBlkFive />
            </section>
        </div>
    )
}

PortfolioSinglecaseThree.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurCaseList setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </OurCaseList>
    )
}

