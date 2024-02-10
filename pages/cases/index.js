import React from 'react'
import PortfolioColumn from '../../blocks/Portfolio/Portfolio-column/portfolioColumn'
import OurCaseListTwo from '../../layouts/OurCases/ourCaseListTwo'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'

const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Portfolio 4 Columns',
}
export default function Cases(props) {
    const userSettings = props?.uiSettings;
    return (
        <>
            <section className='main'>
                <div>
                    <PortfolioColumn></PortfolioColumn>
                    <PortfolioColumn></PortfolioColumn>
                    {/* <PortfolioColumn></PortfolioColumn> */}
                </div>
            </section>
        </>
    )
}
Cases.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurCaseListTwo setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </OurCaseListTwo>
    )
}

