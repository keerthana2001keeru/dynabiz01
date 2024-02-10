import React from 'react'
import PersonnelBgclrCarouselNoFrame from '../../blocks/PersonnelBgclrCarouselNoFrame/personnelBgclrCarouselNoFrame'
import PersonnelCarouselNoFrame from '../../blocks/PersonnelWithCarouselNoFrame/personnelCarouselNoFrame'
import TeamMembersListNoFrame from '../../blocks/TeamMembersListNoFrame/teamMembersListNoFrame'
import TeamMembersNoFrameWithBG from '../../blocks/TeamMembersNoFrameWithBG/teamMembersNoFrameWithBG'
import TeamPlaneThumbnailFrameLayout from '../../layouts/Team/teamPlaneThumbnailFrameLayout'
import { MapBlock } from '../../components/componets-map'
import { getHttpService } from '../../utilities/http-service-helper';
import Head from 'next/head'

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
        cardStyle: 'cardsetup',
        cardBody: 'cardbody'
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
        cardStyle: 'cardsetup',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-3-400x310.jpg',
        title: 'John Smithy',
        designation: 'Chief Financial Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'title',
        subTitleStyle: 'subTitle',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetup',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-4-400x310.jpg',
        title: 'Linda Kloe',
        designation: 'Senior Engineer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'title',
        subTitleStyle: 'subTitle',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetup',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-5-400x310.jpg',
        title: 'Ricardo Gomez',
        designation: 'HR Manager',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'title',
        subTitleStyle: 'subTitle',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetup',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-6-400x310.jpg',
        title: 'Jeneth Kings',
        designation: 'Chief Technology Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'title',
        subTitleStyle: 'subTitle',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetup',
        cardBody: 'cardbody'
    }
]
const memberListTwo = [
    {
        image: '/uploads/personnel-1-400x310.jpg',
        title: 'Paul Walker',
        designation: 'Chief Executive Officer',
        ph: '',
        mail: '',
        titleStyle: 'titleTwo',
        subTitleStyle: 'subTitleTwo',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetupTwo',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-2-400x310.jpg',
        title: 'Jeanette Kingston',
        designation: 'Vice President',
        ph: '',
        mail: '',
        titleStyle: 'titleTwo',
        subTitleStyle: 'subTitleTwo',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetupTwo',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-3-400x310.jpg',
        title: 'John Smithy',
        designation: 'Chief Financial Officer',
        ph: '',
        mail: '',
        titleStyle: 'titleTwo',
        subTitleStyle: 'subTitleTwo',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetupTwo',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-4-400x310.jpg',
        title: 'Linda Kloe',
        designation: 'Senior Engineer',
        ph: '',
        mail: '',
        titleStyle: 'titleTwo',
        subTitleStyle: 'subTitleTwo',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetupTwo',
        cardBody: 'cardbody'
    }
]
const memberListThree = [
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
        cardStyle: 'cardsetupThree',
        cardBody: 'cardbody'
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
        cardStyle: 'cardsetupThree',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-3-400x310.jpg',
        title: 'John Smithy',
        designation: 'Chief Financial Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'title',
        subTitleStyle: 'subTitle',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetupThree',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-4-400x310.jpg',
        title: 'Linda Kloe',
        designation: 'Senior Engineer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'title',
        subTitleStyle: 'subTitle',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetupThree',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-5-400x310.jpg',
        title: 'Ricardo Gomez',
        designation: 'HR Manager',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'title',
        subTitleStyle: 'subTitle',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetupThree',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-6-400x310.jpg',
        title: 'Jeneth Kings',
        designation: 'Chief Technology Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'title',
        subTitleStyle: 'subTitle',
        phStyle: 'phone',
        mailStyle: 'mailSetup',
        cardStyle: 'cardsetupThree',
        cardBody: 'cardbody'
    }
]

const memberListFour = [
    {
        image: '/uploads/personnel-1-400x310.jpg',
        title: 'Paul Walker',
        designation: 'Chief Executive Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'titleTwo',
        subTitleStyle: 'subTitleTwo',
        phStyle: 'phoneTwo',
        mailStyle: 'mailSetupTwo',
        cardStyle: 'cardsetupThree',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-2-400x310.jpg',
        title: 'Jeanette Kingston',
        designation: 'Vice President',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'titleTwo',
        subTitleStyle: 'subTitleTwo',
        phStyle: 'phoneTwo',
        mailStyle: 'mailSetupTwo',
        cardStyle: 'cardsetupThree',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-3-400x310.jpg',
        title: 'John Smithy',
        designation: 'Chief Financial Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'titleTwo',
        subTitleStyle: 'subTitleTwo',
        phStyle: 'phoneTwo',
        mailStyle: 'mailSetupTwo',
        cardStyle: 'cardsetupThree',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-4-400x310.jpg',
        title: 'Linda Kloe',
        designation: 'Senior Engineer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'titleTwo',
        subTitleStyle: 'subTitleTwo',
        phStyle: 'phoneTwo',
        mailStyle: 'mailSetupTwo',
        cardStyle: 'cardsetupThree',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-5-400x310.jpg',
        title: 'Ricardo Gomez',
        designation: 'HR Manager',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'titleTwo',
        subTitleStyle: 'subTitleTwo',
        phStyle: 'phoneTwo',
        mailStyle: 'mailSetupTwo',
        cardStyle: 'cardsetupThree',
        cardBody: 'cardbody'
    },
    {
        image: '/uploads/personnel-6-400x310.jpg',
        title: 'Jeneth Kings',
        designation: 'Chief Technology Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleStyle: 'titleTwo',
        subTitleStyle: 'subTitleTwo',
        phStyle: 'phoneTwo',
        mailStyle: 'mailSetupTwo',
        cardStyle: 'cardsetupThree',
        cardBody: 'cardbody'
    }
]
export default function TeamPlainStyle(props) {
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P06?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P05?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | team "}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
        <div>
            {mainContent}
            {/* <TeamMembersListNoFrame setCmp={memberList} /> */}
            {/* <TeamMembersNoFrameWithBG setCmp={memberListTwo} /> */}
            {/* <PersonnelBgclrCarouselNoFrame setCmp={memberListThree} /> */}
            {/* <PersonnelCarouselNoFrame setCmp={memberListFour} /> */}
        </div>
        </>
    )
}
TeamPlainStyle.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <TeamPlaneThumbnailFrameLayout uiSettings={userSetting}>
            {page}
        </TeamPlaneThumbnailFrameLayout>
    )
}

