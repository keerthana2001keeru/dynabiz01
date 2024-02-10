import React from 'react'
import BlogImageCardPostBlk from '../../blocks/BlogImageCardPostBlock/blogImageCardPostBlk'
import BlogRightSidebarBlock from '../../blocks/BlogRightSidebarBlock/blogRightSidebarBlock'
import BlogRightSidebarlayout from '../../layouts/Blog-RightSidebar/blogRightSidebarlayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'
const cardSet = [
    {
        image: '/uploads/pexels-photo-530024-900x500.jpeg',
        heading: 'This Is An Awesome Sticky Post',
        tagOne: 'JUNE 6, 2016',
        tagTwo: 'JOHN SMITH',
        tagThree: 'BLOG',
        tagFour: '3',
        Description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect...',
        button: 'Read more',
        frame: 'false'
    },
    {
        image: '/uploads/pexels-photo-529923.jpeg',
        heading: 'I sink under the weight',
        tagOne: 'JUNE 6, 2016',
        tagTwo: 'JOHN SMITH',
        tagThree: 'BLOG',
        tagFour: '2',
        Description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect...',
        button: 'Read more',
        frame: 'false'
    },
    {
        image: '/uploads/pexels-photo-374018.jpeg',
        heading: 'Possession of my entire soul',
        tagOne: 'JUNE 6, 2016',
        tagTwo: 'JOHN SMITH',
        tagThree: 'BLOG',
        tagFour: '1',
        Description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect...',
        button: 'Read more',
        frame: 'false'
    },
    {
        image: '/uploads/pexels-photo-900x500.jpg',
        heading: 'I am so happy, my dear friend',
        tagOne: 'JUNE 6, 2016',
        tagTwo: 'JOHN SMITH',
        tagThree: 'BLOG',
        tagFour: '0',
        Description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect...',
        button: 'Read more',
        frame: 'false'
    },
    {
        image: '/uploads/pexels-photo-515169-900x500.jpeg',
        heading: 'Pityful a rethoric question ran',
        tagOne: 'JUNE 6, 2016',
        tagTwo: 'JOHN SMITH',
        tagThree: 'BLOG',
        tagFour: '3',
        Description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect...',
        button: 'Read more',
        frame: 'false'
    }
]

const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Blog Full Left Sidebar',
}
export default function BlogFullLeftSidebar(props) {
    const userSettings = props?.uiSettings;
    return (
        <div className='container p-0'>
            <section className='main'>
                <div className='row' style={{ padding: '60px 0px 40px 0px' }}>
                    <div className='col-12 col-md-4 order-2 order-md-1'>
                        <BlogRightSidebarBlock />
                    </div>
                    <div className="col-12 col-md-8 pb-5 order-1 order-md-2">
                        {cardSet?.map((item, i) => {
                            return (<BlogImageCardPostBlk setData={item} key={i} />)
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
BlogFullLeftSidebar.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogRightSidebarlayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogRightSidebarlayout>
    )
}

