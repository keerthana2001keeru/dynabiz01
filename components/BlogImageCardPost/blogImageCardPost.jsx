import React from 'react'
import styles from './blogImageCardPost.module.scss'
import { FaAddressBook, FaRegFolder, FaRegClock } from 'react-icons/fa';
import { BsChat } from 'react-icons/bs';


export default function BlogImageCardPost(props) {
    return (
        <div className={props?.setCmp?.frame == "true" ? "card shadow-sm bg-body rounded " + styles.HcardTwoSetUp : "card bg-body rounded " + styles.HcardTwoSetUp}>
            <div className={styles.HcrdTwoImgZoom}><img src={props?.setCmp?.image} className={"card-img-top " + styles.Crdimg} alt="..." /></div>
            <div className={"card-body " + styles.hCrdTwoContentGrp}>
                <h5 className={"card-title " + styles.hCrdTwoTitle}>Possession of my entire soul
                </h5>
                <div className='d-flex flex-wrap'>
                    <p className="card-text">
                        <small className={"text-muted " + styles.hCrdTwoFooterText}>
                            <FaRegClock size={15} style={{ marginRight: '8px' }} />JUNE 6, 2016
                        </small>
                    </p>
                    <p className="card-text">
                        <small className={"text-muted " + styles.hCrdTwoFooterText}>
                            <FaAddressBook size={15} style={{ marginRight: '8px' }} />JOHN SMITH
                        </small>
                    </p>
                    <p className="card-text">
                        <small className={"text-muted " + styles.hCrdTwoFooterText}>
                            <FaRegFolder size={15} style={{ marginRight: '8px' }} />BLOG
                        </small>
                    </p>

                    <p className="card-text">
                        <small className={"text-muted " + styles.hCrdTwoFooterText}>
                            <BsChat size={15} style={{ marginRight: '8px' }} />0
                        </small>
                    </p>
                </div>
                <p className={"card-text " + styles.hCrdTwoDes}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect...
                </p>
            </div>
            <div className={"card-footer " + styles.HcardTwoFooter}>
                <button className={`${styles.BtnOne} ${styles.buttonSetUp}`}>Read More</button>
            </div>
        </div>
    )
}
