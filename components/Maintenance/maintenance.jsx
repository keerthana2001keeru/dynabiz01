import React from 'react'
import styles from './maintenance.module.scss'
import ProgressBar from "@ramonak/react-progress-bar";


export default function MaintenancePage(props) {

    return (
        <div className={styles.setContainer}>
            <div className={styles.overlay}></div>
            <div style={{
                backgroundImage: `url(${props?.setCmp[0]?.elements?.maintenance?.BackgroundImage?.value})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: '100vh'
                // backgroundAttachment: 'fixed'
            }}>
                <div className={styles.contentSet}>
                    <div className={styles.title}>
                        {props?.setCmp[0]?.elements?.maintenance?.Title?.value}
                    </div>
                    <div className={styles.subContent}> {props?.setCmp[0]?.elements?.maintenance?.subTitle?.value}</div>
                    <div className={styles.description}
                    
                    dangerouslySetInnerHTML={{
                        __html: props?.setCmp[0]?.elements?.maintenance?.description?.value,
                      }}
                    
                    
                    
                    ></div>
                    <ProgressBar borderRadius={'0px'} height={'30px'} barContainerClassName={styles.containerBar} completed={props?.setCmp[0]?.elements?.maintenance?.progress?.value} bgColor="black" transitionDuration="4s"
                        transitionTimingFunction="ease"
                        animateOnRender />
                </div>
            </div>
        </div>
    )
}
