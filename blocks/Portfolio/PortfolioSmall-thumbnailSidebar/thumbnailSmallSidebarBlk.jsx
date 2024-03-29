import React from "react";
import ThumbnailSmallSidebar from "../../../components/Image-ThumbnailSmall-sidebar/thumbnailSmallSidebar";

export default function ThumbnailSmallSidebarBlk(props) {
  return (
    <div>
      <ThumbnailSmallSidebar imgitem={props.imgitem} />
    </div>
  );
}
