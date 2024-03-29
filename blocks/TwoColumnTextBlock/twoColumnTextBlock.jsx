import React from 'react'
import styles from './twoColumnTextBlock.module.scss'
import TwoColTextAndParagraph from '../../components/TwoColTextAndParagraph/twoColTextAndParagraph'

export default function TwoColumnTextBlock(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    return (
        <section>
        <div className={'container-fluid ' + styles.bgColor}>
            <div className='container-xxl'><TwoColTextAndParagraph setCmp={HomeOneValue?.elements?.AboutUsSection} /></div>
        </div>
        </section>
    )
}
