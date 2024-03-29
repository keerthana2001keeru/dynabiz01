import React from "react";
import ThumbnailSmallSidebar from "../../components/Image-ThumbnailSmall-sidebar/thumbnailSmallSidebar";

export default function SecurityNormBlk(pageProps) {
  let HomeOneValue = {};
  if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
    HomeOneValue = pageProps?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }
  return (
    <div>
      {HomeOneValue?.elements?.Portfolio?.value?.map((item, index) => {
        return <ThumbnailSmallSidebar imgitem={item} key={index} />;
      })}
    </div>
  );
}
