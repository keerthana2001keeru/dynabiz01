import React from 'react'
import BlogAuthorBlock from '../../blocks/BlogAuthorBlock/blogAuthorBlock'
import GalleryPostFormatBlk from '../../blocks/GalleryPostFormatBlk/galleryPostFormatBlk'
import BlogSinglepostLayout from '../../layouts/Blog-Singlepost/blogSinglepostLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Gallery Post Format',
}
export default function GalleryPostFormat(props) {
    const userSettings = props?.uiSettings;
    return (
        <div>
            <GalleryPostFormatBlk />
            <div className='container-xxl'><BlogAuthorBlock /></div>
        </div>
    )
}
GalleryPostFormat.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogSinglepostLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogSinglepostLayout>
    )
}

