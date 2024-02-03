import React from 'react'
import styles from './aboutUsTopBanner.module.scss'
import Header from '../headerOne'
import HeaderThree from '../headerThree'
import HeaderTwo from '../headerTwo'

export default function AboutUsTopBanner(props) {
    return (
        <div className='container-fluid p-0'>
            <div style={{
                backgroundImage: `url(${props?.setCmp?.bgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: 'cover',
            }}>
                {/* <Header uiSettings={props?.uiSettings?.blocks?.TH00025B65} /> */}
                <HeaderTwo uiSettings={props?.uiSettings?.blocks?.TH00025B64}></HeaderTwo>
                <HeaderThree uiSettings={props?.uiSettings?.blocks?.TH00025B63}></HeaderThree>

                <div className={'text-center ' + styles.sectionSetup}>
                    <div className={styles.title}>
                        {props?.setCmp?.title}
                    </div>
                    <div className={styles.subTitle}>
                        {props?.setCmp?.subTitle}
                    </div>
                </div>
            </div>
        </div>
    )
}
