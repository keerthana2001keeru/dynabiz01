import React from 'react'


import TeamListLayout from '../../layouts/TeamListLayout/teamListLayout'
import TermsAndConditions from '../../blocks/termsAndConditions/termsAndConditions'

const topBanner =
{
    bgImage: '/uploads/about-team-bg.jpg',
    title: '',
    subTitle: '',
    overlay: false,
    contentSection: 'sectionSetup'
}
export default function TermsOfUse(props) {
    const userSettings = props?.uiSettings;
    return (
        <>
          <TermsAndConditions/>
        </>
    )
}
TermsOfUse.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <TeamListLayout uiSettings={userSetting}>
        {page}
    </TeamListLayout>
    )
}

