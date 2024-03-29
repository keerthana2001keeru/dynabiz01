import React from 'react'
import Footer from '../../components/footer'
import TeamTopBanner from '../../components/TeamTopBanner/teamTopBanner'


const topBanner =
{
    bgImage: '/uploads/page-title-background.jpg',
    title: 'Team / Plain Style',
}
export default function TeamPlaneThumbnailFrameLayout(props) {
    return (
        <div>
            <TeamTopBanner setCmp={topBanner} uiSettings={props?.uiSettings?.TH00025P20} />
            {props.children}
            <Footer uiSettings={props?.uiSettings?.TH00025P21}></Footer>
        </div>
    )
}
