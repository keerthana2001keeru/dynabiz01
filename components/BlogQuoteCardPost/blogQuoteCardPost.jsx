import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import styles from './blogQuoteCardPost.module.scss'

export default function BlogQuoteCardPost() {
    return (
        <div className={'card ' + styles.HcardTwoSetUp}>
            <div className={"row " + styles.contentStyle}>
                <div >
                    <FaQuoteLeft className={styles.icon} />
                </div>
                <div className={"align-items-center " + styles.description}>
                    {/* <p className={styles.contentStyle}> */}
                    The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack.
                    {/* </p> */}
                    <p className={styles.endText}>
                        - Oga Mandino
                    </p>
                </div>

            </div>
        </div>

    )
}
