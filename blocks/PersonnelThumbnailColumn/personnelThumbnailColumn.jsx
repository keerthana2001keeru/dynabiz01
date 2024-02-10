import React from 'react'
import styles from './personnelThumbnailColumn.module.scss'
import MemberCardThumbnail from '../../components/MemberCardThumbnail/memberCardThumbnail'


const memberList = [
    {
        image: '/uploads/personnel-1-400x310.jpg',
        title: 'Paul Walker',
        designation: 'Chief Executive Officer',
        socialLogos: true
    },
    {
        image: '/uploads/personnel-2-400x310.jpg',
        title: 'Jeanette Kingston',
        designation: 'Vice President',
        socialLogos: true
    },
    {
        image: '/uploads/personnel-3-400x310.jpg',
        title: 'John Smithy',
        designation: 'Chief Financial Officer',
        socialLogos: true
    },
    {
        image: '/uploads/personnel-4-400x310.jpg',
        title: 'Linda Kloe',
        designation: 'Senior Engineer',
        socialLogos: true
    },
    {
        image: '/uploads/personnel-5-400x310.jpg',
        title: 'Ricardo Gomez',
        designation: 'HR Manager',
        socialLogos: true
    },
    {
        image: '/uploads/personnel-6-400x310.jpg',
        title: 'Jeneth Kings',
        designation: 'Chief Technology Officer',
        socialLogos: true
    }
]

export default function PersonnelThumbnailColumn(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    return (
        <div className='container'>
            <div className={styles.mainContainer}>
                <div className={"text-center " + styles.titleSetup}>
                    {HomeOneValue?.elements?.TeamSection?.heading?.value}
                </div>
                <div className="row">
                    {HomeOneValue?.elements?.TeamMemberCards?.value?.map((item, index) => {
                        return (
                            <div className="col-12 col-md-6 p-3" key={index}>
                                <MemberCardThumbnail setCmp={item} />
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
