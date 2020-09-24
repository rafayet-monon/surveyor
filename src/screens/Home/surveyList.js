import React, { useEffect, useRef } from 'react';

import Slider from 'react-slick';

import testSurvey from 'images/auth_background.png';

const SurveyList = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      slideList(e.wheelDelta);
    })
  }, []);

  const slideList = (y) => {
    y > 0 ? (
      sliderRef.current.slickNext()
    ) : (
      sliderRef.current.slickPrev()
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    speed: 1500
  };

  return (
    <div className="survey-list">
      <Slider { ...settings } ref={ sliderRef }>
        <div>
          <img src={ testSurvey } alt="test" className="survey-list__image" />
        </div>
        <div>
          <img src={ testSurvey } alt="test" className="survey-list__image" />
        </div>
        <div>
          <img src={ testSurvey } alt="test" className="survey-list__image" />
        </div>
      </Slider>

      <h3 className="survey-list__title">Working from home Check-In</h3>
      <p className="survey-list__description">
        We would like to know about how you feel about our work from home.
      </p>

      <div className="survey-list__navigation">
        <button className="button button--circle button--circle-right">
          <span className="survey-list__detail-arrow" />
        </button>
      </div>
    </div>
  );
};

export default SurveyList;
