import React, { useEffect } from 'react'
import JobDetailsSection from '../../components/JobDetailsSection/jobDetailsSection'
import {CareerService} from 'sk-career-client-sdk'
import AcoordionWithListContent from '../../components/AcoordionWithListContent/acoordionWithListContent'
import { FaArrowRight } from 'react-icons/fa'
import styles from '../../components/JobDetailsSection/jobDetailsSection.module.scss'
import Link from 'next/link'

const jobDetail = [
    {
        jobTitle: 'Finance Back Office Supervisor',
        postedOn: 'Posted on : July 30, 2017',
        linkText: 'SUBMIT RESUME',
        detailTitle: 'Overview',
        contentOne: 'Learn more about who we are and what we do… Finance BackOffice Team is a part of Finance Operations Unit. BOFF is dedicated to supporting the Vendor Master File of Agoda by screening, controlling, evaluating with providing support to ensure compliance with Finance and Company policy; by mitigating risk; and by promoting the financial health of Agoda.',
        contentTwo: 'BOFF is responsible for oversight of vendor’s Agoda, including efficient and accurate vendor registration and evaluation processing, fraudulent reporting, coordinate internal/external audit and interact within organization for improving work procedures. Are you interested?',
        accordionSet: [
            {
                accordionTitle: 'Responsibilities',
                accordionId: 'accordionExampleTwo',
                accordionHid: "headingOne",
                accordionTid: "collapseOne",
                accordionContents: [
                    {
                        textOne: ' Increase operational efficiency within the Business Development department.'
                    },
                    {
                        textTwo: '  Recruit, develop, manage, retain, lead staff to ensure adherence to all targets and KPIs.'
                    },
                    {
                        textThree: ' Support and optimize agoda business development tools.'
                    },
                    {
                        textFour: '  Ensure good and pro-active team work with subordinates, colleagues and superiors.'
                    },
                    {
                        textFive: ' Share and seek out best practices and knowledge.'
                    }
                ]



            },
            {
                accordionTitle: 'Qualifications',
                accordionId: 'accordionExampleTwo',
                accordionHid: "headingTwo",
                accordionTid: "collapseTwo",
                accordionContents: [
                    {
                        textOne: 'Bachelor’s / Master’s Degree in Accounting/ Finance or Business Administration'
                    },
                    {
                        textTwo: ' At least 4 years of work experience in audit, finance or consulting position'
                    },
                    {
                        textThree: ' Audit background is preferable'
                    },
                    {
                        textFour: '  Positive attitude with willingness to learn new things and get more challenging tasks'
                    }
                ]

            }
        ]
    },
    {
        jobTitle: 'Senior Supply Innovation Manager',
        postedOn: 'Posted on : July 30, 2017',
        linkText: 'SUBMIT RESUME',
        detailTitle: 'Overview',
        contentOne: 'Learn more about who we are and what we do… Finance BackOffice Team is a part of Finance Operations Unit. BOFF is dedicated to supporting the Vendor Master File of Agoda by screening, controlling, evaluating with providing support to ensure compliance with Finance and Company policy; by mitigating risk; and by promoting the financial health of Agoda.',
        contentTwo: 'BOFF is responsible for oversight of vendor’s Agoda, including efficient and accurate vendor registration and evaluation processing, fraudulent reporting, coordinate internal/external audit and interact within organization for improving work procedures. Are you interested?',
        accordionSet: [
            {
                accordionTitle: 'Responsibilities',
                accordionId: 'accordionExample',
                accordionHid: "headingThree",
                accordionTid: "collapseThree",
                accordionContents: [
                    {
                        textOne: ' Increase operational efficiency within the Business Development department.'
                    },
                    {
                        textTwo: '  Recruit, develop, manage, retain, lead staff to ensure adherence to all targets and KPIs.'
                    },
                    {
                        textThree: ' Support and optimize agoda business development tools.'
                    },
                    {
                        textFour: '  Ensure good and pro-active team work with subordinates, colleagues and superiors.'
                    },
                    {
                        textFive: ' Share and seek out best practices and knowledge.'
                    }
                ]



            },
            {
                accordionTitle: 'Qualifications',
                accordionId: 'accordionExample',
                accordionHid: "headingFour",
                accordionTid: "collapseFour",
                accordionContents: [
                    {
                        textOne: 'Bachelor’s / Master’s Degree in Accounting/ Finance or Business Administration'
                    },
                    {
                        textTwo: ' At least 4 years of work experience in audit, finance or consulting position'
                    },
                    {
                        textThree: ' Audit background is preferable'
                    },
                    {
                        textFour: '  Positive attitude with willingness to learn new things and get more challenging tasks'
                    }
                ]

            }
        ]
    },
]
export default function CareerBlkTwoJobDetail(props) {
    const [jobData, setJobData] = React.useState({
        loading: true,
        data: null,
        error: null
      })
    // console.log("jobs",jobData);
      useEffect(() => {
        // getCarrerData();
        
        CareerService.getCarrerData().then(
          response => {
            
            if(response.data.status == 200){
              setJobData(prevState => ({...prevState, data: response?.data?.data?.data}))
              console.log("cc",jobData?.data)
            }
            else if(response.data.status == 203){
              setJobData(prevState => ({...prevState, data: null}))
            }
          }
        ).catch((error) => setJobData(prevState => ({...prevState, error: error})))
        .finally(() => setJobData(prevState => ({...prevState, loading: false})))
    
      }, [])
    

    return (
        <div>
            
            {jobData?.data?.map((item, index) => {
                return (
                    <div className='container-xxl mDivider' key={index}>
                        <div className='container-fluid '>
            <div className={"row " + styles.contentSet}>
                <div className={"col-12 col-md-4"}>
                    <div className={styles.leftContentSet}>
                        <div className={styles.mainTitle}>
                        {item?.jobTitle}
                            
                        </div>
                        <div className={styles.subTitle}>
                          {item?.postedOn}
                        </div>
                         <div className={styles.submitSet}>
                        <Link legacyBehavior href={"/career-detail?id=" +item.jobId}>
                            <a>
                            VIEW DETAILS
                            <FaArrowRight /></a>
                            </Link>
                        </div> 
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div className={styles.mainTitleTwo} >
                    OverView
                 
                    </div>
                    <p className={styles.paragraphSection}
                     dangerouslySetInnerHTML={{ __html: item?.jobDesc }}>
                        
                    </p>
                    <p className={styles.paragraphSection}>
                        {/* {props?.setCmp?.contentTwo} */}
                    </p>
                    <div className={styles.accordionSetup}><AcoordionWithListContent setCmp={props?.setCmp?.accordionSet} /></div>
                </div>
            </div>
        </div>
                    </div>
                )
            })}
        </div>
    )
}
