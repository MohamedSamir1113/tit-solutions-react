import { useEffect } from "react";
import BgArea from "../components/BgArea"
import Section1Area from "../components/Section1Area"
import Section2Area from "../components/Section2Area"

function EmailMarketing() {
    useEffect(() => {
        document.title = "Email Markting";
      }, []);
    return (
        <>
            <BgArea
            title1={`Email Marketing`}
            title2={`services`}
            path={`/services`}
            />

            <Section1Area
            title={`Constant Contact`}
            linkPath={`/constant-contact`}
            imgSrc={`assets/images/constant-contact-202125101153853.jpg`}
            description={`Constant contact email marketing is a guaranteed solution for hotels' success formula that helps organizations to create and grow customer relationships in today's socially connected world.`}
            />

            <Section2Area
            title={`Manage Email Marketing`}
            linkPath={`/manage-email-marketing`}
            imgSrc={`assets/images/email-marketing-for-hotels---email-marketing-services---hospitality-email-marketing-2021251032920.jpg`}
            description={`The first Email Marketing template for you to ongoing hospitality email marketing and social media outreach management and execution services.`}
            />
        </>
    )
}

export default EmailMarketing
