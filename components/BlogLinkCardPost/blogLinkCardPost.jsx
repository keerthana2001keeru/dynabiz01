import React from 'react'
import { FaLink } from 'react-icons/fa'
import styles from './blogLinkCardPost.module.scss'

export default function BlogLinkCardPost() {
    return (
        <div className={'card shadow-sm bg-body rounded ' + styles.HcardTwoSetUp}>
            <div className='card-body'>
                <div className="row align-items-center">
                    <div className={styles.containerSet}>
                        <div className={styles.iconSetup}>
                            <FaLink className={styles.icon} />
                        </div>
                        <div >
                            <div className={styles.titleSetup}>
                                LINK POST FORMAT
                            </div>
                            <div className={styles.desSetup}>
                                This will lead you to http://goodlayers.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
