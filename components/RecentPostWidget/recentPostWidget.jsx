import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import styles from './recentPostWidget.module.scss'

export default function RecentPostWidget(props) {
   // console.log(props?.setCmp)
    const [isActive, setActive] = useState("");
    return (
        <div className={styles.sectionSetup}>
            <div className={styles.title}>
                Recent Posts
            </div>
            <div className="list-unstyled mt-4 mb-5">
                {props?.setCmp?.map((item) => {
                    return (
                        <p className='linkPadding'>
                            <Link href="">
                                <span className={styles.iconVisible}>
                                    <FaArrowRight className={isActive == 'Capital Markets' ? `${styles.activeIcon}` : styles.hiddenIcon} />
                                    <span className={isActive == 'Capital Markets' ? `${styles.active}` : `${styles.linkItems}`} onClick={() => setActive('Capital Markets')}>{item.text}</span>
                                </span>
                            </Link>
                        </p>
                    )
                })}

                {/* <p className='linkPadding'>
                    <Link href="">
                        <span className={styles.iconVisible}>
                            <FaArrowRight className={isActive == 'Insurance' ? `${styles.activeIcon}` : styles.hiddenIcon} />
                            <span className={isActive == 'Insurance' ? `${styles.active}` : `${styles.linkItems}`} onClick={() => setActive('Insurance')}>Insurance</span>
                        </span>
                    </Link>
                </p>
                <p className='linkPadding'>
                    <Link href="">
                        <span className={styles.iconVisible}>
                            <FaArrowRight className={isActive == 'Blockchain' ? `${styles.activeIcon}` : styles.hiddenIcon} />
                            <span className={isActive == 'Blockchain' ? `${styles.active}` : `${styles.linkItems}`} onClick={() => setActive('Blockchain')}>Blockchain</span>
                        </span>
                    </Link>
                </p>
                <p className='linkPadding'>
                    <Link href="">
                        <span className={styles.iconVisible}>
                            <FaArrowRight className={isActive == 'Technology Advisory' ? `${styles.activeIcon}` : styles.hiddenIcon} />
                            <span className={isActive == 'Technology Advisory' ? `${styles.active}` : `${styles.linkItems}`} onClick={() => setActive('Technology Advisory')}> Technology Advisory</span>
                        </span>
                    </Link>
                </p>
                <p className='linkPadding'>
                    <Link href="">
                        <span className={styles.iconVisible}>
                            <FaArrowRight className={isActive == 'Finance & Risk' ? `${styles.activeIcon}` : styles.hiddenIcon} />
                            <span className={isActive == 'Finance & Risk' ? `${styles.active}` : `${styles.linkItems}`} onClick={() => setActive('Finance & Risk')}>Finance & Risk</span>
                        </span>
                    </Link>
                </p>
                <p className='linkPadding'>
                    <Link href="">
                        <span className={styles.iconVisible}>
                            <FaArrowRight className={isActive == 'Portfolio Management' ? `${styles.activeIcon}` : styles.hiddenIcon} />
                            <span className={isActive == 'Portfolio Management' ? `${styles.active}` : `${styles.linkItems}`} onClick={() => setActive('Portfolio Management')}>Portfolio Management</span>
                        </span>
                    </Link>
                </p> */}
            </div>

        </div>
    )
}
