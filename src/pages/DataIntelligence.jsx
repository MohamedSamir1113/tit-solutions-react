import { useEffect } from "react";
import BgArea from "../components/BgArea"
import Section1Area from "../components/Section1Area"
import Section2Area from "../components/Section2Area"

function DataIntelligence() {
    useEffect(() => {
        document.title = "Data Intelligence";
      }, []);
    return (
        <>
        <BgArea
        title1={`Data Intelligence`}
        title2={`D-EDGE Solutions`}
        path={`/d-edge`}
        />

        <Section1Area
        title={`Price Monitoring`}
        linkPath={`/price-monitoring`}
        imgSrc={`assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-price-monitoring-20212103906.jpg`}
        description={"Your hotel`s pricing is one of the most important factors that make your guests choose you again and again; that is why you need to have a clear pricing strategy to be monitored efficiently and wisely!"}
        />

        <Section2Area
        title={`Price Recommendation`}
        linkPath={`/price-recommendation`}
        imgSrc={`assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-price-recommendation-20212104435879.jpg`}
        description={`Do you need some help with pricing your hotel rooms? D-EDGE automatic algorithm can create personalized daily rates for you based on your chosen scenarios that work the best for your hotel business.`}
        />
        <Section1Area
        title={`Performance Analysis`}
        linkPath={`/performance-analysis`}
        imgSrc={`assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-performance-analysis-20212104618276.jpg`}
        description={`The clear-cut measurability of KPIs is alluring. Occupancy percentages, profit indicators, return on investment. These are the type of performance measures on which you as a hotelier should rely on when it comes to evaluating hotel performance.`}
        />
       
        </>
    )
}

export default DataIntelligence
