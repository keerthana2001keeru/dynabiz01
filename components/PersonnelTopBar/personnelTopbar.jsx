import React from 'react'
import styles from './personnelTopbar.module.scss'
import Header from '../headerOne'
import HeaderThree from '../headerThree'
import HeaderTwo from '../headerTwo'
import { IoMdMail } from 'react-icons/io'
import { FaFacebookF, FaGooglePlusG, FaSkype, FaTwitter } from 'react-icons/fa'

export default function PersonnelTopbar(props) {
    return (
        <div className='container-fluid p-0'>
            <div className="d-lg-none"><HeaderThree uiSettings={props?.uiSettings?.blocks?.TH00025B63}></HeaderThree></div>
            <div className={props?.setCmp?.overlay == true ? styles.overlayMain : ''}>
                {props?.setCmp?.overlay == true ? <div className={styles.overlay}></div> : ''}
                <div style={{
                    backgroundImage: `url(${props?.setCmp?.bgImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: 'cover',
                }}>
                    <div style={{ zIndex: '2', position: 'relative' }}>
                        <Header uiSettings={props?.uiSettings?.blocks?.TH00025B65} />
                        <HeaderTwo uiSettings={props?.uiSettings?.blocks?.TH00025B64}></HeaderTwo>
                    </div>
                    <div className="d-lg-block d-none"><HeaderThree uiSettings={props?.uiSettings?.blocks?.TH00025B63}></HeaderThree></div>

                    <div className='container-xxl'>
                        <div className={'d-flex flex-wrap ' + styles[props?.setCmp?.contentSection]}>
                            <img className={styles.roundedImg} src={props?.setMember?.Mimage} alt="" />
                            <div className={styles.personnelSecton}>
                                <div className={styles.title}>
                                    {props?.setMember?.Mname}
                                </div>
                                <div className={styles.subtitle}>
                                    {props?.setMember?.designation}
                                </div>
                                <IoMdMail className={styles.icons} />
                                <FaFacebookF className={styles.icons} />
                                <FaGooglePlusG className={styles.icons} />
                                <FaSkype className={styles.icons} />
                                <FaTwitter className={styles.icons} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
