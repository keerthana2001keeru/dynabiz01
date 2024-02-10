import React from 'react'
import PortfolioModernNospace from '../../blocks/Portfolio/PortfolioModern-nospace/portfolioModernNospace'
import OurCaseList from '../../layouts/OurCases/ourCaseList'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'

const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Portfolio Modern 3 Columns No Space',
}
export default function Caese_portfolio_modern_nospace(props) {
    const userSettings = props?.uiSettings;
    return (
        <>
            <section className='main'>
                <div>
                    <PortfolioModernNospace />
                    <PortfolioModernNospace />
                </div>
            </section>
        </>
    )
}
Caese_portfolio_modern_nospace.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurCaseList setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </OurCaseList>
    )
}

