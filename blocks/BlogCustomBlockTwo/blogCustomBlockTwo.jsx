import React from 'react'
import FixedBgImageWithText from '../../components/FixedBgImageWithText/fixedBgImageWithText'
import LeftAlignParagraph from '../../components/LeftAlignParagraph/leftAlignParagraph'

export default function BlogCustomBlockTwo(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    return (
        <div>
            <FixedBgImageWithText setCmp={HomeOneValue?.elements?.backgroundImageText} />
        </div>
    )
}
