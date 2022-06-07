import React from "react";
import "./Gallary.css";

function Gallary() {
  return (
    <div className="gallery">
      <div className="galleryContent">
        <div className="galleryleft">
          <h1>Store locations</h1>
          <p>
            Heading para
          </p>
          <p>
            Any Text
          </p>
          <button>Find Out More</button>
        </div>
        <div className="galleryright">
          <img
            src="	https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/homepage/bluelightt.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="galleryContent">
        <div className="galleryright">
          <img
            src="https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/homepage/multifocals.jpg"
            alt=""
          />
        </div>
        <div className="galleryleft">
          <h1 style={{ paddingLeft: "20px" }}>Store locations</h1>
          <p style={{ paddingLeft: "20px" }}>
            heading para
          </p>
          <p style={{ paddingLeft: "20px" }}>
            any text
          </p>
          <div style={{ paddingLeft: "20px" }}>
            <button>View More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallary;