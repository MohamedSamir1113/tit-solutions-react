import { Link } from "react-router-dom";

function BgArea({ title1, title2 ,path}) {
    return (
        <div className="breatcome_area d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breatcome_title">
                            <div className="breatcome_title_inner pb-2">
                                <h2>{title1}</h2>
                            </div>
                            <div className="breatcome_content">
                                <ul>
                                    <li>
                                        <Link to={path}>{title2}</Link>{" "}
                                        <i className="fa fa-angle-right"></i>
                                        <span>{title1}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BgArea;
