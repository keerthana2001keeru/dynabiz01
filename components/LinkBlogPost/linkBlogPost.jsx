import React from 'react'
import styles from './linkBlogPost.module.scss'
import { FaLink } from 'react-icons/fa';

export default function LinkBlogPost() {
    return (
        <div className='container'>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                    <FaLink className={styles.icon} />
                </div>
                <div className="flex-grow-1 ms-3">
                    <div className={styles.titleSetup}>
                        LINK POST FORMAT
                    </div>
                    <div className={styles.desSetup}>
                        This will lead you to http://goodlayers.com
                    </div>
                </div>
            </div>
        </div>
    )
}
