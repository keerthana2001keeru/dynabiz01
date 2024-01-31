import React from 'react'
import styles from './homecardTwo.module.scss'
import { FaAddressBook, FaRegFolder } from 'react-icons/fa';
import Link from 'next/link';


export default function HomeCardTwo(props) {
    return (
        <section className='sec-mar'>
        <div className={"card mb-3 shadow mb-5 bg-body rounded " + styles.HcardTwoSetUp}>
            <div className={styles.HcrdTwoImgZoom}><img src={props?.setCmp?.CardImage?.value} className={"card-img-top " + styles.Crdimg} alt="..." /></div>
            <div className={"card-body " + styles.hCrdTwoContentGrp}>
                <p className="card-text" style={{ marginBottom: '2px' }}><small className={"text-muted " + styles.hCrdTwoSubTitle}>{props?.setCmp?.SubHeading?.value}</small></p>
                <h5 className={"card-title " + styles.hCrdTwoTitle}>{props?.setCmp?.Heading?.value}
                </h5>
                <p className={"card-text " + styles.hCrdTwoDes} dangerouslySetInnerHTML={{
                            __html: props?.setCmp?.description?.value,
                          }}>
                  
                </p>
            </div>
            <div className={"card-footer " + styles.HcardTwoFooter}>
                <div className='row'>
                {props?.setCmp?.authorName?.value && (
                    <div className='col'>
                        <p className="card-text">
                       
                        <Link
                    href={
                        props?.setCmp?.AuthorPostLink?.urlType == "R"
                        ? "#" + props?.setCmp?.AuthorPostLink?.value || ""
                        : props?.setCmp?.AuthorPostLink?.value || ""
                    }
                    legacyBehavior
                    target={props?.setCmp?.AuthorPostLink?.urlType == "E" ? "_blank" : ""}
                  >

                                <small className={styles.hCrdTwoFooterText}>
                                    <FaAddressBook size={15} style={{ marginRight: '5px' }} />{props?.setCmp?.authorName?.value}
                                </small>
                            </Link>
                      
                        </p>
                    </div>  )}
                    {props?.setCmp?.postCategory?.value && (
                    <div className='col'>
                        <p className="card-text">

                        <Link
                    href={
                        props?.setCmp?.PostcategoryLink?.urlType == "R"
                        ? "#" + props?.setCmp?.PostcategoryLink?.value || ""
                        : props?.setCmp?.PostcategoryLink?.value || ""
                    }
                    legacyBehavior
                    target={props?.setCmp?.PostcategoryLink?.urlType == "E" ? "_blank" : ""}
                  >

                                <small className={styles.hCrdTwoFooterText}>
                                    <FaRegFolder size={15} style={{ marginRight: '5px' }} />{props?.setCmp?.postCategory?.value}
                                </small>
                            </Link>
                        </p>
                    </div>
                    )}
                </div>
            </div>
        </div>
        </section>
    )
}
