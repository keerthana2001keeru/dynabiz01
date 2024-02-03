import React from 'react'
import styles from './aboutUsThreeBlk.module.scss'
import Accordion from '../../components/Accordion/accordion'
import SimpleParagraph from '../../components/SimpleParagraph/simpleParagraph'

export default function AboutUsThreeBlk(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    return (
        <section className='sec-mar'>
        <div className='container-xxl p-0'>
            <div className={styles.sectionContainer}>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className={styles.heading}>
                            {HomeOneValue?.elements?.AboutUsThreeSectionThree?.heading?.value}
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <Accordion setCmp={HomeOneValue?.elements?.AccordionHeadingContent} />
                        <div className='pt-4'><SimpleParagraph setCmp={HomeOneValue?.elements?.paragraphContent} /></div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
