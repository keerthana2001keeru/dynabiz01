import React from 'react'
import styles from './iconContentCrdBlock.module.scss'
import CardtypeOne from '../../components/CardTypeOne/cardtypeOne'


const crds = [
    {
        icon: '/uploads/about-2-icon-1.png',
        heading: 'On Time Service.',
        content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics, omni-chan',
        iconStyle: '',
        headingStyle: 'HoneSectionTitleThree',
        contentStyle: 'HoneSectionThree'
    },
    {
        icon: '/uploads/about-2-icon-2.png',
        heading: 'A Team Of Professionals.',
        content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics, omni-chan',
        iconStyle: '',
        headingStyle: 'HoneSectionTitleThree',
        contentStyle: 'HoneSectionThree'
    },
    {
        icon: '/uploads/about-2-icon-3.png',
        heading: 'Analyze Your Business.',
        content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics, omni-chan',
        iconStyle: '',
        headingStyle: 'HoneSectionTitleThree',
        contentStyle: 'HoneSectionThree'
    }
]

export default function IconContentCrdBlock(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }
    return (
        <section className='sec-mar'>
        <div className={'container-fluid p-5 ' + styles.bgImage} style={{
            backgroundImage: `url(${HomeOneValue?.elements?.AboutUsTwoThreeSection?.backgroundImage?.value})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundAttachment: 'fixed',
        }}>
            <div className='container-xxl'>
                <div className='pt-5 '>
                    <div className="row pt-5 pb-5">
                        {HomeOneValue?.elements?.IconWithContent?.value?.map((item, index) => {
                            return (
                                <div className="col-md-4 col-sm-12" key={index}>
                                    <CardtypeOne setCmp={item} />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
