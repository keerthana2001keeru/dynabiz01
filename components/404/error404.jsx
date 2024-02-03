import React from 'react'
import styles from './error404.module.scss'
import Header from '../headerOne'
import HeaderThree from '../headerThree'
import HeaderTwo from '../headerTwo'
import Footer from '../footer'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'

export default function Error404(props) {
    let HomeOneValue = {};
    if (props?.uiLayout) {
        {
            props?.uiLayout?.TH00025P16?.blocks?.map((item) => {
                HomeOneValue = item.elements
            })
        }
    } else {
        // aboutValue = require("./mapping.json");
    }

    //console.log(HomeOneValue)
    return (
        <div className='container-fluid p-0'>
            <div className="d-lg-none"><HeaderThree uiSettings={props?.uiLayout?.TH00025P20?.blocks?.TH00025B63}></HeaderThree></div>
            <div className={styles.overlayMain}>
                <div className={styles.overlay}></div>
                <div style={{
                    backgroundImage: `url(${HomeOneValue?.ErrorOne?.BackgroundImage?.value})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: 'cover',
                }}>
                    <div style={{ zIndex: '2', position: 'relative' }}>
                        <Header uiSettings={props?.uiLayout?.TH00025P20?.blocks?.TH00025B65} />
                        <HeaderTwo uiSettings={props?.uiLayout?.TH00025P20?.blocks?.TH00025B64}></HeaderTwo>
                    </div>

                    <div className="d-lg-block d-none"><HeaderThree uiSettings={props?.uiLayout?.TH00025P20?.blocks?.TH00025B63}></HeaderThree></div>
                    <div className={'text-center ' + styles.sectionSetup}>
                        <div className={styles.contentSet}>
                            <div className={styles.numbrStyle}>
                                {HomeOneValue?.ErrorOne?.Title?.value}
                            </div>
                            <div className={styles.pageNotFound}>
                                {HomeOneValue?.ErrorOne?.subTitle?.value}
                            </div>
                            <div className={styles.textError}>
                                {HomeOneValue?.ErrorOne?.description?.value}
                            </div>
                        </div>
                        <div className={'text-center ' + styles.newsletterSetup}>
                            <form className="input-group mt-4" style={{ justifyContent: 'center' }}>
                                <input type="input" className={'py-2 ' + styles.footerFormInput} id="inputEmail4" placeholder="Type Keywords..." />
                                < div className="input-group-append">
                                    <button className={`${styles.btnSetUp} ${styles.btnOneTwo}`}> <FaSearch /> </button>
                                </div>
                            </form>
                            <div className={styles.backBtn}>
                                <Link href={HomeOneValue?.ErrorOne?.backbuttonLink?.value} >
                                    <a className={styles.linkBack}> {HomeOneValue?.ErrorOne?.backbutton?.value}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer uiSettings={props?.uiLayout?.TH00025P21} ></Footer>
        </div>
    )
}
