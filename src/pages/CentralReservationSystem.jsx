import BgArea from "../components/BgArea"
import Section1Area from "../components/Section1Area"
import Section2Area from "../components/Section2Area"

function CentralReservationSystem() {
    return (
        <>
        <BgArea
        title1={`Central Reservation System`}
        title2={`D-EDGE Solutions`}
        path={`/d-edge`}
        />

        <Section1Area
        title={`Booking Engine`}
        linkPath={``}
        imgSrc={`assets/images/d_edge-booking-hotel-engine---the-best-booking-engine-for-hotel-20212415629738.jpg`}
        description={`A professional Booking Engine like D_Edge reservation system has to be your first priority, as well as website creation. Having just a working reservation system is not enough.`}
        />

        <Section2Area
        title={`Channel Manager`}
        linkPath={``}
        imgSrc={`assets/images/channel-manager-for-hotels---booking-channel-manager---d-edge-channel-manager-20212510109135.jpg`}
        description={`Investing in D-EDGE Channel Manager will make your life easier. By using it, you can sell all your rooms on all your connected booking sites at the same time.`}
        />
        <Section1Area
        title={`Central Inventory`}
        linkPath={``}
        imgSrc={`assets/images/d-edge-inventory-management---hotel-management-system---hotel-inventory-management-2021251054075.jpg`}
        description={`Having effective hotel inventory management is a core aspect of running a successful business. It involves both creating and managing demand and maximizing returns.`}
        />
        <Section2Area
        title={`GDS Solutions`}
        linkPath={``}
        imgSrc={`assets/images/gds-solutions---gds-booking-20212510649355.jpg`}
        description={`With GDS Hotel Solutions from D-EDGE, we help you increase your hotel brand visibility and distribute your presence.`}
        />
        </>
    )
}

export default CentralReservationSystem
