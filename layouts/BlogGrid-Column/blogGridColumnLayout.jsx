import React from 'react'
import BlogTopBanner from '../../components/BlogTopBanner/blogTopBanner'
import Footer from '../../components/footer'

export default function BlogGridColumnLayout(props) {
    return (
        <div>
            <BlogTopBanner setCmp={props?.setCmp} uiSettings={props?.uiSettings?.TH00025P20} />
            {props.children}
            <Footer uiSettings={props?.uiSettings?.TH00025P21}></Footer>
        </div>
    )
}
