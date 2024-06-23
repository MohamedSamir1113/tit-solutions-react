import { Link } from "react-router-dom"

function NewsName({name}) {
    return (
        <div className=" d-flex align-items-center mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_content text-left text-dark">
                  <ul>
                    <li className="text-dark">
                      <Link to="/" className="text-dark custom-link-news">
                        Home
                      </Link>
                      <i className="fa fa-angle-right text-dark custom-link-news"></i>
                      <Link to="/news" className="text-dark custom-link-news">
                        Our News
                      </Link>
                      <i className="fa fa-angle-right text-dark custom-link-news"></i>
                      <span className="text-dark custom-link-news">
                        {name}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default NewsName
