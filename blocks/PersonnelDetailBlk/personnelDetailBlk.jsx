import React from 'react'
import PersonnelContactInfo from '../../components/PersonnelContactInfo/personnelContactInfo'
import SkillWithBiography from '../../components/SkillWithBiography/skillWithBiography'

export default function PersonnelDetailBlk() {
    return (
        <div>
            <div className='container-xxl'>
                <SkillWithBiography />
            </div>
            <PersonnelContactInfo />
        </div>
    )
}
