import React from 'react'
import BlogAuthorBlock from '../../blocks/BlogAuthorBlock/blogAuthorBlock'
import LinkPostFormatBlk from '../../blocks/LinkPostFormatBlk/linkPostFormatBlk'
import BlogSinglepostLayout from '../../layouts/Blog-Singlepost/blogSinglepostLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Link Post Format',
}
export default function LinkPostFormat(props) {
    const userSettings = props?.uiSettings;
    return (
        <div>
            <LinkPostFormatBlk />
            <div className='container-xxl'><BlogAuthorBlock /></div>
        </div>
    )
}
LinkPostFormat.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogSinglepostLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogSinglepostLayout>
    )
}

