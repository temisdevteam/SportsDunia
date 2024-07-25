import "./Filters.css";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CustomPrevArrow = props => {
  const { onClick } = props;
  return (
    <div className="custom-arrow-custom-arrow-left" onClick={onClick}>
      <span>
        <IoIosArrowBack />
      </span>
    </div>
  );
};

const CustomNextArrow = props => {
  const { onClick } = props;
  return (
    <div className="custom-arrow-custom-arrow-right" onClick={onClick}>
      <span>
        <IoIosArrowForward />
      </span>
    </div>
  );
};

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSvgClicked, setIsSvgClicked] = useState(false);

  const toggleFilters = () => {
    setIsOpen(!isOpen);
    setIsSvgClicked(!isSvgClicked);
  };

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  return (
    <div className="Filters">
      <div className="Filters-top-side">
        <p>Matches</p>
        <span className="Filters-divid" />
        <div className="Filters-inside-mid-side" onClick={toggleFilters}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className={`Filters-matches-icon ${isSvgClicked ? 'clicked' : ''}`}
          >
            <g clip-path="url(#clip0_368_76)">
              <path
                d="M28 9H11C10.7348 9 10.4804 8.89464 10.2929 8.70711C10.1054 8.51957 10 8.26522 10 8C10 7.73478 10.1054 7.48043 10.2929 7.29289C10.4804 7.10536 10.7348 7 11 7H28C28.2652 7 28.5196 7.10536 28.7071 7.29289C28.8946 7.48043 29 7.73478 29 8C29 8.26522 28.8946 8.51957 28.7071 8.70711C28.5196 8.89464 28.2652 9 28 9Z"
                fill="white"
              />
              <path
                d="M7 9H4C3.73478 9 3.48043 8.89464 3.29289 8.70711C3.10536 8.51957 3 8.26522 3 8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7H7C7.26522 7 7.51957 7.10536 7.70711 7.29289C7.89464 7.48043 8 7.73478 8 8C8 8.26522 7.89464 8.51957 7.70711 8.70711C7.51957 8.89464 7.26522 9 7 9Z"
                fill="white"
              />
              <path
                d="M21 17H4C3.73478 17 3.48043 16.8946 3.29289 16.7071C3.10536 16.5196 3 16.2652 3 16C3 15.7348 3.10536 15.4804 3.29289 15.2929C3.48043 15.1054 3.73478 15 4 15H21C21.2652 15 21.5196 15.1054 21.7071 15.2929C21.8946 15.4804 22 15.7348 22 16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17Z"
                fill="white"
              />
              <path
                d="M11 25H4C3.73478 25 3.48043 24.8946 3.29289 24.7071C3.10536 24.5196 3 24.2652 3 24C3 23.7348 3.10536 23.4804 3.29289 23.2929C3.48043 23.1054 3.73478 23 4 23H11C11.2652 23 11.5196 23.1054 11.7071 23.2929C11.8946 23.4804 12 23.7348 12 24C12 24.2652 11.8946 24.5196 11.7071 24.7071C11.5196 24.8946 11.2652 25 11 25Z"
                fill="white"
              />
              <path
                d="M9 11C8.40666 11 7.82664 10.8241 7.33329 10.4944C6.83994 10.1648 6.45543 9.69623 6.22836 9.14805C6.0013 8.59987 5.94189 7.99667 6.05765 7.41473C6.1734 6.83279 6.45912 6.29824 6.87868 5.87868C7.29824 5.45912 7.83279 5.1734 8.41473 5.05765C8.99667 4.94189 9.59987 5.0013 10.1481 5.22836C10.6962 5.45543 11.1648 5.83994 11.4944 6.33329C11.8241 6.82664 12 7.40666 12 8C12 8.79565 11.6839 9.55871 11.1213 10.1213C10.5587 10.6839 9.79565 11 9 11ZM9 7C8.80222 7 8.60888 7.05865 8.44443 7.16853C8.27998 7.27841 8.15181 7.43459 8.07612 7.61732C8.00043 7.80004 7.98063 8.00111 8.01922 8.19509C8.0578 8.38907 8.15304 8.56726 8.29289 8.70711C8.43275 8.84696 8.61093 8.9422 8.80491 8.98079C8.99889 9.01937 9.19996 8.99957 9.38268 8.92388C9.56541 8.84819 9.72159 8.72002 9.83147 8.55557C9.94135 8.39112 10 8.19778 10 8C10 7.73478 9.89464 7.48043 9.70711 7.29289C9.51957 7.10536 9.26522 7 9 7Z"
                fill="white"
              />
              <path
                d="M23 19C22.4067 19 21.8266 18.8241 21.3333 18.4944C20.8399 18.1648 20.4554 17.6962 20.2284 17.1481C20.0013 16.5999 19.9419 15.9967 20.0576 15.4147C20.1734 14.8328 20.4591 14.2982 20.8787 13.8787C21.2982 13.4591 21.8328 13.1734 22.4147 13.0576C22.9967 12.9419 23.5999 13.0013 24.1481 13.2284C24.6962 13.4554 25.1648 13.8399 25.4944 14.3333C25.8241 14.8266 26 15.4067 26 16C26 16.7957 25.6839 17.5587 25.1213 18.1213C24.5587 18.6839 23.7957 19 23 19ZM23 15C22.8022 15 22.6089 15.0587 22.4444 15.1685C22.28 15.2784 22.1518 15.4346 22.0761 15.6173C22.0004 15.8 21.9806 16.0011 22.0192 16.1951C22.0578 16.3891 22.153 16.5673 22.2929 16.7071C22.4327 16.847 22.6109 16.9422 22.8049 16.9808C22.9989 17.0194 23.2 16.9996 23.3827 16.9239C23.5654 16.8482 23.7216 16.72 23.8315 16.5556C23.9414 16.3911 24 16.1978 24 16C24 15.7348 23.8946 15.4804 23.7071 15.2929C23.5196 15.1054 23.2652 15 23 15Z"
                fill="white"
              />
              <path
                d="M13 27C12.4067 27 11.8266 26.8241 11.3333 26.4944C10.8399 26.1648 10.4554 25.6962 10.2284 25.1481C10.0013 24.5999 9.94189 23.9967 10.0576 23.4147C10.1734 22.8328 10.4591 22.2982 10.8787 21.8787C11.2982 21.4591 11.8328 21.1734 12.4147 21.0576C12.9967 20.9419 13.5999 21.0013 14.1481 21.2284C14.6962 21.4554 15.1648 21.8399 15.4944 22.3333C15.8241 22.8266 16 23.4067 16 24C16 24.7957 15.6839 25.5587 15.1213 26.1213C14.5587 26.6839 13.7957 27 13 27ZM13 23C12.8022 23 12.6089 23.0586 12.4444 23.1685C12.28 23.2784 12.1518 23.4346 12.0761 23.6173C12.0004 23.8 11.9806 24.0011 12.0192 24.1951C12.0578 24.3891 12.153 24.5673 12.2929 24.7071C12.4327 24.847 12.6109 24.9422 12.8049 24.9808C12.9989 25.0194 13.2 24.9996 13.3827 24.9239C13.5654 24.8482 13.7216 24.72 13.8315 24.5556C13.9414 24.3911 14 24.1978 14 24C14 23.7348 13.8946 23.4804 13.7071 23.2929C13.5196 23.1054 13.2652 23 13 23Z"
                fill="white"
              />
              <path
                d="M28 17H25C24.7348 17 24.4804 16.8946 24.2929 16.7071C24.1054 16.5196 24 16.2652 24 16C24 15.7348 24.1054 15.4804 24.2929 15.2929C24.4804 15.1054 24.7348 15 25 15H28C28.2652 15 28.5196 15.1054 28.7071 15.2929C28.8946 15.4804 29 15.7348 29 16C29 16.2652 28.8946 16.5196 28.7071 16.7071C28.5196 16.8946 28.2652 17 28 17Z"
                fill="white"
              />
              <path
                d="M28 25H15C14.7348 25 14.4804 24.8946 14.2929 24.7071C14.1054 24.5196 14 24.2652 14 24C14 23.7348 14.1054 23.4804 14.2929 23.2929C14.4804 23.1054 14.7348 23 15 23H28C28.2652 23 28.5196 23.1054 28.7071 23.2929C28.8946 23.4804 29 23.7348 29 24C29 24.2652 28.8946 24.5196 28.7071 24.7071C28.5196 24.8946 28.2652 25 28 25Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_368_76">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="Filters-main-content">
      <div className={`dropdown-Filters ${isOpen ? "show" : ""}`}>
        <div className="Filters-main">
          <div className="Filters-left">
            <p>European Championship</p>
            <p>Menu</p>
          </div>
          <div className="Filters-right">
            <div>
              <Slider className="Filters-right-main" {...carouselSettings}>
                <div id="one">All</div>
                <div id="two">Today</div>
                <div id="tree">Today</div>
                <div id="four">Today</div>
                <div id="five">Today</div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className={`main-drop-Filters ${isOpen ? "down" : "up"}`}>
        <div className="sub-drop-Filters">
          <p>European Championship &emsp; 19:30</p>
          <p>European Championship</p>
          <p>ENG</p>
          <p>SVK</p>
        </div>
        <div className="sub-drop-Filters">
          <p>European Championship &emsp; 19:30</p>
          <p>European Championship</p>
          <p>ENG</p>
          <p>SVK</p>
        </div>
        <div className="sub-drop-Filters">
          <p>European Championship &emsp; 19:30</p>
          <p>European Championship</p>
          <p>ENG</p>
          <p>SVK</p>
        </div>
        <div className="sub-drop-Filters">
          <p>European Championship &emsp; 19:30</p>
          <p>European Championship</p>
          <p>ENG</p>
          <p>SVK</p>
        </div>
        <div className="sub-drop-Filters">
          <p>European Championship &emsp; 19:30</p>
          <p>European Championship</p>
          <p>ENG</p>
          <p>SVK</p>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Filters;
