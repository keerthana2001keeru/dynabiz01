import React from 'react'
import AsidePostFormatBlk from '../../blocks/AsidePostFormatBlk/asidePostFormatBlk'
import BlogAuthorBlock from '../../blocks/BlogAuthorBlock/blogAuthorBlock'
import BlogSinglepostLayout from '../../layouts/Blog-Singlepost/blogSinglepostLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'

const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Aside Post Format',
}
export default function AsidePostFormat(props) {
    const userSettings = props?.uiSettings;
    return (
        <div>
            <AsidePostFormatBlk />
            <div className='container-xxl '><BlogAuthorBlock /></div>
        </div>
    )
}
AsidePostFormat.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogSinglepostLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogSinglepostLayout>
    )
}

