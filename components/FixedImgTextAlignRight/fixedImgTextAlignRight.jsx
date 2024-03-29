import React from 'react'
import styles from './fixedImgTextAlignRight.module.scss'
import { FaQuoteLeft } from 'react-icons/fa';


export default function FixedImgTextAlignRight(props) {
    return (
        <div className='container-fluid p-0'>
            <div className="row">
                <div className={props?.setCmp?.setPosition?.value == "left" ? "col-12 col-md-6 order-md-1 " + styles.bgImage : "col-12 col-md-6 order-md-2 " + styles.bgImage} style={{
                    backgroundImage: `url(${props?.setCmp?.bgImage?.value})`,
                    backgroundRepeat: "no-repeat",
                    // backgroundPosition: "right",
                    backgroundSize: "cover",
                    backgroundAttachment: `${props?.setCmp?.bgImage?.style?.bgImgAttachment}`,
                }}>

                </div>
                <div className={props?.setCmp?.setPosition?.value == "left" ? "col-12 col-md-6 order-md-2 " + styles[props?.setCmp?.bgColorCls?.style?.backgroundStyle] : "col-12 col-md-6 order-md-1 " + styles[props?.setCmp?.bgColorCls?.style?.backgroundStyle]}>
                    <div className={styles.smallTitle}>
                        {props?.setCmp?.smallTitle?.value}
                    </div>
                    <div className={styles.largeTitle}>
                        {props?.setCmp?.largeTitle?.value}
                    </div>
                    <div className={"d-flex  " + styles.contentStyle}>
                        {props?.setCmp?.icon?.value == true ? <div >
                            <FaQuoteLeft className={styles.icon} />
                        </div> : ''}

                        <div className={"align-items-center " + styles.contentCls}
                        dangerouslySetInnerHTML={{
                            __html: props?.setCmp?.content?.value,
                          }} 
                        
                        
                        
                        >
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
