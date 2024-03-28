import React, { useState, useRef, useEffect } from "react";
import { MdLocationPin, MdKeyboardArrowRight, MdWork } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
//import styles from './careerDetail.module.scss'
// import CircularJSON from 'circular-json';
import FormInput from "./FormInput";
import { useRouter } from "next/router";
//import { postImageService } from "../../assistance/http-service-helper";
// import BootstrapModal from "../../components/Modal/bootstrapModal/bootstrapModal";
import Link from "next/link";

export default function CareerDetailOne(props) {
  const router = useRouter();
  var jobId = router.query.id;
  var jobDetail = props?.jobDetail;
 // var jobDetail = props?.jobDetail;
 console.log("kk",jobDetail);
  //file upload

  const [image, setImage] = useState("");
  const [submit, setSubmit] = useState(false);

  const inputFile = useRef(null);
  const formRef = useRef(null);
  const dobRef = useRef();
  const msgRef = useRef();
 
  const date=dobRef?.current?.value;





  
  
  const handleFileUpload = (e) => {
  
    const { files } = e.target;
    if (files && files.length) {
    
      const allowedExtensions = ["pdf", "doc", "docx"];
      const selectedFiles = e.target.files;
      const selectedFilesArray = Array.from(selectedFiles);

      const imagesArray = selectedFilesArray.map((file) => {
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (allowedExtensions.includes(fileExtension)) {
        return URL.createObjectURL(file);
      }
      return null; // Return null for invalid files

      });
      const validFilesArray = selectedFilesArray.filter((file, index) => imagesArray[index] !== null);
     
     
      for (let i = 0; i < validFilesArray.length; i++) {
        validFilesArray[i]["url"] = imagesArray[i];
      }

      setImage(validFilesArray);
    }
  };


  const onButtonClick = () => {
    inputFile.current.click();
  };

  const onButtonTwoClick = () => {
    setImage([]);
  };
  const attachment=image[0];

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1; //January is 0!
  var year = today.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  today = year - 18 + "-" + month + "-" + day;


     

  const [resetError, setResetError] = useState(false);

  //file upload ends

  //form
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    
  });
  // console.log("bhbhh",inputMsg)

  var inputs = [
    {
      id: "1",
      name: "fullname",
      type: "text",
      placeholder: "Full Name*",
      pattern: "^[A-Za-z ]{3,20}$",
      errorMessage: "It should be alphabets contain minimum 3 letters!",
      label: "Full Name",
      required: true,
    },
    {
      id: "2",
      name: "email",
      type: "email",
      placeholder: "Email*",
      errorMessage: "It should be a valid email address !",
      label: "Email",
      required: true,
    },
   
    {
      id: "3",
      name: "phone",
      type: "text",
      placeholder: "Telephone*",
      pattern: "^[1-9][0-9]{9}$",
      errorMessage: "It should contain 10 numbers !",
      label: "Telephone",
      required: true,
    },
  ];

  if (resetError == true) {
    inputs.map(function (obj) {
      obj.errorMessage = "";
    });
  }


  // console.log(inputs)
  // const applicationData ={jobId:jobId,jobDesc:jobDetail?.jobDesc,
  //   jobPositionAssigned:jobDetail?.jobTitle,companyCode:jobDetail?.companyCode,
  //   companyName:jobDetail?.companyName,firstName:values?.fullname,lastName:"",date:date,
  //   email: values?.email, phone:values?.phone,altEmail:"",altPhone:"",
  //   chatPhone:"",attachment:attachment,jobCode:jobDetail?.jobCode,
  //   message:msgRef}

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  async function updatecareerForm() {


    let formData = new FormData();

    // image.forEach((f) => {
      formData.append("assignedjobId",jobId);
      formData.append("jobId", jobId);
      formData.append("jobDesc", jobDetail?.jobDesc);
      formData.append("jobPositionAssigned", jobDetail?.jobTitle);
      formData.append("companyId", jobDetail?.companyCode);
      formData.append("companyName", jobDetail?.companyName);
      formData.append("firstName", values?.fullname);
      formData.append("lastName", "");
      formData.append("DOB", new Date(date));
      formData.append("email", values?.email);
      formData.append("phone", values?.phone);
      formData.append("altEmail", "");
      formData.append("altPhone", "");
     formData.append("chatPhone","");
     formData.append("attachment", attachment);
    formData.append("jobCode", jobDetail?.jobCode);
    formData.append("message", msgRef );
    // formData.append("attachment", image);
 
    const result = await postImageService(
      "/jobApplicant",
      formData,
      "createJobApplicant"
    );

    if (result.status == 200 && result.data.status == 200) {
      //   console.log(result.data)
      setSubmit(true);

      setTimeout(() => {
        setSubmit(false);
      }, 3000);
      setValues({
        fullname: "",
        email: "",
        phone: "",
      });

      setResetError(true);

      formRef.current.reset();

      setImage([]);
    } else {
      setResetError(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    updatecareerForm();
  };


  return (
    <div className="career-sec">
      <div className="container">
        <div className="div row pt-5">
          <div className="div col-12 col-md-8">
            {/* <nav >
                        <ol className="breadcrumb breadcrumb-right-arrow">
                            <li className="breadcrumb-item"><a >Home</a></li>
                            <li className="breadcrumb-item"><a >Careers</a></li>
                            <li className="breadcrumb-item active">{jobDetail?.jobTitle}</li>
                        </ol>
                    </nav> */}
            <div className="careerDetailJobTitle">{jobDetail?.jobTitle}</div>
            <div className="d-flex" style={{ gap: "25px" }}>
              <div className="careerDetailSubTitle">
                <MdWork className="coinSalaryIcon" /> Experience:{" "}
                <span className="careerDetailsubText">
                  {jobDetail?.minExp}-{jobDetail?.maxExp} years
                </span>
              </div>
              <div className="careerDetailSubTitle">
                <MdLocationPin className="coinSalaryIcon" /> Locations :
                {jobDetail?.jobLocation?.map((item, index) => {
                  return (
                    <span key={index} className="careerDetailsubText">
                      {" "}
                      {item?.locationName} , &nbsp;
                    </span>
                  );
                })}
              </div>
            </div>
            <hr className="cDetailDivider" />
            <div className="aboutTheJobDetail">About the jobs</div>
            <div className="subTitlesTheJobDetail">Overview</div>
            <div className="careerDetailsubTextTwo">
              <div className="ckeditor"
                dangerouslySetInnerHTML={{ __html: jobDetail?.jobDesc }}
              ></div>
            </div>

            {jobDetail?.primarySkill?.length ==0 ? "" : <div className="subTitlesTheJobDetail">Primary Skills</div>}
            <div>
              <ul className="list-unstyled">
                {jobDetail?.primarySkill.map((item, index) => {
                  return (
                    <li className="CDetailUlItemSetup d-flex" key={index}>
                      <div>
                        <MdKeyboardArrowRight
                          style={{ marginRight: "6px" }}
                          size={22}
                        />
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: item?.SkillDesc}}></div>
                    </li>
                  );
                })}
              </ul>
            </div>
           {jobDetail?.secondarySkill.length !==0 ? <div className="subTitlesTheJobDetail">Secondary Skill</div>:""}
            <div>
              <ul className="list-unstyled">
                {jobDetail?.secondarySkill.map((item, index) => {
                  return (
                    <li className="CDetailUlItemSetup d-flex" key={index}>
                      <div>
                        <MdKeyboardArrowRight
                          style={{ marginRight: "6px" }}
                          size={22}
                        />
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: item?.SkillDesc}}></div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="subTitlesTheJobDetail">Duration :</div>
            <p className="careerDetailsubTextTwo">
              {jobDetail?.openDate} - {jobDetail?.closeDate}
            </p>
            <div className="subTitlesTheJobDetail">Company Name:</div>
            <p className='careerDetailsubTextTwo'>
              {jobDetail?.companyName}
                </p>
              <div className='careerDetailsubTextTwo'  dangerouslySetInnerHTML={{ __html: jobDetail?.terms}}>
                   
                </div>
                    <div>

                    </div>
            {/* <div>
                        <ul className="list-unstyled">
                            {offer.map((item, index) => {
                                return (
                                    <li className="CDetailUlItemSetup d-flex" key={index}>
                                        <div><MdKeyboardArrowRight style={{ marginRight: '6px' }} size={22} /></div>
                                        <div>{item?.text}</div></li>
                                )
                            })}
                        </ul>
                    </div> */}
          </div>
          <div className="div col-12 col-md-4">
            <div className="cardBodyCvSectionCdetail">
              {/* <h5 className="cardTitleCvSectionCdetail">
                {props?.uiLayout?.TH00012E01?.value}
              </h5>
              <p className="cardSubTextCvSectionCdetail">
                {props?.uiLayout?.TH00012E02?.value}
              </p> */}

              <form
                className="row g-3 mt-4"
                onSubmit={handleSubmit}
                ref={formRef}
              >
                <div>
                  {submit && (
                    <p className="success-message">
                      Application submitted successfully!
                    </p>
                  )}
                </div>

                {inputs.map((input) => {
                  return (
                    <div className="col-12">
                      <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={handleChange}
                      />
                    </div>
                  );
                })}

               <div className="col-12">
                <input
                name="dob"
                type="date"
                onKeyDown={(e) => e.preventDefault()}
                className="py-2 careerDetailFormInput"
                max={today}
                required
                ref={dobRef}
              />
               </div>

               <div className="col-12">
                       <textarea
                         className='py-2 careerDetailFormInput'
                           rows="5"
                             name='text'
                              required
                            placeholder="Message*"
                            ref={msgRef}
                                />
                            </div>
                {jobDetail?.attachResume ? 
                <>
                <div className="col-12">
                <p className="success-message" style={{fontSize:"14px" }}>Uploads are in pdf, doc, or docx formats only.</p>
                  <div className="card text-center cvAttachcrdBgTwo">
                  
                    <div className="cvAttachHeadingCdetail">Attach your CV</div>
                    <div className="cvAttachSubHeadingCdetail">
                      <input
                        style={{ display: "none" }}
                        ref={inputFile}
                        onChange={(e)=>handleFileUpload(e)}
                        type="file"
                      />
                      <label htmlFor="input-file-upload">
                        {" "}
                        <a
                          className="highlightCVtextCDetail"
                          onClick={onButtonClick}
                        >
                          Select files
                        </a>
                      </label>
                    </div>
                  </div>
                 
                </div>
                <div className="col-12">
                  {image[0]?.name ? 
                    <div className="cvFilesizeCdeail">
                      <IoMdCloseCircleOutline
                        className="cvFileSetupIcon"
                        onClick={onButtonTwoClick}
                      />
                      {image[0]?.name}
                      <hr className="cListDividerTwo" />
                    </div>
                   : 
                    ""
                  }
                </div>

                </>
                :"" }
                 {/* <div className="col-12">
                    <label className="select-btn">
                    <select aria-label="Default select example"
                     className="form-select px-2">
                    <option selected>— Make a Selection —</option>
                      <option value="">I acknowledge S3M Technology Data Protection Policy</option>
                    </select>
                    </label>
                 </div> */}
                <div className="check-box">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required/>
                 <label className="form-check-label" for="flexCheckDefault">
                   {/* I accept the <a data-bs-toggle="modal" data-bs-target="#exampleModal"><strong>terms & conditions</strong></a> */}
                   I agree to the terms and conditions.
                </label>
                </div>
                {/* <div className="modal-btn">
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal">Show more</a>
                </div> */}
                {/* <BootstrapModal/> */}
                </div>
                <div className="col-12">
                  {/* <button className="CfooterCrdbuttonSetUp  CfooterCrdBtnOne">Submit Now</button> */}
                  <button className="primary-btn3 headerTwoButton" type="submit">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
