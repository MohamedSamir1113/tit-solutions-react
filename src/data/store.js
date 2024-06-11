import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homeSlice";
import hotelsReducer from "./hotelsSlice";
import layoutGroupReducer from "./layoutGroupSlice";
import homeGroupReducer from "./homeGroup/homeGroupSlice";
import meetingsGroupReducer from "./meetingsGroup/meetingsGroupSlice";
import faqGroupReducer from "./faqGroup/faqGroupSlice";
import contactGroupReducer from "./contactGroup/contactGroupSlice";
import layoutHotelReducer from "./layoutHotelSlice";
import homeHotelReducer from "./homeHotel/homeHotelSlice";
import accommodationReducer from "./accommodation/accommodationSlice";
import accommodationDetailsReducer from "./accommodation/accommodationDetailsSlice";
import diningReducer from "./dining/diningSlice";
import diningDetailsReducer from "./dining/diningDetailsSlice";
import facilitiesReducer from "./facilities/facilitiesSlice";
import facilityDetailsReducer from "./facilities/facilityDetailsSlice";
import meetingsReducer from "./meetings/meetingsSlice";
import meetingDetailsReducer from "./meetings/meetingDetailsSlice";
import galleryReducer from "./gallery/gallerySlice";
import contactHotelReducer from "./contactHotel/contactHotelSlice";
import loadingReducer from "./loadingSlice";

export const store = configureStore({
  reducer: {
    layoutGroup: layoutGroupReducer,
    homeGroup: homeGroupReducer,
    meetingsGroup: meetingsGroupReducer,
    faqGroup: faqGroupReducer,
    contactGroup: contactGroupReducer,
    layoutHotel: layoutHotelReducer,
    homeHotel: homeHotelReducer,
    home: homeReducer,
    hotels: hotelsReducer,
    accommodation: accommodationReducer,
    accommodationDetails: accommodationDetailsReducer,
    dining: diningReducer,
    diningDetails: diningDetailsReducer,
    facilities: facilitiesReducer,
    facilityDetails: facilityDetailsReducer,
    meetings: meetingsReducer,
    meetingDetails: meetingDetailsReducer,
    gallery: galleryReducer,
    contactHotel: contactHotelReducer,
    loadingReducer
  },
});
