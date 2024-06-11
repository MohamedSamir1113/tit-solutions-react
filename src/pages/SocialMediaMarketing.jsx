import BgArea from "../components/BgArea";
import Section1Area from "../components/Section1Area";
import Section2Area from "../components/Section2Area";
import { useEffect } from "react";

function SocialMediaMarketing() {
  useEffect(() => {
    document.title = "Social Media Marketing";
  }, []);
  return (
    <>
      <BgArea
        title1={`Social Media Marketing`}
        title2={`services`}
        path={`/services`}
      />
      {/*bg*/}
      <Section1Area
        title={`Facebook Ads`}
        linkPath={`/facebook-ads`}
        imgSrc={`assets/images/facebook-ads-for-hotels---hotel-facebook-marketing---facebook-marketing-strategy-20212510571844.jpg`}
        description={`Your business is for your clients. Build strong relationships with them online, reach new people, and increase sales using hotel Facebook marketing.`}
      />
      {/*Facebook ads*/}
      <Section2Area
        imgSrc={`assets/images/instagram-marketing-for-hotels---instagram-ads---instagram-advertising-202125102822806.jpg`}
        title={`Instagram Ads`}
        linkPath={`/instagram-ads`}
        description={`Reach your guests or potential ones with effective Instagram marketing for hotels services by T.I.T Solutions. We take responsibility for your ad campaigns from start to finish, applying the best practices for your brand and audience.`}
      />{" "}
      {/*Instagram Ads*/}
      <Section1Area
        title={`Snapchat Ads`}
        imgSrc={`assets/images/snapchat-ads-for-hotel---snapchat-marketing----hotel-snapchat---hotel-snapchat-marketing-202125103622557.jpg`}
        linkPath={`/snapchat-ads`}
        description={`Do you own or manage a hotel Snapchat business that you want to reach highly engaged audiences and get the chance to interact with them efficiently?`}
      />
      {/*Snapchat Ads*/}
      <Section2Area
        title={`VK Ads`}
        linkPath={`/vk-ads`}
        imgSrc={`assets/images/vk-ads-for-hotels---vk-advertising---vkontakte-ads-20212510440585.jpg`}
        description={`VK platform is one of Russia's largest social media networks; Vk ads for hotels can help you reach the Russian target audience there. If you are a hotelier with international goals, the opportunities are ripe for businesses willing to seize them on this platform with the T.I.T Solutions help.`}
      />
      {/*VK Ads*/}
      
      <Section1Area
        title={`LinkedIn Ads`}
        linkPath={`/linkedin-ads`}
        imgSrc={`assets/images/linkedin-for-hotels---linkedin-advertising-202125103027344.jpg`}
        description={`The T.I.T Solutions agency uses LinkedIn for hotels to create ad campaigns that boost your hotel content and deliver personalized ads to LinkedIn inboxes.`}
      />
      {/*LinkedIn Ads*/}
    </>
  );
}

export default SocialMediaMarketing;
