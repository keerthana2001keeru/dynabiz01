import React from 'react'
import IconWithTextCntrAlgn from '../../components/IconWithTextCenterAlign/iconWithTextCntrAlgn'

const teamIcontext = [
    {
        IconImage: '/uploads/about-icon-4.png',
        Heading: 'Go Very Fast',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my.'
    },
    {
        IconImage: '/uploads/about-icon-5.png',
        Heading: 'Business Matching',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my.'
    },
    {
        IconImage: '/uploads/about-icon-6.png',
        Heading: 'Growing Your Business',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my.'
    }
]
export default function TeamListIconTextBlock(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }
    return (
        <section className="sec-mar">
        <div className='container-fluid pb-5'>
            <div className='container-xxl'>
                <div className="row pt-5">
                    {HomeOneValue?.elements?.AboutUsSection?.value?.map((item, index) => {
                        return (
                            <div className='col-12 col-md-4' key={index}><IconWithTextCntrAlgn setCmp={item} /></div>
                        )
                    })}
                </div>
            </div>
        </div>
        </section>
    )
}
