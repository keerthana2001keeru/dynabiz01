import React from 'react'
import BgImageWithTextColumn from '../../components/BgimageWithTextColumn/bgImageWithTextColumn'

export default function CareerblockOne(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }
    
    return (
        <section className='sec-mar'>
        <div>
            <BgImageWithTextColumn setCmp={HomeOneValue?.elements?.BGimageText}/>
        </div>
        </section>
    )
}
