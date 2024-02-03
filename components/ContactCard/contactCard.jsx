import React from 'react'
import styles from './contactCard.module.scss'
import { FaPhoneAlt, FaRegEnvelopeOpen } from 'react-icons/fa';


export default function ContactCard() {
    return (
        <div className='container-fluid p-0'>
            <div className={"card " + styles.cardstyle}>
                <div className={styles.cardbody}>
                    <h5 className={styles.crdTitle}>Need Help ?</h5>

                    <p className={styles.crdtext}>Please feel free to contact us. We will get back to you with 1-2 business days. Or just call us now</p>
                    <div className={styles.Contentsubset}>
                        <div className={styles.setStylePheEmail}><FaPhoneAlt className={styles.Icon} /> +1-3454-5678-77</div>
                        <div className={styles.setStylePheEmail}><FaRegEnvelopeOpen className={styles.Icon} />Sales@GoodLayers.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
