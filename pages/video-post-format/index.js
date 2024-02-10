import React from 'react'
import BlogAuthorBlock from '../../blocks/BlogAuthorBlock/blogAuthorBlock'
import VideoPostFormatBlk from '../../blocks/VideoPostFormatBlk/videoPostFormatBlk'
import BlogSinglepostLayout from '../../layouts/Blog-Singlepost/blogSinglepostLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Video Post Format',
}
export default function VideoPostFormat(props) {
    const userSettings = props?.uiSettings;
    return (
        <div>
            <VideoPostFormatBlk />
            <div className='container-xxl'><BlogAuthorBlock /></div>
        </div>
    )
}
VideoPostFormat.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogSinglepostLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogSinglepostLayout>
    )
}

