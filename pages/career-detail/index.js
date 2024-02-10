import React, { useEffect, useState } from 'react'
import CareerblockOne from '../../blocks/CareerBlockOne/careerblockOne'
import CareerBlkTwoJobDetail from '../../blocks/CareerBlockTwoJobDetails/careerBlkTwoJobDetail'
import CareerLayout from '../../layouts/CareerLayout/careerLayout'

import Head from 'next/head'
import { MapBlock } from '../../components/componets-map';
import CareerDetailOne from '../../blocks/careerBlocks/careerDetailOne';
import { useRouter } from 'next/router';
import { CareerService } from 'sk-career-client-sdk';
export default function CareerDetails(props) {
    const router= useRouter();
    var jobId = router.query.id;
    const[detail,setDetail]= useState(null);

    useEffect(() => {
      // getjobDetailData();
      CareerService.getjobDetailData(jobId).then(
        response => {
          // console.log("resd",response?.data?.data)
          if(response.data.status == 200){
            setDetail(prevState => ({...prevState, data: response?.data?.data}))
            // console.log("dararara",response);
          }
          else if(response.data.status == 203){
            setDetail(prevState => ({...prevState, data: null}))
          }
        }
      ).catch((error) => setDetail(prevState => ({...prevState, error: error})))
      .finally(() => setDetail(prevState => ({...prevState, loading: false})))

    }, [])

    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TH00025P12?.blocks?.map(block => {
        if (block?.isBlockEnabled === true) {
            return (MapBlock(block.blockId, block));
        }
    });
    const seoValues = userSettings?.TH00025P12?.seo;
    return (
        <>
        <Head>
      <title>{seoValues?.title ? seoValues?.title : process?.env?.siteIdentity?.siteName || "finanzio | Career-details"}</title>
      <meta charset="UTF-8" />
      <meta name="description"
        content={seoValues?.description ? seoValues?.description : process?.env?.siteIdentity?.siteDescription || "business webiste "} />
      <meta name="keywords"
        content={seoValues?.keywords?.join(",")} />
    </Head>
        <div>

            {/* <CareerblockOne /> */}
            <CareerDetailOne jobDetail={detail?.data}/>
        </div>
        </>
    )
}
CareerDetails.getLayout = function getLayout(page) {
    const userSetting = page?.props?.uiSettings;
    return (
        <CareerLayout uiSettings={userSetting}>
            {page}
        </CareerLayout>
    )
}

