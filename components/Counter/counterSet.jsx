import React from 'react'
import styles from './counterSet.module.scss'
import VisibilitySensor from "react-visibility-sensor";
import CountUp from 'react-countup';

export default function CounterSet(props) {
    return (
        <div className='container-xxl'>
            <div className={'card shadow-sm bg-body ' + styles.CrdSetup}>
                <div className='card-body'>
                    <div className={"row " + styles.CrdContentSet}>
                        {props?.setCmp?.value?.map((item, index) => {
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
    )
}
