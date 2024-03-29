import React from 'react'
import style from './simpleSetBlock.module.scss'
import SimpleSetComponent from '../../components/SimpleSetComponent/simpleSetComponent'
import AsideBlogPostTwo from '../../components/AsideBlogPost/asideBlogPostTwo'
import Breadcrumb from '../../components/Breadcrumb/breadcrumb'


const dataSet = [

    {
        heading: '',
        description: 'I sink under the weight of the splendour of these visions!A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquis',
        listItems: [
        ]
    },
    {
        heading: 'I throw myself down among the tall grass',
        description: 'I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and',
        listItems: [
        ]
    }

]

const dataSetTwo = [
    {
        heading: 'When, while the lovely valley teems with',
        description: 'vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of blist.',
        listItems: [

            { item: 'Far far away, behind the word mountain' },
            { item: 'When she reached the first hills' },
            { item: 'A small river named Duden flows' },
            { item: 'A small river named Duden flows by their plat.' },
            { item: 'Far far away, behind the word mountain' }

        ]
    },
    {
        heading: '',
        description: 'Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their plate.',
        listItems: [
        ]
    }
]
const dataSetThree = [
    {
        heading: '',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.',
        listItems: [
        ]
    },
    {
        heading: 'When, while the lovely valley teems with',
        description: 'vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of blist.        ',
        listItems: [

        ]
    }
]
export default function SimpleSetBlock() {
    return (
        <>
            <Breadcrumb />
            <div className={'container ' + style.containerSet}>


                {dataSet?.map((item, index) => {
                    return (
                        <div key={index}><SimpleSetComponent setCmp={item} /></div>
                    )
                })}
                <AsideBlogPostTwo />
                {dataSetThree?.map((item, index) => {
                    return (
                        <div key={index}><SimpleSetComponent setCmp={item} /></div>
                    )
                })}
                <div>
                    <img className='img-fluid' style={{ marginBottom: '50px', marginTop: '30px' }} src='/uploads/apple-desk-office-working-8841.jpg'></img>
                </div>
                {dataSetTwo?.map((item, index) => {
                    return (
                        <div key={index}><SimpleSetComponent setCmp={item} /></div>
                    )
                })}

            </div>
        </>
    )
}
