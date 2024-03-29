import Link from 'next/link'
import React from 'react'
import styles from './textButtonBgimg.module.scss'

export default function TextButtonBgimg(props) {

    return (
        <div className='container-fluid p-0'>
            <div
                className=""
                style={{
                    backgroundImage: `url(${props?.setCmp?.backgroundImage?.value})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: 'cover',
                    // height: '338px'
                }}
            >
                <div className='container-xxl'>
                    <div className={'row ' + styles.sectoinContentGrp}>
                        <div className='col-12 col-md-8'>
                            <h2 className={styles.sectionTitle}>
                                {props?.setCmp?.heading?.value}
                            </h2>
                            <h4 className={styles.sectionDes}
                              dangerouslySetInnerHTML={{
                                __html: props?.setCmp?.subContent?.value,
                              }}
                            
                            >
                            
                            </h4>
                        </div>
                        {props?.setCmp?.Button?.value && (
                        <div className={'text-center pe-lg-5 col-12 col-md-4 ' + styles.btnSetupstyle}>
                            <div className={styles.BtnCenter}>

                            <Link
                    href={
                        props?.setCmp?.ButtonLink?.urlType == "R"
                        ? "#" + props?.setCmp?.ButtonLink?.value || ""
                        : props?.setCmp?.ButtonLink?.value || ""
                    }
                    legacyBehavior
                    target={props?.setCmp?.ButtonLink?.urlType == "E" ? "_blank" : ""}
                  >

                                    <button className={`${styles.buttonSetUp} ${styles.btnOne}`}>{props?.setCmp?.Button?.value}</button>
                                </Link>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
