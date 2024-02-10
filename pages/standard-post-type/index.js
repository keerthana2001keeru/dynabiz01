import React from 'react'
import BlogAuthorBlock from '../../blocks/BlogAuthorBlock/blogAuthorBlock'
import SimpleSetBlock from '../../blocks/SimpleSetBlock/simpleSetBlock'
import BlogSinglepostLayout from '../../layouts/Blog-Singlepost/blogSinglepostLayout'
import Head from 'next/head'
import { getHttpService } from '../../utilities/http-service-helper';

const topBanner =
{
    bgImage: '/uploads/pexels-photo-296886.jpeg',
    title: 'Standard Post Type',
}
export default function StandardPostType() {
    return (
        <div>
            <SimpleSetBlock />
            <div className='container-xxl'><BlogAuthorBlock /></div>
        </div>
    )
}
StandardPostType.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogSinglepostLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogSinglepostLayout>
    )
}
