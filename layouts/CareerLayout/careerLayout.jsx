import React from 'react'
import AboutUsTopBanner from '../../components/AboutUsTopBanner/aboutUsTopBanner'
import Footer from '../../components/footer'

const topBanner =
{
    bgImage: '/uploads/about-career-bg.jpg',
    title: 'Work With The Best',
    subTitle: ' AND LEARN A LOT OF NEW THINGS'
}
export default function CareerLayout(props) {
    return (
        <div>
            <AboutUsTopBanner setCmp={topBanner} uiSettings={props?.uiSettings?.TH00025P20} />
            {props.children}
            <Footer uiSettings={props?.uiSettings?.TH00025P21}></Footer>
        </div>
    )
}
