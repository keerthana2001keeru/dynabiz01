import React from 'react'
import styles from './breadcrumb.module.scss';

export default function Breadcrumb() {
    return (
        <div className='container-fluid p-0'>
            <nav className={`${styles.breadcrumb} ${styles.clear}`}>
                <ul>
                    <li className={styles.item}>
                        Financity
                    </li>
                    <li className={styles.item}>
                        Our Services
                    </li>
                    <li className={styles.item}>
                        Capital Markets
                    </li>
                </ul>
            </nav>
        </div>
    )
}
