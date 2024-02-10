import React from 'react'
import styles from './blogTopBanner.module.scss'
import Header from '../headerOne'
import HeaderThree from '../headerThree'
import HeaderTwo from '../headerTwo'
import { FaAddressBook, FaRegClock, FaRegFolder } from 'react-icons/fa'
import { BsChat } from 'react-icons/bs'
import { AiOutlineTags } from 'react-icons/ai'

export default function BlogTopBanner(props) {
    return (
        <div className='container-fluid p-0'>
            <div className="d-lg-none"><HeaderThree uiSettings={props?.uiSettings?.blocks?.TH00025B63}></HeaderThree></div>
            <div className={styles.overlayMain}>
                <div className={styles.overlay}></div>
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

                    <div className={'container-xxl ' + styles.sectionSetup}>
                        <div className={styles.title}>
                            {props?.setCmp?.title}
                        </div>
                        <div className='d-flex flex-wrap'>
                            <p className="card-text">
                                <small className={styles.iconTexts}>
                                    <FaRegClock size={15} style={{ marginRight: '8px' }} />JUNE 6, 2016
                                </small>
                            </p>

                            <p className="card-text">
                                <small className={styles.iconTexts}>
                                    <FaAddressBook size={15} style={{ marginRight: '8px' }} />JOHN SMITH
                                </small>
                            </p>
                            <p className="card-text">
                                <small className={styles.iconTexts}>
                                    <FaRegFolder size={15} style={{ marginRight: '8px' }} />Masonry
                                </small>
                            </p>
                            <p className="card-text">
                                <small className={styles.iconTexts}>
                                    <AiOutlineTags size={15} style={{ marginRight: '8px' }} />Constructions, Industry
                                </small>
                            </p>
                            <p className="card-text">
                                <small className={styles.iconTexts}>
                                    <BsChat size={15} style={{ marginRight: '8px' }} />0
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
