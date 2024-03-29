import React from 'react'
import LogoSlider from '../../components/LogoSlider/logoSlider'
import TitleWithUlListContentBG from '../../components/TitleWithUlListContentBG/titleWithUlListContentBG'

export default function TitleWithUlListContentBGBlk(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }
   // console.log(HomeOneValue)
    return (
        <div className='container-fluid p-0'>
            <div className='container-xxl p-0'> <TitleWithUlListContentBG setCmp={HomeOneValue?.elements} /></div>
            <LogoSlider setCmp={HomeOneValue?.elements?.logos} />
        </div>
    )
}
