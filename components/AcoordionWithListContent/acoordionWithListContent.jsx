import React from 'react'
import { FaRegDotCircle } from 'react-icons/fa'
import styles from './acoordionWithListContent.module.scss'

export default function AcoordionWithListContent(props) {
   // console.log(props?.setCmp)
    return (
        <div className='container-fluid p-0'>
            {props?.setCmp?.map((item, index) => {
                return (
                    <>
                        <div className="accordion" id={item?.accordionId}>
                            <h2 className="accordion-header" id={item?.accordionHid}>
                                <button className={index == 0 ? styles.accordion_button : ' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target={"#" + item?.accordionTid} aria-expanded={index == 0 ? "true" : "false"} aria-controls={item?.accordionTid}>
                                    <div className={styles.buttontext}>{item?.accordionTitle}</div>
                                </button>
                            </h2>
                            <div id={item?.accordionTid} className={index == 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={item?.accordionHid} data-bs-parent={"#" + item?.accordionId}>
                                <div className={styles.accordionBody + " accordion-body"}>
                                    <span className={styles.accordionText}>

                                        <ul className={"list-unstyled " + styles.listStyleSet}>
                                            <li className={styles.ulItemSetup}>
                                                <FaRegDotCircle className={styles.faIconStyle} />
                                                Amet Sollicitudin Quam Dolor Mollis</li>
                                            <li className={styles.ulItemSetup}>
                                                <FaRegDotCircle className={styles.faIconStyle} />
                                                Diipiscing Vestibulum Nullam Venenatis</li>
                                            <li className={styles.ulItemSetup}>
                                                <FaRegDotCircle className={styles.faIconStyle} />
                                                Diipiscing Vestibulum Nullam Venenatis</li>
                                            <li className={styles.ulItemSetup}>
                                                <FaRegDotCircle className={styles.faIconStyle} />
                                                Vehicula Vulputate Ligula Mollis</li>

                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            {/* <div className="accordion" id="accordionExample">
                <h2 className="accordion-header" id="headingOne">
                    <button className={styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div className={styles.buttontext}>Business Information</div>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}>

                            <ul className={"list-unstyled " + styles.listStyleSet}>
                                <li className={styles.ulItemSetup}>
                                    <FaRegDotCircle className={styles.faIconStyle} />
                                    Amet Sollicitudin Quam Dolor Mollis</li>
                                <li className={styles.ulItemSetup}>
                                    <FaRegDotCircle className={styles.faIconStyle} />
                                    Diipiscing Vestibulum Nullam Venenatis</li>
                                <li className={styles.ulItemSetup}>
                                    <FaRegDotCircle className={styles.faIconStyle} />
                                    Diipiscing Vestibulum Nullam Venenatis</li>
                                <li className={styles.ulItemSetup}>
                                    <FaRegDotCircle className={styles.faIconStyle} />
                                    Vehicula Vulputate Ligula Mollis</li>

                            </ul>
                        </span>
                    </div>
                </div>

                <h2 className="accordion-header" id="headingTwo">
                    <button className={' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className={styles.buttontext}> Key Analyze</div>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}> Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement capabilities across all asset classes. This includes strategy, architecture design, operating model work, process improvement, systems building and trading p</span>
                    </div>
                </div>

                <h2 className="accordion-header" id="headingThree">
                    <button className={' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className={styles.buttontext}>Our Workflow & Process</div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}>Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement capabilities across all asset classes. This includes strategy, architecture design, operating model work, process improvement, systems building and trading p</span>
                    </div>
                </div>

            </div> */}
        </div>
    )
}
