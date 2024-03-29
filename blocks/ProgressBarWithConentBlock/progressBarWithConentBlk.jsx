import React from 'react'
import ProgressBarWithText from '../../components/ProgressBarWithText/progressBarWithText'

export default function ProgressBarWithConentBlk(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    return (
        <div className='contanier-fluid p-0'>
            <ProgressBarWithText setCmp={HomeOneValue?.elements} />
        </div>
    )
}
