import React from 'react'
import styles from './blogCustomBlockSix.module.scss'
import CenterAlignParagraph from '../../components/CenterAlignParagraph/centerAlignParagraph'
import BlogCustomBlockTwo from '../BlogCustomBlockTwo/blogCustomBlockTwo'

const blogImgblkTwo = [
    {
        bgImg: '/uploads/office-notes-notepad-entrepreneur-38556.jpeg',
        heading: '',
        mainHeading: 'THE BIG OXMOX ADVISED HER',
        notes: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named.',
        overlayCls: 'overlayThree',
        bgSize: 'bgImageTwo',
        mainHeadingStyle: 'mainHeading'
    }
]

const setData = [
    {
        title: 'THEY LIVE IN BOOKMARKSGROVE',
        noteOne: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
        noteTwo: ''
    }
]

export default function BlogCustomBlockSix() {
    return (
        <div>
            <div className={'container-xxl ' + styles.coustomStyle}><CenterAlignParagraph setCmp={setData} /></div>
            <BlogCustomBlockTwo setData={blogImgblkTwo} />
        </div>
    )
}
