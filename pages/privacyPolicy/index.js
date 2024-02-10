
import React from 'react'


import TeamListLayout from '../../layouts/TeamListLayout/teamListLayout'
import PrivacyPolcy from '../../blocks/privacyPolicy/privacyPolicy';


const topBanner =
{
    bgImage: '/uploads/about-team-bg.jpg',
    title: '',
    subTitle: '',
    overlay: false,
    contentSection: 'sectionSetup'
}
export default function PrivacyPolicy(props) {
    const userSettings = props?.uiSettings;
    return (
        <>
      <PrivacyPolcy/>
        </>
    )
}
PrivacyPolicy.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <TeamListLayout uiSettings={userSetting}>
        {page}
    </TeamListLayout>
    )
}

