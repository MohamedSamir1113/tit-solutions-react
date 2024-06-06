import BgArea from "../components/BgArea"
import Section1Area from "../components/Section1Area"
import Section2Area from "../components/Section2Area"

function GuestManagement() {
    return (
        <>
        <BgArea
        title1={`Guest Management`}
        title2={`D-EDGE Solutions`}
        path={`/d-edge`}
        />

        <Section1Area
        title={`Hotel CRM`}
        linkPath={``}
        imgSrc={`assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-hotel-crm-2021210335489.jpg`}
        description={"Hospitality CRM gives several marketing advantages by leveraging data, automation, intelligent segmentation, and marketing tools based on guests` personalization."}
        />

        <Section2Area
        title={`Guest Loyalty`}
        linkPath={``}
        imgSrc={`assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-guest-loyalty-2021210307639.jpg`}
        description={`A hotel guest loyalty program can be even more advantageous than acquisition. It can attract new clients, boost hotel occupancy rates during off-peak periods, and work as an efficient Marketing strategy when well planned.`}
        />
        <Section1Area
        title={`Guest Feedback`}
        linkPath={``}
        imgSrc={`assets/images/digital-marketing-in-egypt-for-hotels-d-edge-solutions-guest-feedback-20212101711225.jpg`}
        description={`Gain valuable insights from your hotel guest feedback provided by D-Edge through customizable pre-arrival and post-stay surveys. You will be able to know what your guests feel, want, and dislike in their stay.`}
        />
       
        </>
    )
}

export default GuestManagement
