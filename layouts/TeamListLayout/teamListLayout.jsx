import React from 'react'
import AboutUsTopBanner from '../../components/AboutUsTopBanner/aboutUsTopBanner'
import Footer from '../../components/footer'

const topBanner =
{
    bgImage: '/uploads/about-team-bg.jpg',
    title: ' About Us',
    subTitle: ' WE PROVIDE THE SOLUTION FOR ASSET MANAGEMENT'
}

export default function TeamListLayout(props) {
    return (
        <div>
            <AboutUsTopBanner setCmp={topBanner} uiSettings={props?.uiSettings?.TH00025P20} />
            {props.children}
            <Footer uiSettings={props?.uiSettings?.TH00025P21} ></Footer>
        </div>
    )
}
