import React, { useState } from "react";
import ImageCover1 from "../../Assets/Images/img-cover1.png";
import ImageCover2 from "../../Assets/Images/img-cover2.png";
import ImageCover3 from "../../Assets/Images/img-cover3.png";
import ImageCover4 from "../../Assets/Images/img-cover4.png";
import ImageCover5 from "../../Assets/Images/img-cover5.png";
import ImageCover6 from "../../Assets/Images/img-cover6.png";
import "../../Assets/Styles/display/display.css";
import {
  pararaph1,
  pararaph2,
  pararaph3,
  pararaph4,
  pararaph5,
  pararaph6,
} from "../../Utils/contants";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Menu from "../menu";

const Display = ({ isMenu,setIsEnd }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSection, setSelectedSection] = useState(0);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const coverSection = [
    {
      heading: "EXPERIENCE THE BUGATTI MISTRAL",
      images: [ImageCover1, ImageCover2, ImageCover3],
      paragraphs: [pararaph1, pararaph2, pararaph3],
    },
    {
      heading: "CHIRON SUPER SPORT",
      images: [ImageCover4, ImageCover5, ImageCover6],
      paragraphs: [pararaph4, pararaph5, pararaph6],
    },
  ];

  const handleNextSlide = () => {
    if (selectedSection == 1 && selectedImage == 2) {
      setSelectedImage(0);
      setSelectedSection(0);
      setIsEnd(true)
      return;
    }
    if (selectedImage == 2) {
      setSelectedImage(0);
      setSelectedSection((prevSec) => prevSec + 1);
      return;
    }
    setSelectedImage((prevSlide) =>
      prevSlide === coverSection[selectedSection]?.images.length - 1
        ? prevSlide
        : prevSlide + 1
    );
    setCurrentParagraphIndex(
      (prevIndex) =>
        (prevIndex + 1) % coverSection[selectedSection]?.paragraphs.length
    );
  };

  return (
    <>
      {!isMenu ? (
        <div className="display">
          <div className="img-cover1">
            <Carousel
              showIndicators={false}
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              selectedItem={selectedImage}
            >
              {coverSection[selectedSection]?.images &&
                coverSection[selectedSection]?.images.map((val, key) => {
                  return (
                    <div key={key}>
                      <img
                        src={val}
                        alt={`Image Cover ${key + 1}`}
                        className="car-img"
                      />
                    </div>
                  );
                })}
            </Carousel>
          </div>

          <div className="display-section">
            <h2>{coverSection && coverSection[selectedSection].heading}</h2>

            <div className="scroll-change-animation">
              {coverSection[selectedSection].paragraphs.map(
                (paragraph, index) => (
                  <p
                    key={index}
                    className={index === currentParagraphIndex ? "active" : ""}
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>

            <div className="end-btns">
              <div className="discover-btn">
                <span>DISCOVER MORE</span>
              </div>
              <div className="next-btn" onClick={handleNextSlide}>
                <span>NEXT</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Menu />
      )}
    </>
  );
};

export default Display;
