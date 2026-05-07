import React from "react";

const JobCard = ({title,company,role,posted,location,rate,logo}) => {


  return (
    <div className="job-card">
        
              <div className="card">

        {/* Header */}
        <div className="card-header">
          <h4>{rate}</h4>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="bookmark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 3.75H6.75A2.25 2.25 0 004.5 6v14.25l7.5-4.5 7.5 4.5V6a2.25 2.25 0 00-2.25-2.25z"
            />
          </svg>
        </div>

        {/* Title */}
        <div className="title">
          <h1>
           {title}
          </h1>
        </div>

        {/* Location */}
        <div className="location">
          <p>📍 {location}</p>
        </div>

        {/* Posted */}
        <div className="posted">
          <p>🕒 {posted}</p>
        </div>

        {/* Arrow */}
        <div className="arrow">
          <span>→</span>
        </div>

        {/* Dots */}
        <div className="dots">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Footer */}
        <div className="footer">

          <div className="company">
            <img
              src={logo}
              alt="nike"
            />
            <p>{role}</p>

            <div className="company-text">
              <h3>{company}</h3>
            </div>
          </div>

          <button>View</button>

        </div>
      </div>
            
        


    </div>
  );
};

export default JobCard;