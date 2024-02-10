import React from 'react'
import styles from './blogCustomBlockFive.module.scss'
import CenterAlignParagraph from '../../components/CenterAlignParagraph/centerAlignParagraph'
import FixedImgTextAlignRight from '../../components/FixedImgTextAlignRight/fixedImgTextAlignRight'

const setData = [
    {
        title: 'THEY LIVE IN BOOKMARKSGROVE',
        noteOne: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.',
        noteTwo: 'vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of blist.'
    }
]
const setDatas = [
    {
        bgImage: '/uploads/shutterstock_294489926.jpg',
        bgColorCls: 'sectionBg',
        smallTitle: '',
        largeTitle: '',
        content: 'its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects.',
        contentCls: 'description',
        icon: true,
        setPosition: 'left',
        bgImgAttachment: 'fixed'
    }
]
export default function BlogCustomBlockFive() {
    return (
        <div>
            <div className={'container-xxl ' + styles.coustomStyle}><CenterAlignParagraph setCmp={setData} /></div>
            {setDatas.map((item) => {
                return (
                    <FixedImgTextAlignRight setCmp={item} />
                )
            })}
        </div>
    )
}
