import React from "react";
import TableCmp from "../../components/SimpleTable/tableCmp";

function PlansTable(props) {
  let HomeOneValue = {};
  if (props?.uiLayout && props?.uiLayout?.blockId) {
    HomeOneValue = props?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }
  return (
    <div>
      <TableCmp setCmp={HomeOneValue?.elements} headerSetup={false} />
    </div>
  );
}

export default PlansTable;
