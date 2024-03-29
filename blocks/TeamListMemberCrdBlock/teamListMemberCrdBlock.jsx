import React from 'react'
import styles from './teamListMemberCrdBlk.module.scss'
import MemberCardWithFrame from '../../components/MemberCardWithFrame/memberCardWithFrame'


const memberList = [
    {
        image: '/uploads/personnel-1-400x310.jpg',
        title: 'Paul Walker',
        designation: 'Chief Executive Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel'
    },
    {
        image: '/uploads/personnel-2-400x310.jpg',
        title: 'Jeanette Kingston',
        designation: 'Vice President',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel'
    },
    {
        image: '/uploads/personnel-3-400x310.jpg',
        title: 'John Smithy',
        designation: 'Chief Financial Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel'
    },
    {
        image: '/uploads/personnel-4-400x310.jpg',
        title: 'Linda Kloe',
        designation: 'Senior Engineer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel'
    },
    {
        image: '/uploads/personnel-5-400x310.jpg',
        title: 'Ricardo Gomez',
        designation: 'HR Manager',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel'
    },
    {
        image: '/uploads/personnel-6-400x310.jpg',
        title: 'Jeneth Kings',
        designation: 'Chief Technology Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel'
    }
]
export default function TeamListMemberCrdBlock(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    return (
        <div className='container-fluid'>
            <div style={{
                backgroundImage: `url(${HomeOneValue?.elements?.TeamSection?.backgroundImage?.value})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                zIndex: '2'
            }}>
                <div className='container-xxl'>
                    <div className="text-center">
                        <h2 className={styles.SectionTitle}>{HomeOneValue?.elements?.TeamSection?.heading?.value}
                        </h2>
                        <h5 className={styles.SectionSubTitle}>{HomeOneValue?.elements?.TeamSection?.subHeading?.value}
                        </h5>
                    </div>
                    <div className="row">
                        {HomeOneValue?.elements?.TeamMemberCards?.value?.map((item, index) => {
                            return (
                                <div className='col-12 col-lg-4 col-md-6' key={index} ><MemberCardWithFrame setCmp={item} /></div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
