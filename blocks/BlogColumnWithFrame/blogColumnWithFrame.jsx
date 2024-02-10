import React from 'react'
import BlogCardPost from '../../components/BlogCardPost/blogCardPost'


const cardData = [
    {
        image: '/uploads/pexels-photo-515169-400x257.jpeg',
        subTitle: 'JUNE 6, 2016',
        title: 'Pityful a rethoric question ran',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...',
        tagOne: 'John Smith',
        tagTwo: 'Masonry',
        button: 'Read more'
    },
    {
        image: '/uploads/pexels-photo-529923-400x257.jpeg',
        subTitle: 'JUNE 6, 2016',
        title: 'I am so happy, my dear friend',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...',
        tagOne: 'John Smith',
        tagTwo: 'Masonry',
        button: 'Read more'
    },
    {
        image: '/uploads/pexels-photo-374018-400x257.jpeg',
        subTitle: 'JUNE 6, 2016',
        title: 'Even the all-powerful Pointing',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...',
        tagOne: 'John Smith',
        tagTwo: 'Masonry',
        button: 'Read more'
    },
    {
        image: '/uploads/pexels-photo-515169-400x257.jpeg',
        subTitle: 'JUNE 6, 2016',
        title: 'Separated they live in Bookmarks',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...',
        tagOne: 'John Smith',
        tagTwo: 'Masonry',
        button: 'Read more'
    },
    {
        image: '/uploads/pexels-photo-374018-400x257.jpeg',
        subTitle: 'JUNE 6, 2016',
        title: 'Video Post Format',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the...',
        tagOne: 'John Smith',
        tagTwo: 'Masonry',
        button: 'Read more'
    },
    {
        image: '/uploads/pexels-photo-374018-400x257.jpeg',
        subTitle: 'JUNE 6, 2016',
        title: 'Audio Post Format',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the...',
        tagOne: 'John Smith',
        tagTwo: 'Masonry',
        button: 'Read more'
    }
]
export default function BlogColumnWithFrame() {
    return (
        <>
            <div className="row">
                {cardData?.map((item) => {
                    return (
                        <div className='col-md-3'> <BlogCardPost setCmp={item} /></div>
                    )
                })}
            </div>
        </>
    )
}
