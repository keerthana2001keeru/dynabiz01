import React from 'react'
import BlogAuthorBlock from '../../blocks/BlogAuthorBlock/blogAuthorBlock'
import QuotePostFormatBlk from '../../blocks/QuotePostFormatBlk/quotePostFormatBlk'
import BlogSinglepostLayout from '../../layouts/Blog-Singlepost/blogSinglepostLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Quote Post Format',
}
export default function QuotePostFormat(props) {
    const userSettings = props?.uiSettings;
    return (
        <div>
            <QuotePostFormatBlk />
            <div className='container-xxl'><BlogAuthorBlock /></div>
        </div>
    )
}
QuotePostFormat.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogSinglepostLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogSinglepostLayout>
    )
}

