import React from 'react'
import CounterSet from '../../components/Counter/counterSet'
import styles from './teamSuccessStoryBlk.module.scss'

export default function TeamSuccessStoryBlk(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }
    return (
        <div style={{
            backgroundImage: `url(${HomeOneValue?.elements?.SuccessStatusSection?.backgroundImage?.value})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            zIndex: '5'
        }}>
            {HomeOneValue?.elements?.SuccessStatusSection?.heading?.value ? <div className={"row text-center " + styles.contentSet}>
                <h2 className={styles.title}>{HomeOneValue?.elements?.SuccessStatusSection?.heading?.value}</h2>
                <h5 className={styles.subTitle}>{HomeOneValue?.elements?.SuccessStatusSection?.subHeading?.value}</h5>
            </div> : ''}

            <CounterSet setCmp={HomeOneValue?.elements?.successStatusCounter} />
        </div>
    )
}
