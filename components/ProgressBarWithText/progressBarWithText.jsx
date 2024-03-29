import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'
import styles from './progressBarWithText.module.scss'

export default function ProgressBarWithText(props) {
   // console.log(props)
    return (
        <div className='container-fluid p-0'>
            <div style={{
                backgroundImage: `url(${props?.setCmp?.AboutUsThreeSectionTwo?.backgroundImage?.value})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}>
                <div className={'container-xxl ' + styles.containerPadding}>
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div className={styles.title}>
                                {props?.setCmp?.headingWithDescriptio?.Heading?.value}
                            </div>
                            <p className={styles.content}
                             dangerouslySetInnerHTML={{
                                __html: props?.setCmp?.headingWithDescriptio?.descriptionOne?.value,
                              }}
                            
                            >
                               
                            </p>
                            <p className={styles.content}
                             dangerouslySetInnerHTML={{
                                __html: props?.setCmp?.headingWithDescriptio?.descriptionTwo?.value,
                              }}
                            
                            >
                               
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className={styles.progressContainer}>
                                {props?.setCmp?.ProgressBar?.value?.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className='d-flex justify-content-between'>
                                                <div className={styles.progressHeading}>
                                                    {item?.Heading?.value}
                                                </div>
                                                <div className={styles.progressHeading}>
                                                    {item?.progressBarValue?.value}%
                                                </div>
                                            </div>
                                            <ProgressBar barContainerClassName={styles.containerBar} isLabelVisible={false} completed={item?.progressBarValue?.value} bgColor="$color_text_light_one" height="7px" baseBgColor="$color_text_light_one2b" transitionDuration="4s"
                                                transitionTimingFunction="ease"
                                                animateOnRender />
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
