import React from 'react'
import MemberCard from '../../components/MemberCard/memberCard'
import styles from './teamMembersNoFrameWithBG.module.scss'


export default function TeamMembersNoFrameWithBG(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }
   // console.log(HomeOneValue)
    return (
        <div className='container-fluid p-0'>
            <div className={styles.overlayMain}>
                <div className={styles.overlay}></div>
                <div className={styles.bgImage} style={{
                    backgroundImage: `url(${HomeOneValue?.elements?.TeamSection?.BackgroundImage?.value})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundAttachment: 'fixed',
                }}>
                    <div className={styles.headingGrpSetup}>
                        <div className='text-center'>
                            <div className={styles.smallHeading}>
                                {HomeOneValue?.elements?.TeamSection?.Subheading?.value}
                            </div>
                            <div className={styles.heading}>
                                {HomeOneValue?.elements?.TeamSection?.heading?.value}
                            </div>
                            <hr className={styles.tmDivider} />
                        </div>

                        <div className={"row " + styles.visibleSetup}>
                            {HomeOneValue?.elements?.TeamMemberCards?.value?.map((item, index) => {
                                return (
                                    <div className={HomeOneValue?.elements?.TeamMemberCards?.value?.length < 5 ? "col-12 col-md-3 p-0 m-0" : "col-12 col-md-4 p-3 m-0"} key={index}>
                                        <MemberCard setCmp={item} setStyle={HomeOneValue?.elements?.TeamMemberCards?.style} />
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
