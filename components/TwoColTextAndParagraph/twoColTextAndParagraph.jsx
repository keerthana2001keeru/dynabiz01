import React from 'react'
import styles from './twoColTextAndParagraph.module.scss'

export default function TwoColTextAndParagraph(props) {
    return (
        <div className='container-fluid p-0'>
            <div className="row">
                <div className="col-12 col-md-5">
                    <div className={styles.title}>
                        {props?.setCmp?.Heading?.value}
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <p className={styles.content} dangerouslySetInnerHTML={{
                            __html: props?.setCmp?.descriptionOne?.value,
                          }}>
                        {/* <span className={styles.highlightContent}>
                            {props?.setCmp?.descriptionOneHighlightText?.value}</span> */}
                             {/* {props?.setCmp?.descriptionOne?.value} */}
                    </p>
                    {/* <p className={styles.content}>{props?.setCmp?.descriptionTwo?.value}</p> */}
                </div>
            </div>
        </div>
    )
}
