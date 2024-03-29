import React from 'react'
import FixedImgTextAlignRight from '../../components/FixedImgTextAlignRight/fixedImgTextAlignRight'


const setDatas = [
    {
        bgImage: '/uploads/about-2-bg-2s-2.jpg',
        bgColorCls: 'sectionBg',
        smallTitle: 'WHY US ?',
        largeTitle: 'We have more than ten years of experience',
        content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital.',
        contentCls: 'descriptionTwo',
        icon: false,
        setPosition: 'right',
        bgImgAttachment: 'unset'
    },
    {
        bgImage: '/uploads/about-2-bg.jpg',
        bgColorCls: 'sectionBgTwo',
        smallTitle: 'WHY US ?',
        largeTitle: 'We have more than ten years of experience',
        content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital.',
        contentCls: 'descriptionTwo',
        icon: false,
        setPosition: 'left',
        bgImgAttachment: 'unset'
    }
]

export default function FixedImgWithTextRLblock(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    return (
        <section className='sec-mar'>
        <div>
            {HomeOneValue?.elements?.AboutUsTwoFourSection?.value?.map((item, index) => {
                return (
                    <div key={index}> <FixedImgTextAlignRight setCmp={item} /></div>
                )
            })}
        </div>
        </section>
    )
}
