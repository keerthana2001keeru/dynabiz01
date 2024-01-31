import React from 'react'
import styles from './homecardOne.module.scss'
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import Link from 'next/link';


export default function HomeCardOne(props) {
   // console.log(props)
    return (
        <section className='sec-mar'>
        <div className={"card " + styles.hCrdSetup} >
            <div className={styles.HcrdOneImgZoom}>
                <img src={props?.setCmp?.CardImage?.value} className={"card-img-top " + styles.Crdimg} alt="..." />
                <div className={styles.overlaySearch}>
                    <FaSearch />
                </div>
            </div>
            <div className={"card-body " + styles.hCrdBody}>
                <h5 className={"card-title " + styles.hCrdTitle}>{props?.setCmp?.Heading?.value}</h5>
               <p className={"card-text " + styles.hCrdDes}>{props?.setCmp?.Description?.value}</p>
               {props?.setCmp?.cardLinkText?.value && (
               <Link
                    href={
                        props?.setCmp?.cardLink?.urlType == "R"
                        ? "#" + props?.setCmp?.cardLink?.value || ""
                        : props?.setCmp?.cardLink?.value || ""
                    }
                    legacyBehavior
                    target={props?.setCmp?.cardLink?.urlType == "E" ? "_blank" : ""}
                  >
               
            
                    <div className={styles.hCrdLink}>{props?.setCmp?.cardLinkText?.value} <FaArrowRight style={{ paddingLeft: '5px' }} /></div>
                </Link>
               )}
            </div>
        </div>
        </section>
    )
}
