import React from 'react'
import styles from './serviceMemCardSet.module.scss'
import MemberCard from '../../components/MemberCard/memberCard'


const memberList = [
    {
        image: '/uploads/personnel-1-400x310.jpg',
        title: 'Paul Walker',
        designation: 'Chief Executive Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'title',
        subTitleStyle: 'subTitle',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetup'
    },
    {
        image: '/uploads/personnel-2-400x310.jpg',
        title: 'Jeanette Kingston',
        designation: 'Vice President',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'title',
        subTitleStyle: 'subTitle',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetup'
    }
]

export default function ServiceMemCardSet() {
    return (
        <div className='container-fluid p-0'>
            <div className={styles.sectionStyle}>
                <p className={styles.heading}>Capital Markets Specialist</p>
                <div className="row">
                    {memberList.map((item) => {
                        return (
                            <div className="col pb-2">
                                <MemberCard setCmp={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
