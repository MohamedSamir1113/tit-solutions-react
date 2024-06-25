import { Link } from "react-router-dom";
import { isLoading } from "../data/loadingSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { useEffect } from "react";

function DEdgeSolutionsList() {
  const loading = useSelector((store) => store.loadingReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(isLoading(false));
    }, 500);

    return () => clearTimeout(timer);
  }, [loading, dispatch]);
  return (
    <div className=" col-lg-4 col-md-5 col-sm-12 col-xs-12">
      <h3 className="pb-15">OTHER D-EDGE SOLUTIONS</h3>
      <div className="service-details-pn-list">
        <ul>
          <li>
            <Link
              onClick={() => dispatch(isLoading(true))}
              to="/d-edge/guest-management"
            >
              Guest Management
              <span>
                <i className="fa fa-angle-right"></i>
              </span>
            </Link>
          </li>

          <li>
            <Link
              onClick={() => dispatch(isLoading(true))}
              to="/d-edge/data-intelligence"
            >
              Data Intelligence
              <span>
                <i className="fa fa-angle-right"></i>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="service-details-big-button mt-40 mb-40">
        <a href="/">
          <span className="details-big-content">
            Company Presentation <i className="fa fa-download"></i>
          </span>
        </a>
      </div>

      <div
        className="service-details-pn-about mb-4"
        style={{ backgroundImage: "url(assets/images/tab1.jpg)" }}
      >
        <div className="service-details-pn-about-content pt-35 pb-40 pl-4 pr-4">
          <div className="service-details-pn-about-content-title pb-3">
            <h4>Need Any Help For Business ?</h4>
          </div>
          <div className="service-details-pn-about-content-text">
            <p>
              We take an omni-channel approach to online marketing with a focus
              on increasing conversions, repeat traffic and generating greater
              brand loyalty online.
            </p>
          </div>
          <div className="service-details-pn-about-content-button pt-2">
            <Link className="list-color" to="/contact-us">
              Contact Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DEdgeSolutionsList;
