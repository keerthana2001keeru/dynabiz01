import React from 'react'
import styles from './addressWithMap.module.scss'
import { FaPhoneAlt, FaLocationArrow, FaRegEnvelope } from 'react-icons/fa';

export default function AddressWithMap() {
    return (
        <div className='container-fluid p-0'>
            <div className="row">
                <div className={styles.topContainer}>
                    <div className={styles.titleAddress}>Location</div>
                    <hr className={styles.tmDivider}></hr>

                    <div className={styles.contentMain}>
                        4 apt. Flawing Street. The Grand Avenue.
                        Liverpool, UK 33342
                    </div>
                    <div>
                        <span>
                            <FaRegEnvelope /> <span className={styles.contentMainTwo}>contact@infinitewptheme.com</span>
                        </span>
                    </div>
                    <span>
                        <FaPhoneAlt /> <span className={styles.contentMainTwo}>+1-3524-3356</span>
                    </span>
                </div>
                <div className={styles.topTwoContainer}>
                    <div className={styles.titleAddress}>Map</div>
                    <hr className={styles.tmDivider}></hr>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2561378465903!2d76.86874704966185!3d8.571352293808934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf639dfe4d9f%3A0x979d0901f19402d6!2sSHASTHA%20SYSTEMS%20AND%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1666326304311!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapStyles}></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
