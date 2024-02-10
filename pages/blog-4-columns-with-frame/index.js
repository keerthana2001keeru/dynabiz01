import React from 'react'
import BlogColumnWithFrame from '../../blocks/BlogColumnWithFrame/blogColumnWithFrame'
import BlogSinglepostLayout from '../../layouts/Blog-Singlepost/blogSinglepostLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'

const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Blog 4 Column With Frame',
}
export default function blogFourcolumnsWithFrame(props) {
    const userSettings = props?.uiSettings;
    return (
        <div className='container-xxl'>
            <BlogColumnWithFrame />
        </div>
    )
}
blogFourcolumnsWithFrame.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogSinglepostLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogSinglepostLayout>
    )
}
