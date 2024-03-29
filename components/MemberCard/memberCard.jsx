import React from 'react'
import styles from './membercard.module.scss'
import { FaFacebookF, FaGooglePlusG, FaPinterestP, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'


export default function MemberCard(props) {
   // console.log(props)
    return (
        <div className='container-fluid p-0 '>
            {props?.setCmp?.image?.value&& (
            <div className={"card mx-auto " + styles[props?.setStyle?.cardStyle]}>
            
                <div className={styles.membercrdZoom}>
               
                    <img src={props?.setCmp?.image?.value} className={"card-img-top img-fluid " + styles.Crdimg} alt="..." />

                
                </div>
            
                <div className={styles[props?.setStyle?.cardBody]}>
                    <span className={styles[props?.setCmp?.title?.style?.titleStyle]}>{props?.setCmp?.title?.value}</span>
                    <p className={styles[props?.setCmp?.designation?.style?.subTitleStyle]}>{props?.setCmp?.designation?.value}</p>
                    <Link
                  href={
                    `tel:${props?.setCmp?.ph?.value}` ||
                    "#" }

                >
            
                    <div className={styles[props?.setCmp?.ph?.style?.phStyle]}>{props?.setCmp?.ph?.value}</div>
                    </Link>
                    <Link
                  href={
                    `mailto:${props?.setCmp?.mail?.value}` ||
                    "#" }

                >

                    <div className={styles[props?.setCmp?.mail?.style?.mailStyle]}>{props?.setCmp?.mail?.value}</div>
                    </Link>
                    {/* {props?.setCmp?.socialLogos ?  */}
                    
                    <div className={'d-flex pt-3'}>
                    {props?.fbLink?.value && (
                        <Link href={ props?.fbLink?.urlType == "R" ?  "#" + props?.fbLink?.value || ""
                      : props?.fbLink?.value || ""} 
                      legacyBehavior
                      >
                          <a target={props?.fbLink?.urlType == "E" ? "_blank" : ""}>
                          <FaFacebookF className={styles.iconsSetup} />
                          </a>
                        </Link>
                     )}

                      {props?.fbLink?.value && (
                        <Link href={ props?.fbLink?.urlType == "R" ?  "#" + props?.fbLink?.value || ""
                      : props?.fbLink?.value || ""} 
                      legacyBehavior
                      >
                          <a target={props?.fbLink?.urlType == "E" ? "_blank" : ""}>
                          <FaGooglePlusG className={styles.iconsSetup} />
                          </a>
                        </Link>
                     )}
                   {props?.fbLink?.value && (
                        <Link href={ props?.fbLink?.urlType == "R" ?  "#" + props?.fbLink?.value || ""
                      : props?.fbLink?.value || ""} 
                      legacyBehavior
                      >
                          <a target={props?.fbLink?.urlType == "E" ? "_blank" : ""}>
                          <FaPinterestP className={styles.iconsSetup} />
                          </a>
                        </Link>
                     )}

                     {props?.fbLink?.value && (
                        <Link href={ props?.fbLink?.urlType == "R" ?  "#" + props?.fbLink?.value || ""
                      : props?.fbLink?.value || ""} 
                      legacyBehavior
                      >
                          <a target={props?.fbLink?.urlType == "E" ? "_blank" : ""}>
                          <FaTwitter className={styles.iconsSetup} />
                          </a>
                        </Link>
                     )}

                       
                       
                      
                    </div>
                     {/* : ''} */}
                </div>
                
            </div>
                )}
        </div>
    )
}
