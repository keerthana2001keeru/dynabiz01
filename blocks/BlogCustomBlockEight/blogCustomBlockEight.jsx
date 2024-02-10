import React from 'react'
import styles from './blogCustomBlockEight.module.scss'
import LargeImgWithSmallText from '../../components/LargeImgWithSmallText/largeImgWithSmallText'
import LeftAlignParagraph from '../../components/LeftAlignParagraph/leftAlignParagraph'


export default function BlogCustomBlockEight(props) {
    return (
        <div>
            <LargeImgWithSmallText setCmp={[props?.setData[0]]} />
            <div className={'container-xxl ' + styles.coustomStyle}>
                <LeftAlignParagraph setCmp={[props?.setData[1]]} />
            </div>
        </div>
    )
}
