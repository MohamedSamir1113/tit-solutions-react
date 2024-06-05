import { Link } from "react-router-dom";
import BgArea from "../components/BgArea";
import Section1Area from "../components/Section1Area";
import Section2Area from "../components/Section2Area";

function SearchEngineMarketing() {
  return (
    <>
      <BgArea
        title1={`Search Engine Marketing`}
        title2={`Services`}
        path={`/services`}
      />
      {/*bg*/}

      <Section1Area
        title={`Google Ads`}
        description={`Managing Google Ads for hotels and building it from scratch is very demanding, which usually ends with business owners and managers leaving this magnificent tool to easier platforms.`}
        linkPath={`/`}
        imgSrc={`assets/images/services/google-hotel-ads.jpg`}
      />
      {/*Google ads*/}

      <Section2Area
        title={`Bing Ads`}
        description={`T.I.T. solutions agency offers you powerful Bing hotel ads management with real-time results.`}
        linkPath={`/`}
        imgSrc={`assets/images/services/bing-hotel-ads.jpg`}
      />
      {/*Bing Ads*/}

      <Section1Area
      title={`Yandex Ads`}
      description={`Unlock your business potential, tap into new markets, and grow internationally in the Russian-speaking world with our Yandex ads in Egypt.`}
      linkPath={`/`}
      imgSrc={`assets/images/services/yandex-ads-in-egypt.jpg`}
      />
      {/*Yandex*/}
    </>
  );
}

export default SearchEngineMarketing;
