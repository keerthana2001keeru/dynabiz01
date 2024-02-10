import React from 'react'
import BlogAuthorBlock from '../../blocks/BlogAuthorBlock/blogAuthorBlock'
import BlogCustomBlockOne from '../../blocks/BlogCustomBlockOne/blogCustomBlockOne'
import BlogCustomBlockThree from '../../blocks/BlogCustomBlockThree/blogCustomBlockThree'
import BlogCustomBlockTwo from '../../blocks/BlogCustomBlockTwo/blogCustomBlockTwo'
import BlogSinglepostLayout from '../../layouts/Blog-Singlepost/blogSinglepostLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
const blogImgblkTwo = [
    {
        bgImg: '/uploads/816KPMNUS2.jpg',
        heading: 'Vokalia and Consonantia',
        mainHeading: 'SEPARATED THEY LIVE IN NEW YORK',
        notes: 'On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its originOn her way she met a copy. The copy warned the Little Blind Text.',
        overlayCls: 'overlay',
        bgSize: 'bgImage',
        mainHeadingStyle: 'mainHeadingTwo'
    }
]
const blogImgsblkTwo = [
    {
        bgImg: '/uploads/page-title-background1.jpg',
        heading: '',
        mainHeading: 'I SINK UNDER THE WEIGHT OF THE SPLENDOUR',
        notes: 'Would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the mirror of my soul, as my soul is the mirror of the infinite God! O my friend — but it is too much for my strength',
        overlayCls: 'overlayTwo',
        bgSize: 'bgImage',
        mainHeadingStyle: 'mainHeadingTwo'
    }
]

const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Possession of my entire soul',
}
export default function SinglepostCustomLayoutOne(props) {
    const userSettings = props?.uiSettings;
    return (
        <>
            <section className='main'>
                <div>
                    <div className='container-xxl p-0'><BlogCustomBlockOne /></div>
                    <BlogCustomBlockTwo setData={blogImgblkTwo} />
                    <div className='container-xxl'><BlogCustomBlockThree /></div>
                    <BlogCustomBlockTwo setData={blogImgsblkTwo} />
                    <div className='container-xxl'><BlogAuthorBlock /></div>
                </div>
            </section>
        </>
    )
}
SinglepostCustomLayoutOne.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogSinglepostLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogSinglepostLayout>
    )
}

