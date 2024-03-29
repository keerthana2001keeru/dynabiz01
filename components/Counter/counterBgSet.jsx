import React from 'react'
import styles from './counterBgSet.module.scss'
import VisibilitySensor from "react-visibility-sensor";
import CountUp from 'react-countup';

export default function CounterBgSet(props) {
    return (
        <div className='container-fluid p-0'>
            <div style={{
                backgroundImage: `url(${props?.setCmp?.BackgroundImageCounter?.BackgroundImage?.value})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className='container-xxl'>
                    <div className={styles.containerSet}>
                        <div className={"row " + styles.CrdContentSet}>
                            {props?.setCmp?.StatusCounter?.value?.map((item, index) => {
                                return (
                                    <div className="col-12 col-md-3 text-center" key={index}>
                                        <h4 className={styles.CrdMainContent}>
                                            <CountUp start={item?.countStartRange?.value} end={item?.CountEndRange?.value} duration={2.5} decimals={0}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start}>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                        </h4>
                                        <h6 className={styles.CrdSubContent}>{item?.textContent?.value}</h6>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
