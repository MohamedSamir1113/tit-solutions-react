import { Link } from "react-router-dom";
import BgArea from "../components/BgArea";
import Section1Area from "../components/Section1Area";
import Section2Area from "../components/Section2Area";
import { useEffect } from "react";
function SocialMediaManagement() {
  useEffect(() => {
    document.title = "Social Media Management";
  }, []);
  return (
    <>
      {/*bg*/}
      <BgArea
        title1={"Social Media Management"}
        title2={"Services"}
        path={"/services"}
      />

      <Section1Area
        title={"Social Media Strategy"}
        description={
          "By creating the social media marketing strategy for hotels, we draw your short and long-term goals, tactics for achieving them, and we choose the best metrics to measure the WHOLE strategy progress."
        }
        imgSrc={
          "assets/images/hotel-social-media-marketing---social-media-marketing-strategy-for-hotels---social-media-marketing-agency-20212510430862.jpg"
        }
        linkPath={"/hotels-resorts"}
      />
      {/*Social Media Strategy*/}

      <Section2Area
        title={`Social Media Posting`}
        description={`By implementing a customized social media posting strategy
      for your own hotel, we guarantee your hotel content to go
      viral; we have endless ideas for your content posting
      strategy.`}
        linkPath={`/travel-tours`}
        imgSrc={`assets/images/social-media-content-for-hotels---social-media-posting-strategy---hotel-social-media-202125104144302.jpg`}
      />
      {/*Social Media Posting*/}

      <Section1Area
        title={"Social Media Graphics"}
        description={` Do you need those graphics for your social media posting?
          Google Display ads? Instagram? or Facebook ads? Whatever
          your requirements are, we specialize in hotels branding.`}
        imgSrc={
          "assets/images/social-media-graphics---hotels-branding---test-202125958612.jpg"
        }
        linkPath={"/hotels-resorts"}
      />
      {/*Social Media Graphics*/}
    </>
  );
}

export default SocialMediaManagement;
