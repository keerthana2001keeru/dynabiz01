import React from 'react'
import BlogCardsPostFormatBlock from '../../blocks/BlogCardsPostFormatBlock/blogCardsPostFormatBlock'
import BlogSinglepostLayout from '../../layouts/Blog-Singlepost/blogSinglepostLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Blog Columns with Post Format',
}
export default function BlogThreecolumnsWithFramepostFormat(props) {
    const userSettings = props?.uiSettings;
    return (
        <div className='container-xxl'>
            <BlogCardsPostFormatBlock />
        </div>
    )
}
BlogThreecolumnsWithFramepostFormat.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogSinglepostLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogSinglepostLayout>
    )
}


