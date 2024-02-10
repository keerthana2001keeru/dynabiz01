import React from 'react'
import BlogImageHoverBlkNospace from '../../blocks/BlogImageHoverBlock-NoSpace/blogImageHoverBlkNospace'
import BlogGridColumnLayout from '../../layouts/BlogGrid-Column/blogGridColumnLayout'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'

const layoutSet = {
    colStyle: 'col-md-4'
}

const dataSet = [
    {
        img: '/uploads/pexels-photo-529923-400x257.jpeg',
        title: ' I sink under the weight',
        subTitle: 'June 6, 2016',
        name: 'John Smith'
    },
    {
        img: '/uploads/pexels-photo-374018-400x257.jpeg',
        title: ' Possession of my entire soul',
        subTitle: 'June 6, 2016',
        name: 'John Smith'
    },
    {
        img: '/uploads/pexels-photo-400x257.jpg',
        title: ' I am so happy, my dear friend',
        subTitle: 'June 6, 2016',
        name: 'John Smith'
    },
    {
        img: '/uploads/pexels-photo-515169-400x257.jpeg',
        title: ' Pityful a rethoric question ran',
        subTitle: 'June 6, 2016',
        name: 'John Smith'
    },
    {
        img: '/uploads/pexels-photo-106344-400x257.jpeg',
        title: ' Even the all-powerful Pointing',
        subTitle: 'June 6, 2016',
        name: 'John Smith'
    },
    {
        img: '/uploads/pexels-photo-374018-400x257.jpeg',
        title: ' Separated they live in Bookmarks',
        subTitle: 'June 6, 2016',
        name: 'John Smith'
    },
    {
        img: '/uploads/pexels-photo-400x257.jpg',
        title: ' The Surfing Man Will Blow Your Mind',
        subTitle: 'June 6, 2016',
        name: 'John Smith'
    },
    {
        img: '/uploads/pexels-photo-529923-400x257.jpeg',
        title: ' Help Monitoring',
        subTitle: 'June 6, 2016',
        name: 'John Smith'
    }

]
const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    title: 'Blog Grid 3 Columns',
}
export default function BlogGridThreecolumnsNospace(props) {
    const userSettings = props?.uiSettings;
    return (
        <>
            <section className='main container-xxl'>
                <div>
                    <BlogImageHoverBlkNospace setCmp={layoutSet} setData={dataSet} />
                </div>
            </section>
        </>
    )
}
BlogGridThreecolumnsNospace.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <BlogGridColumnLayout setCmp={topBanner} uiSettings={userSetting}>
            {page}
        </BlogGridColumnLayout>
    )
}

