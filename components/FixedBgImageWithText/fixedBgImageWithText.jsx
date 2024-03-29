import React from 'react'
import styles from './fixedBgImageWithText.module.scss'

export default function FixedBgImageWithText(props) {
    return (
        <div className='container-fluid p-0'>
            <div className={styles.overlayMain}>
                <div className={styles[props?.setCmp?.overlayCls?.value]}></div>
                <div className={styles[props?.setCmp?.bgSize?.value]} style={{
                    backgroundImage: `url(${props?.setCmp?.bgImg?.value})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundAttachment: 'fixed',
                }}>
                    <div className={'text-center ' + styles.contentSet}>
                        <div className={styles.textOne}>
                            {props?.setCmp?.heading?.value}
                        </div>
                        <div className={styles[props?.setCmp?.mainHeadingStyle?.value]}>
                            {props?.setCmp?.mainHeading?.value}
                        </div>
                        <p className={styles.description}
                        
                        dangerouslySetInnerHTML={{
                            __html: props?.setCmp?.notes?.value,
                          }}
                        
                        
                        >
                           
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
