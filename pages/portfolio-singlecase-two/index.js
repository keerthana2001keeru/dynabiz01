import React from 'react'
import SingleCaseBlockFour from '../../blocks/Portfolio/PortfolioSingleCaseBlkFour/singleCaseBlockFour'
import SinglecaseBlockThree from '../../blocks/Portfolio/PortfolioSingleCaseBlkThree/singlecaseBlockThree'
import OurCaseList from '../../layouts/OurCases/ourCaseList'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'

const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Family Asset Management',
}
export default function portfolio_singlecase_two(props) {
    const userSettings = props?.uiSettings;
    return (
        <div className='container'>
            <section className='main'>
                <SinglecaseBlockThree />
                <SingleCaseBlockFour />
            </section>
        </div>
    )
}

portfolio_singlecase_two.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurCaseList setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </OurCaseList>
    )
}

