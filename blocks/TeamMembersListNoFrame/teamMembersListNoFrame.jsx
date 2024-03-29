import React from 'react'
import styles from './teamMembersListNoFrame.module.scss'
import MemberCard from '../../components/MemberCard/memberCard'




export default function TeamMembersListNoFrame(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    return (
        <div className='container-xxl'>
            <div className={styles.BlkContainer}>
                <div className={styles.headSection}>
                    <h2 className={styles.sectionTitle}>{HomeOneValue?.elements?.TeamSection?.heading?.value}
                    </h2>
                    <hr className={styles.tDivider} />
                </div>
                <div className="row mx-auto">
                    {HomeOneValue?.elements?.TeamMemberCards?.value?.map((item, index) => {
                        return (
                            <div className="col-12 col-lg-4 col-md-6 pb-4" key={index}>
                                <MemberCard setCmp={item} setStyle={HomeOneValue?.elements?.TeamMemberCards?.style} />
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
