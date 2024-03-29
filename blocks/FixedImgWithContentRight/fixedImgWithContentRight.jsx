import React from 'react'
import CardtypeOne from '../../components/CardTypeOne/cardtypeOne'
import styles from './fixedImgWithContentRight.module.scss'


const crds = [
    {
        icon: '/uploads/about-icon-7.png',
        heading: 'On Time Service.',
        content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics, omni-chan',
        iconStyle: 'HoneSectionIconTwo',
        headingStyle: 'HoneSectionTitleTwo',
        contentStyle: 'HoneSectionDes'
    },
    {
        icon: '/uploads/about-icon-8.png',
        heading: 'A Team Of Professionals.',
        content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics, omni-chan',
        iconStyle: 'HoneSectionIconTwo',
        headingStyle: 'HoneSectionTitleTwo',
        contentStyle: 'HoneSectionDes'
    },
    {
        icon: '/uploads/about-icon-9.png',
        heading: 'Analyze Your Business.',
        content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics, omni-chan',
        iconStyle: 'HoneSectionIconTwo',
        headingStyle: 'HoneSectionTitleTwo',
        contentStyle: 'HoneSectionDes'
    }
]

export default function FixedImgWithContentRight(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }
   // console.log(HomeOneValue)
    return (
        <section className='sec-mar'>
        <div className='container-xxl p-0'>
            <div className="row pt-5">
                <div className={"col-12 col-md-6 " + styles.bgImage} style={{
                    backgroundImage: `url(${HomeOneValue?.elements?.AboutUsFiveSection?.backgroundImage?.value})`,
                    backgroundRepeat: "no-repeat",
                    // backgroundPosition: "right",
                    backgroundSize: "cover",
                    // backgroundAttachment: 'fixed',
                }}>

                </div>
                <div className={"col-12 col-md-6 " + styles.sectionSetup}>
                    {HomeOneValue?.elements?.IconWithContent?.value?.map((item, index) => {
                        return (
                            <div className={styles.crdSetup} key={index} ><CardtypeOne setCmp={item} /></div>
                        )
                    })}
                </div>
            </div>
        </div>
        </section>
    )
}
