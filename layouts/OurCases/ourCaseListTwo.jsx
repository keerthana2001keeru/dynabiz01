import React from 'react'
import Footer from '../../components/footer'
import BlogTopBanner from '../../components/BlogTopBanner/blogTopBanner'
import TopbarLinks from '../../components/TopbarLinks/topbarLinks'

export default function OurCaseListTwo(props) {
    return (
        <div>
            <BlogTopBanner setCmp={props?.setCmp} uiSettings={props?.uiSettings?.TH00025P20} />
            <TopbarLinks></TopbarLinks>
            {props.children}
            <Footer uiSettings={props?.uiSettings?.TH00025P21}></Footer>
        </div>
    )
}
