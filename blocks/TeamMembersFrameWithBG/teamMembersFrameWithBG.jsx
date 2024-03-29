import React from 'react'
import MemberCard from '../../components/MemberCard/memberCard'
import styles from './teamMembersFrameWithBG.module.scss'

export default function TeamMembersFrameWithBG(props) {
    return (
        <div className='container-fluid p-0'>
            <div className={styles.overlayMain}>
                <div className={styles.overlay}></div>
                <div className={styles.bgImage} style={{
                    backgroundImage: "url('/uploads/pexels-photo-264594.jpeg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundAttachment: 'fixed',
                }}>
                    <div className={styles.headingGrpSetup}>
                        <div className='text-center'>

                            <div className={styles.heading}>
                                Personnel 3 Columns
                            </div>
                            <div className={styles.smallHeading}>
                                Without Excerpt
                            </div>
                            <hr className={styles.tmDivider} />
                        </div>
                        <div className={"row mx-auto " + styles.visibleSetup}>
                            {props?.setCmp?.map((item) => {
                                return (
                                    <div className="col-12 col-md-4 pb-4">
                                        <MemberCard setCmp={item} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
