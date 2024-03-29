import React from 'react'
import styles from './largeImgWithSmallText.module.scss'

export default function LargeImgWithSmallText(props) {
    var position = (props?.setCmp[0]?.setposition)
   // console.log(position)
    return (
        <div className='container-fluid p-0'>
            <div className='row'>
                <div className={position == "left" ? 'col-12 col-md-10 order-md-1 ' + styles.imageSection : 'col-12 col-md-10 order-md-2 ' + styles.imageSection}>
                    <img className={styles.imgSetup} src={props?.setCmp[0]?.img} alt="" />
                </div>
                <div className={position == "left" ? 'col-12 col-md-2 order-md-2' : ' col-12 col-md-2 order-md-1'}>
                    <p className={styles.des}>{props?.setCmp[0]?.text}</p>
                </div>
            </div>
        </div >
    )
}
