import { useEffect } from "react";
import BgArea from "../components/BgArea";
import Section1Area from "../components/Section1Area";
import Section2Area from "../components/Section2Area";

function Reporting() {
  useEffect(() => {
    document.title = "Reporting";
  }, []);
  return (
    <>
      <BgArea title1={`Reporting`} title2={`services`} path={`/services`} />

      <Section1Area
        title={`Google Analytics Implementation`}
        linkPath={`/services/reporting/google-analytics-implementation`}
        imgSrc={`assets/images/google-analytics-for-hotels---google-website-analytics---hotel-website-analytics-20212510265317.jpg`}
        description={`We align your business goals with the implementation, so our Google analytics for hotels will ensure that you are working in the right direction.`}
      />

      <Section2Area
        title={`Digital Marketing Reporting`}
        linkPath={`/services/reporting/digital-marketing-reporting`}
        imgSrc={`assets/images/digital-marketing-reporting---digital-marketing-analytics---hotel-digital-marketing-reports-20212510140712.jpg`}
        description={`We provide you with consultancy in choosing the best tool to use for your digital marketing reporting objectives.`}
      />

      <Section1Area
        title={`Website 360 Reporting`}
        linkPath={`/services/reporting/website-360-reporting`}
        imgSrc={`assets/images/google-analytics-360---reporting-360-202125104654433.jpg`}
        description={`We offer you a 360 website reporting that is designed for customizable data views, powerful analysis, and actionable information.`}
      />
    </>
  );
}

export default Reporting;
