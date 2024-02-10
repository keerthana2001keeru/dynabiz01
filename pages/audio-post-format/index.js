import React from 'react'
import AudioPostFormatBlk from '../../blocks/AudioPostFormatBlk/audioPostFormatBlk'
import BlogAuthorBlock from '../../blocks/BlogAuthorBlock/blogAuthorBlock'
import BlogSinglepostLayout from '../../layouts/Blog-Singlepost/blogSinglepostLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'

const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Audio Post Format',
}
export default function AudioPostFormat(props) {
    const userSettings = props?.uiSettings;
    return (
        <div>
            <AudioPostFormatBlk />
            <div className='container-xxl'><BlogAuthorBlock /></div>
        </div>
    )
}
AudioPostFormat.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogSinglepostLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogSinglepostLayout>
    )
}

