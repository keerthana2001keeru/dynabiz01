import React from "react";
import Accordion from "../../components/Accordion/accordion";
import SimpleParagraph from "../../components/SimpleParagraph/simpleParagraph";

export default function FaqsAndSecurities(props) {
  let HomeOneValue = {};
  if (props?.uiLayout && props?.uiLayout?.blockId) {
    HomeOneValue = props?.uiLayout;
  } else {
    // aboutValue = require("./mapping.json");
  }

  return (
    <section className='sec-mar'>
    <div className="container-fluid p-5">
      <Accordion
        setCmp={HomeOneValue?.elements?.AccordionHeadingContent}
      ></Accordion>
      <div className="pt-4">
        <SimpleParagraph
          setCmp={HomeOneValue?.elements?.paragraphContent}
        ></SimpleParagraph>
      </div>
    </div>
    </section>
  );
}
