import React from 'react'
import PersonnelDetailBlk from '../../blocks/PersonnelDetailBlk/personnelDetailBlk'
import Personnels from '../../layouts/MemberDetail/personnel'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'

const topBanner =
{
    bgImage: '/uploads/single-blog-title.jpg',
    overlay: true,
    contentSection: 'sectionSetup'
}
const memberData = {
    Mimage: '/uploads/personnel-1-400x310.jpg',
    Mname: 'PAUL WALKER',
    designation: 'Chief Executive Officer'
}
export default function Personnel(props) {
    const userSettings = props?.uiSettings;
    return (
        <div>
            <PersonnelDetailBlk />
        </div>
    )
}
Personnel.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <Personnels setCmp={topBanner} setMember={memberData} uiSettings={userSetting}>
            {page}
        </Personnels>
    )
}

