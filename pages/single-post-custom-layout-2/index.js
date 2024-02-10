import React from 'react'
import BlogAuthorBlock from '../../blocks/BlogAuthorBlock/blogAuthorBlock'
import BlogCustomBlockFive from '../../blocks/BlogCustomBlockFive/blogCustomBlockFive'
import BlogCustomBlockFour from '../../blocks/BlogCustomBlockFour/blogCustomBlockFour'
import BlogCustomBlockSix from '../../blocks/BlogCustomBlockSix/blogCustomBlockSix'
import BlogCustomBlockTwo from '../../blocks/BlogCustomBlockTwo/blogCustomBlockTwo'
import BlogSinglepostLayout from '../../layouts/Blog-Singlepost/blogSinglepostLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'

const blogImgblkTwo = [
    {
        bgImg: '/uploads/pexels-photo-374018.jpeg',
        heading: '',
        mainHeading: '',
        notes: '',
        overlayCls: '',
        bgSize: 'bgImage'
    }
]

const topBanner =
{
    bgImage: '/uploads/pexels-photo-296886.jpeg',
    title: ' Separated they live in Bookmarks',
}
export default function SinglepostCustomLayoutTwo(props) {
    const userSettings = props?.uiSettings;
    return (
        <>
            <section className='main'>
                <div>
                    <BlogCustomBlockFour />
                    <BlogCustomBlockTwo setData={blogImgblkTwo} />
                    <BlogCustomBlockFive />
                    <BlogCustomBlockSix />
                    <div className='container-xxl'> <BlogAuthorBlock /></div>
                </div>
            </section>
        </>
    )
}
SinglepostCustomLayoutTwo.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogSinglepostLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogSinglepostLayout>
    )
}

