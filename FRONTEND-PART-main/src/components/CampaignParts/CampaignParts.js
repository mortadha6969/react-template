import React from "react";
import "./CampaignParts.css";

const CampaignParts = () => {
  const campaigns = [
    {
      id: 1,
      title: "Education for All",
      progress: 65,
      donated: "$42,380",
      target: "$65,000",
      donors: 284,
      image: "https://source.unsplash.com/800x600/?education",
    },
    {
      id: 2,
      title: "Helping Homeless People",
      progress: 89,
      donated: "$178,000",
      target: "$200,000",
      donors: 891,
      image: "https://source.unsplash.com/800x600/?water",
    },
    {
      id: 3,
      title: "Developing Countryside's farming",
      progress: 65,
      donated: "$42,380",
      target: "$65,000",
      donors: 284,
      image: "https://source.unsplash.com/800x600/?education",
    },
    {
      id: 4,
      title: "Clean Water Initiative",
      progress: 89,
      donated: "$178,000",
      target: "$200,000",
      donors: 891,
      image: "https://source.unsplash.com/800x600/?water",
    },
  ];

  return (
    <div className="">
      <div className="campaign-intro">
        <h4>Welcome to our crowdfunding campaigns!</h4>
        <p>
          A place where every idea matters and every contribution sparks change.
          <br></br>We're uniting a community of innovators and dreamers to turn creative projects into reality.
          <br></br>By joining us, you're not just donating; you're investing in a future filled with promise, progress, and positive impact.
          <br></br>Your support fuels transformative projects that empower communities and drive sustainable development.<br></br>
          <br></br>Join our journey and help us make a lasting difference today!
        </p>
      </div>
      <div className="campaign-parts">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-card">
            <div className="campaign-media">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="campaign-image"
              />
              <div className="campaign-badge">
                <span>Trending</span>
              </div>
            </div>

            <div className="campaign-content">
              <h3>{campaign.title}</h3>

              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${campaign.progress}%` }}
                ></div>
                <div className="progress-labels">
                  <span>{campaign.donated} raised</span>
                  <span>{campaign.target} goal</span>
                </div>
              </div>

              <div className="campaign-stats">
                <div className="stat-item">
                  <span className="stat-number">{campaign.donors}</span>
                  <span className="stat-label">Donors</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{campaign.progress}%</span>
                  <span className="stat-label">Funded</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">23</span>
                  <span className="stat-label">Days Left</span>
                </div>
              </div>

              <button className="donate-button">Support This Cause</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignParts;
