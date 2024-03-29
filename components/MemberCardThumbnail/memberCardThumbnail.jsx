import React from 'react'
import styles from './memberCardThumbnail.module.scss'
import { FaFacebookF, FaGooglePlusG, FaPinterestP, FaTwitter } from 'react-icons/fa'

export default function MemberCardThumbnail(props) {
   // console.log(props?.setCmp)
    return (
        <div className='container-fluid p-0'>
            <div className={"card text-$color_text_light_one " + styles.cards}>
                <div className={styles.membercrdZoom}>
                    <img src={props?.setCmp?.image?.value} className={"card-img " + styles.Crdimg} alt="..." />
                </div>
                <div className={styles.cardImgOverlay}>
                    <h5 className={styles.title}>{props?.setCmp?.title?.value}</h5>
                    <p className={styles.subTitle}>
                        {props?.setCmp?.designation?.value}</p>
                    {/* {props?.setCmp?.socialLogos?.value ?  */}
                    <div className={'d-flex'}>
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
        </div>
    )
}
