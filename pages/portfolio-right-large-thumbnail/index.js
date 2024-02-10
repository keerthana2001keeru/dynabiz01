import React from 'react'
import PortfolioSideThumnail from '../../blocks/Portfolio/PortfolioSide-Thumbnail/portfolioSideThumnail'
import OurCaseList from '../../layouts/OurCases/ourCaseList'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
const portfolio = [
    {
        img: '/uploads/pexels-photo-380769 (1).jpeg',
        title: ' STARTUP FUNDING',
        subTitle: 'sub one',
        des: 'something on it first ',
        position: 'right'
    },
    {
        img: '/uploads/pexels-photo-380769 (1).jpeg',
        title: ' seconf title',
        subTitle: 'sub two',
        des: 'something on it second',
        position: 'right'
    }
]
const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Portfolio Right Large Thumbnail',
}
export default function Cases_portfolio_rightlarge_thumbnail(props) {
    const userSettings = props?.uiSettings;
    return (
        <div>
            <div>
                <section className='main'>
                    {portfolio?.map((item, index) => {
                        return (
                            <div key={index}>
                                <PortfolioSideThumnail imgitem={item} />
                            </div>
                        )
                    })}
                </section>
            </div>
        </div>
    )
}

Cases_portfolio_rightlarge_thumbnail.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurCaseList setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </OurCaseList>
    )
}

