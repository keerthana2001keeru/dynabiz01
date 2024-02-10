import React from 'react'
import MemberCardThumbnail from '../../components/MemberCardThumbnail/memberCardThumbnail'
import styles from './personnelThumbnailColNospace.module.scss'


const memberList = [
    {
        image: '/uploads/personnel-1-400x310.jpg',
        title: 'Paul Walker',
        designation: 'Chief Executive Officer',
        socialLogos: false
    },
    {
        image: '/uploads/personnel-2-400x310.jpg',
        title: 'Jeanette Kingston',
        designation: 'Vice President',
        socialLogos: false
    },
    {
        image: '/uploads/personnel-3-400x310.jpg',
        title: 'John Smithy',
        designation: 'Chief Financial Officer',
        socialLogos: false
    },
    {
        image: '/uploads/personnel-4-400x310.jpg',
        title: 'Linda Kloe',
        designation: 'Senior Engineer',
        socialLogos: false
    }
]


export default function PersonnelThumbnailColNospace(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

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
                                    <div className="col-12 col-md-3 p-0 m-0" key={index}>
                                        <MemberCardThumbnail setCmp={item} />
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
