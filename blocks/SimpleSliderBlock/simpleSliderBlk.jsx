import React from 'react'
import SimpleSlider from '../../components/SimpleSlider/simpleSlider'

export default function SimpleSliderBlk(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    return (
        <div>
            <SimpleSlider setCmp={HomeOneValue?.elements} />
        </div>
    )
}
