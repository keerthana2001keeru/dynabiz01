import React from 'react'
import { FaAddressBook, FaRegFolder } from 'react-icons/fa'
import styles from './blogCardPost.module.scss'

export default function BlogCardPost(props) {
    return (
        <div className={"card shadow-sm bg-body rounded " + styles.HcardTwoSetUp}>
            {props?.setCmp?.video ? <video controls>
                <source src={props?.setCmp?.video} target='blank' type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
            </video> : props?.setCmp?.audio ? <div className={styles.cardHeader}><audio className={styles.audio} src="/media/motivational-epic-music-inspiring-cinematic-background-music-124265.mp3" controls /></div> : props?.setCmp?.image ? <div className={styles.HcrdTwoImgZoom}><img src={props?.setCmp?.image} className={"card-img-top " + styles.Crdimg} alt="..." /></div> : ''}

            <div className={"card-body " + styles.hCrdTwoContentGrp}>
                <p className="card-text" style={{ marginBottom: '2px' }}><small className={styles.hCrdTwoSubTitle}>{props?.setCmp?.subTitle}</small></p>
                <h5 className={"card-title " + styles.hCrdTwoTitle}>{props?.setCmp?.title}
                </h5>
                <p className={"card-text " + styles.hCrdTwoDes}>{props?.setCmp?.description}
                </p>
                {props?.setCmp?.button ? <button className={`${styles.BtnOne} ${styles.buttonSetUp}`}>{props?.setCmp?.button}</button> : ''}
            </div>
            <div className={"card-footer " + styles.HcardTwoFooter}>
                <div className='row'>
                    <div className='col'>
                        <p className="card-text">
                            <small className={"text-muted " + styles.hCrdTwoFooterText}>
                                <FaAddressBook size={15} style={{ marginRight: '5px' }} />{props?.setCmp?.tagOne}
                            </small>
                        </p>
                    </div>
                    <div className='col'>
                        <p className="card-text">
                            <small className={"text-muted " + styles.hCrdTwoFooterText}>
                                <FaRegFolder size={15} style={{ marginRight: '5px' }} />{props?.setCmp?.tagTwo}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
