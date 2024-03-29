import React from 'react'
import styles from './titleWithUlListContentBG.module.scss'
import { FaCheck } from 'react-icons/fa'

export default function TitleWithUlListContentBG(props) {
    return (
        <div className='container-fluid p-0'>
            <div className='row'>
                <div className="col-md-6 col-sm-12" style={{ backgroundColor: '$color_bg_primary_dark' }}>
                    <div className={styles.HfiveContentGrpTwo}>
                        <h2 className={styles.hfiveSecTitle}>{props?.setCmp?.ExpertSection?.heading?.value}</h2>
                        <h5 className={styles.hfiveSecondDes}
                          dangerouslySetInnerHTML={{
                            __html: props?.setCmp?.ExpertSection?.subText?.value,
                          }}
                        
                        
                        >
                            
                            </h5>
                        <ul className="list-unstyled">
                            {props?.setCmp?.ExpertSectionTextList?.value?.map((item, index) => {
                                return (
                                    <li className={styles.hFiveUlItemSetup} key={index}>
                                        <FaCheck style={{ marginRight: '6px' }} size={10} />
                                        {item?.Content?.value}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className={"col-md-6 col-sm-12 " + styles.bgimageSetup} style={{
                    backgroundImage: `url(${props?.setCmp?.ExpertSection?.backgroundImage?.value})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: 'cover',
                }}>

                </div>
            </div>
        </div>
    )
}
