import React from 'react'
import ThumbnailSmallSidebarBlk from '../../blocks/Portfolio/PortfolioSmall-thumbnailSidebar/thumbnailSmallSidebarBlk'
import OurCaseList from '../../layouts/OurCases/ourCaseList'
import { getHttpService } from '../../utilities/http-service-helper';

import Head from 'next/head'
const portfolio = [
    {
        img: '/uploads/pexels-photo-380769 (1).jpeg',
        title: ' STARTUP FUNDING',
        subTitle: 'sub one',
        des: 'something on it first ',
        position: 'left'
    },
    {
        img: '/uploads/pexels-photo-380769 (1).jpeg',
        title: ' seconf title',
        subTitle: 'sub two',
        des: 'something on it second',
        position: 'left'
    }
]
const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Portfolio Left Small Thumbnail',
}
export default function Cases_portfolio_left_small_thumbnail(props) {
    const userSettings = props?.uiSettings;
    return (
        <div>
            <section className='main'>
                {portfolio?.map((item, index) => {
                    return (
                        <div key={index}>
                            <ThumbnailSmallSidebarBlk imgitem={item} />
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

Cases_portfolio_left_small_thumbnail.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <OurCaseList setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </OurCaseList>
    )
}

