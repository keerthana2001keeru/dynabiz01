import styled from "@emotion/styled";
import "../styles/variables.module.scss";
const SliderWrapper = styled("div")`
  .slick-list {
    overflow: ${props => (props.overflow ? "visible" : "hidden")};
  }

  /* Dots */
  
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots li {
    position: relative;
    display: inline-block;
    height: 6px;
    margin: 0 18px;
    padding: 0;
    cursor: pointer;
  }

  /* Custom Slick Dots */

  .ft-slick__dots--custom {
    height: 6px;
    // width: 30px;
    border: 1px solid gray;
    border-radius: 2px;
    position: relative;
  }
  .slick-dots .slick-active {
    background-color: primaryColor; 
    ;
    width: 30px;
    border-radius: 2px;
  }

`;

export default SliderWrapper;