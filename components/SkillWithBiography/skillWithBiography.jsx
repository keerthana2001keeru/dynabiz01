import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'
import styles from './skillWithBiography.module.scss'


const exper = [
    {
        WorkExpdate: '2013-Present',
        company: 'CTO, Senior Software Engineer of Apple Co.'
    },
    {
        WorkExpdate: '2008-2013',
        company: 'Senior Software Development, Project Manager, Cisco Network'
    },
    {
        WorkExpdate: '2000-2008',
        company: 'Team Leader, Software Design and Development, Asus'
    },
    {
        WorkExpdate: '1997-2000',
        company: 'Massachusetts Institute of Technology, Computer Engineering'
    }
]
export default function SkillWithBiography() {
    return (
        <div className='container-fluid p-0'>
            <div className={"row " + styles.mainContainerSet}>
                <div className="col-12 col-md-6">
                    <div className={styles.mainTitle}>
                        BIOGRAPHY
                    </div>
                    <p className={styles.mainContent}>
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment. I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth. Thousand unknown plants are noticed by me. When I hear the buzz of the little world among the stalks, and grow familiar with the countless. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                    </p>
                </div>
                <div className={"col-12 col-md-6 " + styles.progressSection}>
                    <div className={styles.mainTitle}>
                        SKILLS
                    </div>
                    <div>
                        <div className={styles.progressContainer}>
                            <div className='d-flex justify-content-between'>
                                <div className={styles.progressHeading}>
                                    PHOTOGRAPHY
                                </div>
                                <div className={styles.progressHeading}>
                                    85%
                                </div>
                            </div>
                            <ProgressBar barContainerClassName={styles.containerBar} isLabelVisible={false} completed={85} bgColor="$color_bg_primary_dark9c" height="7px" baseBgColor="#b7bfca9c" transitionDuration="4s"
                                transitionTimingFunction="ease"
                                animateOnRender />
                            <div className='d-flex justify-content-between'>
                                <div className={styles.progressHeading}>
                                    ANIMATION
                                </div>
                                <div className={styles.progressHeading}>
                                    100%
                                </div>
                            </div>
                            <ProgressBar barContainerClassName={styles.containerBar} isLabelVisible={false} completed={100} bgColor="$color_bg_primary_dark9c" height="7px" baseBgColor="#b7bfca9c" transitionDuration="4s"
                                transitionTimingFunction="ease"
                                animateOnRender />
                            <div className='d-flex justify-content-between'>
                                <div className={styles.progressHeading}>
                                    CODING SKILL
                                </div>
                                <div className={styles.progressHeading}>
                                    90%
                                </div>
                            </div>
                            <ProgressBar barContainerClassName={styles.containerBar} isLabelVisible={false} completed={90} bgColor="$color_bg_primary_dark9c" height="7px" baseBgColor="#b7bfca9c" transitionDuration="4s"
                                transitionTimingFunction="ease"
                                animateOnRender />
                            <div className='d-flex justify-content-between'>
                                <div className={styles.progressHeading}>
                                    WORDPRESS
                                </div>
                                <div className={styles.progressHeading}>
                                    97%
                                </div>
                            </div>
                            <ProgressBar barContainerClassName={styles.containerBar} isLabelVisible={false} completed={97} bgColor="$color_bg_primary_dark9c" height="7px" baseBgColor="#b7bfca9c" transitionDuration="4s"
                                transitionTimingFunction="ease"
                                animateOnRender />
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row " + styles.mainContainerSetTwo}>
                <div className={styles.mainTitleTwo}>
                    CHRONOLOGY
                </div>
                <div>
                    {exper.map((item) => {
                        return (
                            <div className={styles.chronologySection}>
                                <div className={styles.workPlace}>
                                    {item?.WorkExpdate}
                                </div>
                                <div className={styles.workCompny}>
                                    {item?.company}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
