import { Link } from "react-router-dom"

function NewsDetails({blogPost}) {
    const {imageSrc,date,month,year,title,description,colorClass,linkPath,id}=blogPost
    
    return (
        <>
        
              <div
                className="single_blog text-center mb-4 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
              >
                <div className="single_blog_thumb">
                  <Link to={`${linkPath}?id=${id}`}>
                    <img
                      src={imageSrc}
                      alt=""
                    />
                  </Link>
                </div>
                <div className={`single_blog_date ${colorClass}`}>
                  <div className="single_blog_date_inner">
                    <h3>{date}</h3>
                    <span>{month}</span>
                    <span className="years">{year}</span>
                  </div>
                </div>
                <div className="single_blog_content pt-4 pl-4 pr-4">
                  <div className="blog_page_title pb-1">
                    <h6 className="mb-3">
                      <Link to={`${linkPath}?id=${id}`}>
                        <br />
                        {title}
                      </Link>
                    </h6>
                  </div>
                  <div className="blog_description mt-4">
                    <p className="news-p">
                      {description}
                    </p>
                  </div>
                  <div className="blog_page_button style_two pb-5">
                    <Link to={`${linkPath}?id=${id}`}>
                      Read More <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
           
        </>
    )
}

export default NewsDetails
