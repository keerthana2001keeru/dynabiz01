import React from 'react'
import styles from './jobDetailsSection.module.scss'
import { FaArrowRight } from 'react-icons/fa'
import AcoordionWithListContent from '../AcoordionWithListContent/acoordionWithListContent'

export default function JobDetailsSection(props) {

  //console.log(props?.setCmp)
    return (
        <div className='container-fluid '>
            <div className={"row " + styles.contentSet}>
                <div className={"col-12 col-md-4"}>
                    <div className={styles.leftContentSet}>
                        <div className={styles.mainTitle}>
                        {item?.jobTitle}
                            {props?.setCmp?.jobTitle}
                        </div>
                        <div className={styles.subTitle}>
                            {props?.setCmp?.postedOn}
                        </div>
                        <div className={styles.submitSet}>
                            {props?.setCmp?.linkText} <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div className={styles.mainTitleTwo}>
                        {props?.setCmp?.detailTitle}
                    </div>
                    <p className={styles.paragraphSection}>
                        {props?.setCmp?.contentOne}
                    </p>
                    <p className={styles.paragraphSection}>
                        {props?.setCmp?.contentTwo}
                    </p>
                    <div className={styles.accordionSetup}><AcoordionWithListContent setCmp={props?.setCmp?.accordionSet} /></div>
                </div>
            </div>
        </div>
    )
}
