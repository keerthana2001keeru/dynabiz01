import React from 'react'
import PortfolioColFrame from '../../blocks/Portfolio/Portfolio-Col-Frame/portfolio-Col-Frame'
import OurCaseListTwo from '../../layouts/OurCases/ourCaseListTwo'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Portfolio 3 Columns With Frame',
}
export default function Cases_portfolio_frame(props) {
    const userSettings = props?.uiSettings;
    return (
        <>
            <section className='main'>
                <div>
                    <PortfolioColFrame></PortfolioColFrame>
                    <PortfolioColFrame></PortfolioColFrame>
                    <PortfolioColFrame></PortfolioColFrame>

                </div>
            </section>

        </>
    )
}
Cases_portfolio_frame.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurCaseListTwo setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </OurCaseListTwo>
    )
}

