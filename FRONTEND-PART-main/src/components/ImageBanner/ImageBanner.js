import React from "react";
import "./ImageBanner.css";

const ImageBanner = ({ imageUrl, title, breadcrumbs, description }) => {
  return (
    <div
      className="image-banner"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="content-overlay">
        <div className="breadcrumb">
          {breadcrumbs.map((item, index) => (
            <a className="abtn" href={`/${item}`}>
            <span key={index} className="breadcrumb-item">
              {index > 0 && " / "}
              {item}
            </span>
            </a>
          ))}
        </div>

        <h1 className="Banner-title">{title}</h1>
        <p className="Banner-description">{description}</p>
        <a href="/donate">
          <button className="donate-button-banner">Donate Now?</button>
        </a>
      </div>
    </div>
  );
};

export default ImageBanner;