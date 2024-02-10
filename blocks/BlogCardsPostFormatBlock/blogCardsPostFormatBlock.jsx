import React from 'react'
import AsideBlogPost from '../../components/AsideBlogPost/asideBlogPost'
import BlogCardPost from '../../components/BlogCardPost/blogCardPost'
import BlogGalleryCardPost from '../../components/BlogGalleryCardPost/blogGalleryCardPost'
import BlogLinkCardPost from '../../components/BlogLinkCardPost/blogLinkCardPost'
import BlogQuoteCardPost from '../../components/BlogQuoteCardPost/blogQuoteCardPost'
import QuoteBlogPost from '../../components/QuoteBlogPost/quoteBlogPost'

const cardData = [
    {
        image: '/uploads/pexels-photo-530024-900x500.jpeg',
        subTitle: 'JUNE 6, 2016',
        title: 'Pityful a rethoric question ran',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...',
        tagOne: 'John Smith',
        tagTwo: 'Masonry'
    },
    {
        image: '/uploads/pexels-photo-529923-400x257.jpeg',
        subTitle: 'JUNE 6, 2016',
        title: 'I am so happy, my dear friend',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...',
        tagOne: 'John Smith',
        tagTwo: 'Masonry'
    },
    {
        image: '/uploads/pexels-photo-374018-400x257.jpeg',
        subTitle: 'JUNE 6, 2016',
        title: 'Even the all-powerful Pointing',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...',
        tagOne: 'John Smith',
        tagTwo: 'Masonry'
    },
    {
        image: '/uploads/pexels-photo-515169-400x257.jpeg',
        subTitle: 'JUNE 6, 2016',
        title: 'Separated they live in Bookmarks',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...',
        tagOne: 'John Smith',
        tagTwo: 'Masonry'
    },
    {
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        subTitle: 'JUNE 6, 2016',
        title: 'Video Post Format',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the...',
        tagOne: 'John Smith',
        tagTwo: 'Masonry'
    },
    {
        audio: '/media/motivational-epic-music-inspiring-cinematic-background-music-124265.mp3',
        subTitle: 'JUNE 6, 2016',
        title: 'Audio Post Format',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the...',
        tagOne: 'John Smith',
        tagTwo: 'Masonry'
    }
]
const galleryCard = [
    {
        image: '/uploads/pexels-photo-530024-900x500.jpeg',
        subTitle: 'JUNE 6, 2016',
        title: 'Gallery Post Format',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the...',
        tagOne: 'John Smith',
        tagTwo: 'Masonry'
    }
]

export default function BlogCardsPostFormatBlock() {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3">
                {cardData?.map((item) => {
                    return (
                        <div className='col'> <BlogCardPost setCmp={item} /></div>
                    )
                })}
                <div className="col"><AsideBlogPost /> </div>
                <div className="col"><BlogQuoteCardPost /> </div>
                <div className="col"><BlogLinkCardPost /> </div>
                <div className="col"><BlogGalleryCardPost setCmp={galleryCard} /> </div>
            </div>
        </div>
    )
}
