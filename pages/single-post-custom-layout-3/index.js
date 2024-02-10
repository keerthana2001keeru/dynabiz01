import React from 'react'
import BlogAuthorBlock from '../../blocks/BlogAuthorBlock/blogAuthorBlock'
import BlogCustomBlockEight from '../../blocks/BlogCustomBlockEight/blogCustomBlockEight'
import BlogCustomBlockNine from '../../blocks/BlogCustomBlockNine/blogCustomBlockNine'
import BlogCustomBlockSeven from '../../blocks/BlogCustomBlockSeven/blogCustomBlockSeven'
import BlogSinglepostLayout from '../../layouts/Blog-Singlepost/blogSinglepostLayout'
import { getHttpService } from '../../utilities/http-service-helper';

import Head from 'next/head'
const setdata = [
    {
        img: '/uploads/iphone-speech-conference-cell-phone.jpg',
        text: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which.',
        setposition: 'left'
    },
    {
        heading: 'Far far away, behind the word mountains',
        noteOne: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand time.',
        noteTwo: 'Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her.Far far away.'
    }
]
const setdatas = [
    {
        img: '/uploads/pexels-photo-30222.jpg',
        text: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which.',
        setposition: 'right'
    },
    {
        heading: 'Duden flows by their place and supplies',
        noteOne: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand time.',
        noteTwo: 'Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her.Far far away.'
    }
]

const topBanner =
{
    bgImage: '/uploads/pexels-photo-106344.jpeg',
    title: 'Even the all-powerful Pointing',
}
export default function SinglepostCustomLayoutThree(props) {
    const userSettings = props?.uiSettings;
    return (
        <>
            <section className='main'>
                <div>
                    <BlogCustomBlockSeven />
                    <BlogCustomBlockEight setData={setdata} />
                    <BlogCustomBlockEight setData={setdatas} />
                    <BlogCustomBlockNine />
                    <div className='container-xxl'><BlogAuthorBlock /></div>
                </div>
            </section>
        </>
    )
}
SinglepostCustomLayoutThree.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogSinglepostLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogSinglepostLayout>
    )
}

