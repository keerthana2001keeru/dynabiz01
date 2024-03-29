import React from "react";
import IconWithTextCntrAlgn from "../../components/IconWithTextCenterAlign/iconWithTextCntrAlgn";
import ThumbnailSidebar from "../../components/Image-ThumbnailLarge-sidebar/thumbnailLargeSidebar";

const teamIcontext = [
  {
    IconImage: "/uploads/about-icon-4.png",
    Heading: "Go Very Fast",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my.",
  },
  {
    IconImage: "/uploads/about-icon-5.png",
    Heading: "Business Matching",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my.",
  },
  {
    IconImage: "/uploads/about-icon-6.png",
    Heading: "Growing Your Business",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my.",
  },
];

const portfolio = [
  {
    img: "/uploads/pexels-photo-380769 (1).jpeg",
    title: " STARTUP FUNDING",
    subTitle: "sub one",
    des: "something on it first ",
    position: "left",
  },
  {
    img: "/uploads/pexels-photo-380769 (1).jpeg",
    title: " seconf title",
    subTitle: "sub two",
    des: "something on it second",
    position: "right",
  },
];
function ChitWorkBlk(props) {
  let HomeOneValue = {};
  if (props?.uiLayout && props?.uiLayout?.blockId) {
    HomeOneValue = props?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }
 // console.log(HomeOneValue);
  return (
    <div>
      <div className="row p-5">
        {HomeOneValue?.elements?.AboutUsSection?.value?.map((item, index) => {
          return (
            <div className="col-12 col-md-4" key={index}>
              <IconWithTextCntrAlgn setCmp={item} />
            </div>
          );
        })}
      </div>
      {HomeOneValue?.elements?.Portfolio?.value?.map((item, index) => {
        return (
          <div key={index}>
            <ThumbnailSidebar imgitem={item}></ThumbnailSidebar>
          </div>
        );
      })}
    </div>
  );
}

export default ChitWorkBlk;
