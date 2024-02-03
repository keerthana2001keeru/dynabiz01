import React from "react";
import styles from "./accordion.module.scss";
import { FaRegPlusSquare } from "react-icons/fa";

export default function Accordion(props) {
  return (
    <div className="container-fluid p-0">
      <div className="accordion" id="accordionExample">
      {props?.setCmp?.value?.map((item,index)=>(
<>
        <h2 className="accordion-header" id="headingOne">
          <button
            className={styles.accordion_button}
            data-bs-toggle="collapse"
            data-bs-target={"#collapseOne" + index}
            aria-expanded="false"
            type="button"
            aria-selected="true"
            aria-controls={"collapseOne" + index}
          >
            <div className={styles.buttontext}>
              {item?.Heading?.value}
            </div>
          </button>
        </h2>
        <div
          id={"collapseOne" + index}
          className="accordion-collapse collapse "
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className={styles.accordionBody}>
            <span className={styles.accordionText}>
              {" "}
             <p className={styles.accordioPara} dangerouslySetInnerHTML={{
        __html: item?.description?.value,
      }}></p>


              {/* {item?.description?.value} */}
            </span>
          </div>
        </div>
        </>
   ))}
        {/* <h2 className="accordion-header" id="headingTwo">
          <button
            className={" collapsed " + styles.accordion_button}
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <div className={styles.buttontext}>
             {props?.setCmp?.value[1]?.Heading?.value} 
            </div>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className={styles.accordionBody}>
            <span className={styles.accordionText}>
              {props?.setCmp?.value[1]?.description?.value}
            </span>
          </div>
        </div>

        <h2 className="accordion-header" id="headingThree">
          <button
            className={" collapsed " + styles.accordion_button}
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <div className={styles.buttontext}>
              {props?.setCmp?.value[2]?.Heading?.value}
            </div>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className={styles.accordionBody}>
            <span className={styles.accordionText}>
              {props?.setCmp?.value[2]?.description?.value}
            </span>
          </div>
        </div>

        <h2 className="accordion-header" id="heading4">
          <button
            className={" collapsed " + styles.accordion_button}
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="false"
            aria-controls="collapse4"
          >
            <div className={styles.buttontext}>
              {props?.setCmp?.value[3]?.Heading?.value}
            </div>
          </button>
        </h2>
        <div
          id="collapse4"
          className="accordion-collapse collapse"
          aria-labelledby="heading4"
          data-bs-parent="#accordionExample"
        >
          <div className={styles.accordionBody}>
            <span className={styles.accordionText}>
              {props?.setCmp?.value[3]?.description?.value}
            </span>
          </div>
        </div>

        <h2 className="accordion-header" id="heading5">
          <button
            className={" collapsed " + styles.accordion_button}
            data-bs-toggle="collapse"
            data-bs-target="#collapse5"
            aria-expanded="false"
            aria-controls="collapse5"
          >
            <div className={styles.buttontext}>
              {props?.setCmp?.value[4]?.Heading?.value}
            </div>
          </button>
        </h2>
        <div
          id="collapse5"
          className="accordion-collapse collapse"
          aria-labelledby="heading5"
          data-bs-parent="#accordionExample"
        >
          <div className={styles.accordionBody}>
            <span className={styles.accordionText}>
              {props?.setCmp?.value[4]?.description?.value}
            </span>
          </div>
        </div> */}


      

       

        {/* <h2 className="accordion-header" id="headingThree">
                    <button className={' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className={styles.buttontext}>{props?.setCmp?.value[2]?.Heading?.value}</div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}>{props?.setCmp?.value[2]?.description?.value}</span>
                    </div>
                </div>

                <h2 className="accordion-header" id="headingThree">
                    <button className={' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className={styles.buttontext}>{props?.setCmp?.value[2]?.Heading?.value}</div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}>{props?.setCmp?.value[2]?.description?.value}</span>
                    </div>
                </div>

                <h2 className="accordion-header" id="headingThree">
                    <button className={' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className={styles.buttontext}>{props?.setCmp?.value[2]?.Heading?.value}</div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}>{props?.setCmp?.value[2]?.description?.value}</span>
                    </div>
                </div>

                <h2 className="accordion-header" id="headingThree">
                    <button className={' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className={styles.buttontext}>{props?.setCmp?.value[2]?.Heading?.value}</div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}>{props?.setCmp?.value[2]?.description?.value}</span>
                    </div>
                </div>

                <h2 className="accordion-header" id="headingThree">
                    <button className={' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className={styles.buttontext}>{props?.setCmp?.value[2]?.Heading?.value}</div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}>{props?.setCmp?.value[2]?.description?.value}</span>
                    </div>
                </div>

                <h2 className="accordion-header" id="headingThree">
                    <button className={' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className={styles.buttontext}>{props?.setCmp?.value[2]?.Heading?.value}</div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}>{props?.setCmp?.value[2]?.description?.value}</span>
                    </div>
                </div>

                <h2 className="accordion-header" id="headingThree">
                    <button className={' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className={styles.buttontext}>{props?.setCmp?.value[2]?.Heading?.value}</div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}>{props?.setCmp?.value[2]?.description?.value}</span>
                    </div>
                </div>

                <h2 className="accordion-header" id="headingThree">
                    <button className={' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className={styles.buttontext}>{props?.setCmp?.value[2]?.Heading?.value}</div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}>{props?.setCmp?.value[2]?.description?.value}</span>
                    </div>
                </div>

                <h2 className="accordion-header" id="headingThree">
                    <button className={' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className={styles.buttontext}>{props?.setCmp?.value[2]?.Heading?.value}</div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}>{props?.setCmp?.value[2]?.description?.value}</span>
                    </div>
                </div>

                <h2 className="accordion-header" id="headingThree">
                    <button className={' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className={styles.buttontext}>{props?.setCmp?.value[2]?.Heading?.value}</div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}>{props?.setCmp?.value[2]?.description?.value}</span>
                    </div>
                </div>

                <h2 className="accordion-header" id="headingThree">
                    <button className={' collapsed ' + styles.accordion_button} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className={styles.buttontext}>{props?.setCmp?.value[2]?.Heading?.value}</div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={styles.accordionBody}>
                        <span className={styles.accordionText}>{props?.setCmp?.value[2]?.description?.value}</span>
                    </div>
                </div> */}
      </div>
    </div>
  );
}
