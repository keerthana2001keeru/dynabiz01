import React from "react";
import HomeSectionOne from "../components/Home/homeSectionOne";
import HeaderThree from "./headerThree";
import Header from "./headerOne";
import HeaderTwo from "./headerTwo";
import TeamListIconTextBlock from "../blocks/TeamListIconTextBlock/teamListIconTextBlock";
import TwoColumnTextBlock from "../blocks/TwoColumnTextBlock/twoColumnTextBlock";
import TeamListCardCarouselBlock from "../blocks/TeamListCardCarouselBlock/teamListCardCarouselBlock";
import FixedImgWithContentRight from "../blocks/FixedImgWithContentRight/fixedImgWithContentRight";
import TeamSuccessStoryBlk from "../blocks/TeamSuccessStoryBlock/teamSuccessStoryBlk";
import TitleWithUlListContentBGBlk from "../blocks/TitleWithUlListContentBGBlk/titleWithUlListContentBGBlk";
import TeamListMemberCrdBlock from "../blocks/TeamListMemberCrdBlock/teamListMemberCrdBlock";
import Error404 from "./404/error404";
import HomeSectionTwo from "./Home/homeSectionTwo";
import HomeSectionThree from "./Home/homeSectionThree";
import HomeSectionFour from "./Home/homeSectionFour";
import HomeSectionFive from "./Home/homeSectionFive";
import HomeSectionSix from "./Home/homeSectionSix";
import HomeSectionSeven from "./Home/homeSectionSeven";
import HomeSectionEight from "./Home/homeSectionEight";
import HomeSectionNine from "./Home/homeSectionNine";
import HomeSectionTen from "./Home/homeSectionTen";
import IconContentCrdBlock from "../blocks/IconContentCrdBlock/iconContentCrdBlock";
import FixedImgWithTextRLblock from "../blocks/FixedImgWithTextRLblock/fixedImgWithTextRLblock";
import SimpleSliderBlk from "../blocks/SimpleSliderBlock/simpleSliderBlk";
import ProgressBarWithConentBlk from "../blocks/ProgressBarWithConentBlock/progressBarWithConentBlk";
import AboutUsThreeBlk from "../blocks/AboutUsThreeBlk/aboutUsThreeBlk";
import BlogCustomBlockTwo from "../blocks/BlogCustomBlockTwo/blogCustomBlockTwo";
import AboutUsThreeBlkTwo from "../blocks/AboutUsThreeBlkTwo/aboutUsThreeBlkTwo";
import TeamHiringSectionBlk from "../blocks/TeamHiringSectionBlock/teamHiringSectionBlk";
import TeamMembersListNoFrame from "../blocks/TeamMembersListNoFrame/teamMembersListNoFrame";
import TeamMembersNoFrameWithBG from "../blocks/TeamMembersNoFrameWithBG/teamMembersNoFrameWithBG";
import PersonnelBgclrCarouselNoFrame from "../blocks/PersonnelBgclrCarouselNoFrame/personnelBgclrCarouselNoFrame";
import PersonnelCarouselNoFrame from "../blocks/PersonnelWithCarouselNoFrame/personnelCarouselNoFrame";
import PersonnelThumbnailColumn from "../blocks/PersonnelThumbnailColumn/personnelThumbnailColumn";
import PersonnelThumbnailColNospace from "../blocks/PersonnelThumbnailColNospace/personnelThumbnailColNospace";
import PersonnelThumbBgClrCarousel from "../blocks/PersonnelThumbBgClrCarousel/personnelThumbBgClrCarousel";
import PersonnelThumbBgImgCarousel from "../blocks/PersonnelThumbBgImgCarousel/personnelThumbBgImgCarousel";
import MegaMenu from "./Megamenu/megaMenu";
import HeaderMain from "./headerMain";
import ContactTopBanner from "./ContactTopBanner/contactTopBanner";
import SecurityNormBlk from "../blocks/SecurityNorms/securityNormBlk";
import FaqsAndSecurities from "../blocks/FaqAndSecurities/faqAndSecurities";
import PlansTable from "../blocks/PlansTable/plansTable";
import ChitWorkBlk from "../blocks/ChitWorkBlock/chitWorkBlk";
import Benefits from "../blocks/Benefits/benefits";
import AddressInfo from "./AddressInfo/addressInfo";
import Contactform from "./ContactForm/contactform";
import map from "./Map/mapsLoc";
import Socialshare from "./SocialShare/socialshare";
import CareerblockOne from "../blocks/CareerBlockOne/careerblockOne";
import MapaddressBlock from "../blocks/MapaddressBlock/mapaddressBlock";
import PriceTableBlkOne from "../blocks/PriceTableBlkOne/priceTableBlkOne";

const ComponentItems = {
  //home
  TH00025B01: HomeSectionOne,
 TH00025B02: HomeSectionTwo,
  TH00025B03: HomeSectionThree,
  TH00025B04: HomeSectionFour,
  TH00025B05: HomeSectionFive,
  TH00025B06: HomeSectionSix,
  TH00025B07: HomeSectionSeven,
  TH00025B08: HomeSectionEight,
  TH00025B09: HomeSectionNine,
  TH00025B10: HomeSectionTen,

  TH00025B11: TeamListIconTextBlock,
  TH00025B12: TwoColumnTextBlock,
  TH00025B13: TeamListCardCarouselBlock,
  TH00025B14: FixedImgWithContentRight,
  TH00025B15: TeamSuccessStoryBlk,
  TH00025B16: TitleWithUlListContentBGBlk,
  TH00025B27: TeamListMemberCrdBlock,
  TH00025B19: IconContentCrdBlock,
  TH00025B20: FixedImgWithTextRLblock,
  TH00025B21: SimpleSliderBlk,
  TH00025B23: ProgressBarWithConentBlk,
  TH00025B24: AboutUsThreeBlk,
  //accordion
  TH00025B25: BlogCustomBlockTwo,
  TH00025B26: AboutUsThreeBlkTwo,
  TH00025B30: TeamHiringSectionBlk,

  TH00025B31: TeamMembersListNoFrame,
  TH00025B32: TeamMembersNoFrameWithBG,
  TH00025B33: PersonnelBgclrCarouselNoFrame,
  TH00025B34: PersonnelCarouselNoFrame,

  TH00025B35: PersonnelThumbnailColumn,
  TH00025B36: PersonnelThumbnailColNospace,
  TH00025B37: PersonnelThumbBgClrCarousel,
  TH00025B38: PersonnelThumbBgImgCarousel,

  TH00025B43: MapaddressBlock,
  TH00025B44: Contactform,
  TH00025B45: Socialshare,
  TH00025B46: Contactform,
  TH00025B49: AddressInfo,
  TH00025B50: Contactform,

  TH00025B51: map,
  TH00025B52: Socialshare,
  TH00025B55:PriceTableBlkOne,
  TH00025B58: Error404,
  // "TH00025B63": HeaderThree,
  TH00025B60: ChitWorkBlk,
  TH00025B63: MegaMenu,
  TH00025B65: Header,
  TH00025B64: HeaderTwo,
  TH00025B68: SecurityNormBlk,
  TH00025B69: FaqsAndSecurities,
  TH00025B70: PlansTable,
  TH00025B71: Benefits,
  TH00025B72: ContactTopBanner,
  TH00025B73: HeaderMain,

  TH00025B53: CareerblockOne,
};

function MapBlock(blockId, data) {
  // component does exist
  if (typeof ComponentItems[blockId] !== "undefined") {
    return React.createElement(ComponentItems[blockId], {
      key: blockId,
      uiLayout: data,
    });
  }
}
export { MapBlock };
