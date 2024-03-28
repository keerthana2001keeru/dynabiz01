import React from "react";
import ThumbnailSidebar from "../../components/Image-ThumbnailLarge-sidebar/thumbnailLargeSidebar";
import TableCmp from "../../components/SimpleTable/tableCmp";

function Benefits(props) {
  let HomeOneValue = {};
  if (props?.uiLayout && props?.uiLayout?.blockId) {
    HomeOneValue = props?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }
 // console.log(HomeOneValue);
  return (
    <section className='sec-mar'>
    <div>
      <ThumbnailSidebar imgitem={HomeOneValue?.elements?.Portfolio} />
      <TableCmp setCmp={HomeOneValue?.elements} headerSetup={true} />
    </div>
    </section>
  );
}

export default Benefits;
