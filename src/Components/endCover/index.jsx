import React, { useState } from "react";
import EndCoverImg from "../../Assets/Images/new-logo.png";

const EndCover = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(true);
  };

  return (
    <>
      <div className={`end-cover ${isVisible ? "visible" : ""}`}>
        <img
          src={EndCoverImg}
          alt="End Cover Image"
          className="end-cover-img"
          onLoad={handleVisibility}
        />
      </div>
    </>
  );
};

export default EndCover;
