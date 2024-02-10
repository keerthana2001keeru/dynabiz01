import React from 'react'
import PortfolioColNospace from '../../blocks/Portfolio/PortfolioCol-Nospace/portfolioCol-Nospace'
import OurCaseList from '../../layouts/OurCases/ourCaseList'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'

const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Portfolio Modern 3 Columns',
}
export default function Cases_portfolio_nospace(props) {
    const userSettings = props?.uiSettings;
    return (
        <>
            <section className='main'>
                <div>
                    <PortfolioColNospace></PortfolioColNospace>
                    <PortfolioColNospace></PortfolioColNospace>
                    {/* <PortfolioColNospace></PortfolioColNospace> */}
                </div>
            </section>
        </>
    )
}
Cases_portfolio_nospace.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurCaseList setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </OurCaseList>
    )
}

