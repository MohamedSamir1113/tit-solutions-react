import { Link } from "react-router-dom"

function OtherPosts({otherPost}) {
    const {linkPath,id,imageSrc,title,date,month,year}=otherPost
    return (
        <>
             <div className="recent-post-item">
                        <div className="recent-post-image">
                          <Link to={`${linkPath}?id=${id}`}>
                            <img
                              width="100"
                              height="90"
                              src={imageSrc}
                              alt={title}
                            />
                          </Link>
                        </div>
                        <div className="recent-post-text">
                          <h4>
                            <Link to={`${linkPath}?id=${id}`}>
                              {title}
                            </Link>
                          </h4>
                          <span className="rcomment">
                            {date} {month} {year}
                          </span>
                        </div>
                      </div>
        </>
    )
}

export default OtherPosts
