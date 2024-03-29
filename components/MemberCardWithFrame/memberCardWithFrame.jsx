import Link from 'next/link'
import React from 'react'
import styles from './memberCardWithFrame.module.scss'

export default function MemberCardWithFrame(props) {

    return (
        <div>
            <div className='container-fluid p-3'>
                <div className={`"card "  ${styles.cardsetup} ${styles.boxShadow}`}>
                    <div className={styles.membercrdZoom}><img src={props?.setCmp?.MemberImage?.value} className={"card-img-top img-fluid " + styles.Crdimg} alt="..." /></div>
                    <div className={styles.cardbody}>

                        <Link href="/personnel"><span className={styles.title}>{props?.setCmp?.MemberName?.value}</span></Link>
                        <p className={styles.subTitle}>{props?.setCmp?.designation?.value}</p>
<div>
                        <Link
                  href={
                    `tel:${props?.setCmp?.phone?.value}` ||
                    "#" }
                  
                >
                  <a
                   className={styles.phone} 
             
                  >
                 {props?.setCmp?.phone?.value} 
                  </a>
                </Link>
                </div>

                        {/* <div className={styles.phone}>{props?.setCmp?.phone?.value}</div> */}

<div>
                        <Link
                  href={
                    `mailto:${props?.setCmp?.email?.value}` ||
                    "#" }
                  
                >
                  <a
                   className={styles.mailSetup} 
             
                  >
                 {props?.setCmp?.email?.value} 
                  </a>
                </Link>

                </div>
                        {/* <div className={styles.mailSetup}>{props?.setCmp?.email?.value}</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
