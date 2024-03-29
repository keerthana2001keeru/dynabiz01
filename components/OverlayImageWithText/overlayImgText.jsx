import React from 'react'
import styles from './overlayimgtext.module.scss'

export default function OverlayImgText() {
    return (
        <div className='container-fluid p-0'>

            <div style={{ position: 'relative' }}>
                <div className={styles.overlay}></div>
                <div style={{
                    backgroundImage: "url('/uploads/shutterstock_15900814.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: 'cover',
                }}>

                    <div className={styles.textGroup}>
                        <p className={styles.titleText}>Analyze The Opportunities</p>
                        <div className={styles.description}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.</div>
                    </div>
                </div>
            </div>
        </div >
    )
}
