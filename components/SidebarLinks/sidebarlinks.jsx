import React, { useState } from 'react'
import Link from 'next/link';
import styles from './sidebarlink.module.scss';
import { FaArrowRight, FaRegFilePdf } from 'react-icons/fa';


export default function Sidebarlinks() {
    const [isActive, setActive] = useState("");

    return (
        <div className='container-fluid p-0'>
            <div className={styles.sectionTitle}>Our Services</div>
            <div className="list-unstyled mt-4 mb-5">
                <p className='linkPadding'>
                    <Link href="">
                        <span className={styles.iconVisible}>
                            <FaArrowRight className={isActive == 'Capital Markets' ? `${styles.activeIcon}` : styles.hiddenIcon} />
                            <span className={isActive == 'Capital Markets' ? `${styles.active}` : `${styles.linkItems}`} onClick={() => setActive('Capital Markets')}>Capital Markets</span>
                        </span>
                    </Link>
                </p>
                <p className='linkPadding'>
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
                </p>
            </div>

            <div className={"card " + styles.cardstyle}>
                <div className={styles.cardbody}>
                    <h5 className={styles.crdTitle}>GET THE BROCHURE <FaRegFilePdf className={styles.fileIcon} /> </h5>

                    <p className={styles.crdtext}>Download the pdf file of latest update for this service.</p>
                </div>
            </div>

        </div>
    )
}
