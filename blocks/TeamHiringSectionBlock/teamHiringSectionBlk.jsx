import React from 'react'
import TextButtonBgimg from '../../components/TextButtonWithBgImg/textButtonBgimg'

export default function TeamHiringSectionBlk(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }
   // console.log(HomeOneValue)
    return (
        <div>
            <TextButtonBgimg setCmp={HomeOneValue?.elements?.TeamHiringSection} />
        </div>
    )
}
