import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000)
  ); // Default to one day after check-in

  // Handler to update check-in date and automatically set check-out date to the next day
  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
    setCheckOutDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
  };

  // Handler to update check-out date
  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="content-section no-spacing">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="hotel-search">
              <form>
                <div className="form-group">
                  <label>Which Stella Makadi </label>
                  <select defaultValue="hotel2">
                    <option value="all">All Hotels</option>
                    <option value="hotel1">Stella Beach Resort & Spa</option>
                    <option value="hotel2">Stella Gardens Resort & Spa</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Date Check-In</label>
                  <div className="input-group">
                    <DatePicker
                      selected={checkInDate}
                      onChange={handleCheckInDateChange}
                      minDate={new Date()}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Date Check-Out</label>
                  <div className="input-group">
                    {" "}
                    <DatePicker
                      selected={checkOutDate}
                      onChange={handleCheckOutDateChange}
                      minDate={checkOutDate}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Adults </label>
                  <input type="number" min="1" placeholder="1" />
                </div>
                <div className="form-group">
                  <label>Child </label>
                  <input type="number" min="0" placeholder="0" />
                </div>

                <div className="form-group">
                  <label>&nbsp; </label>
                  <input
                    type="submit"
                    value="FIND NOW !"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
