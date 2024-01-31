import React from "react";
import styles from "./home.module.scss";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function HomeSectionFive(pageProps) {
  let HomeOneValue = {};
  if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
    HomeOneValue = pageProps?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }

  return (
    <section className='sec-mar mb-5'>
    <div className="containe-fluid p-0">
      <div className="row">
        <div
          className={"col-md-6 col-sm-12 " + styles.bgimageSetup}
          style={{
            backgroundImage: `url(${HomeOneValue?.elements?.SuccessStorySection?.backgroundImage?.value})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            position: "relative",
            backgroundSize: "cover",
          }}
        >
          {/* <div className={styles.HfiveVideoBtnSetup} >
                        <Link href={'/'} > </Link>
                        <a href="/" target="_blank" className='my-auto'><img className={'img-fluid'} src={HomeOneValue?.elements?.SuccessStorySection?.VideoButtonImage?.value} alt="" /></a>
                    </div> */}
        </div>
        <div className="col-md-6 col-sm-12">
          <div className={styles.HfiveContentGrp}>
            <h5 className={styles.hfiveSubTitle}>{HomeOneValue?.elements?.SuccessStorySection?.subHeading?.value}</h5>
            <h2 className={styles.hfiveTitle}>
              {HomeOneValue?.elements?.SuccessStorySection?.heading?.value}
            </h2>
            <h6 className={styles.hfiveDescription}  dangerouslySetInnerHTML={{
                            __html: HomeOneValue?.elements?.SuccessStorySection?.description?.value,
                          }}>
             
            </h6>
            {HomeOneValue?.elements?.SuccessStorySection?.buttonText?.value && (
            <Link
                    href={
                      HomeOneValue?.elements?.SuccessStorySection?.buttonLink?.urlType == "R"
                        ? "#" + HomeOneValue?.elements?.SuccessStorySection?.buttonLink?.value || ""
                        : HomeOneValue?.elements?.SuccessStorySection?.buttonLink?.value || ""
                    }
                    legacyBehavior
                    target={HomeOneValue?.elements?.SuccessStorySection?.buttonLink?.urlType == "E" ? "_blank" : ""}
                  >
              <button
                className={`${styles.HfiveBtnOne} ${styles.HfivebuttonSetUp}`}
              >
                {HomeOneValue?.elements?.SuccessStorySection?.buttonText?.value}
              </button>
            </Link>
            )}
          </div>
        </div>

        <div
          className={styles.homeSectionFiveBg + " col-md-6 col-sm-12"}
         
        >
          <div className={styles.HfiveContentGrpTwo}>
            <h2 className={styles.hfiveSecTitle}>
              {HomeOneValue?.elements?.ExpertSection?.heading?.value}
            </h2>
            <h5 className={styles.hfiveSecondDes} dangerouslySetInnerHTML={{
                            __html: HomeOneValue?.elements?.ExpertSection?.subText?.value,
                          }}>


          
            </h5>
            <ul className="list-unstyled">
              {HomeOneValue?.elements?.ExpertSectionTextList?.value?.map(
                (item, index) => {
                  return (
                    <li className={styles.hFiveUlItemSetup} key={index}>
                      <FaCheck style={{ marginRight: "6px" }} size={10} />
                      {item?.Content?.value}
                    </li>
                  );
                }
              )}
            </ul>
            {HomeOneValue?.elements?.ExpertSection?.buttonText?.value && (
            <Link
                    href={
                      HomeOneValue?.elements?.ExpertSection?.buttonLink?.urlType == "R"
                        ? "#" + HomeOneValue?.elements?.ExpertSection?.buttonLink?.value || ""
                        : HomeOneValue?.elements?.ExpertSection?.buttonLink?.value || ""
                    }
                    legacyBehavior
                    target={HomeOneValue?.elements?.ExpertSection?.buttonLink?.urlType == "E" ? "_blank" : ""}
                  >


              <button
                className={`${styles.HfiveBtnTwo} ${styles.HfivebuttonSetUp}`}
              >
                {HomeOneValue?.elements?.ExpertSection?.buttonText?.value}
              </button>
            </Link>
            )}
          </div>
        </div>

        <div
          className={"col-md-6 col-sm-12 " + styles.bgimageSetup}
          style={{
            backgroundImage: `url(${HomeOneValue?.elements?.ExpertSection?.backgroundImage?.value})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
    </section>
  );
}
// const src =
//     "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
