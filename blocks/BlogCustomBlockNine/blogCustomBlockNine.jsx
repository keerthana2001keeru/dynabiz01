import React from 'react'
import LeftAlignParagraph from '../../components/LeftAlignParagraph/leftAlignParagraph'
import BlogCustomBlockTwo from '../BlogCustomBlockTwo/blogCustomBlockTwo'
import styles from './blogCustomBlockNine.module.scss'


const blogImgblkTwo = [
    {
        bgImg: '/uploads/pexels-photo-529923.jpeg',
        heading: 'Vokalia and Consonantia',
        mainHeading: 'SEPARATED THEY LIVE IN NEW YORK',
        notes: 'On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its originOn her way she met a copy. The copy warned the Little Blind Text.',
        overlayCls: 'overlayThree',
        bgSize: 'bgImage',
        mainHeadingStyle: 'mainHeadingTwo'
    }
]

const setdata = [
    {
        heading: 'A wonderful serenity has taken possession',
        noteOne: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil.',
        noteTwo: 'I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us.'
    }
]

export default function BlogCustomBlockNine() {
    return (
        <div>
            <BlogCustomBlockTwo setData={blogImgblkTwo} />
            <div className={'container-xxl ' + styles.coustomStyle}>
                <LeftAlignParagraph setCmp={setdata} />
            </div>
        </div>
    )
}
