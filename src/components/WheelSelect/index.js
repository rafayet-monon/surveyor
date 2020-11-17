import React, { useEffect, useRef } from 'react';

import Slider from 'react-slick';

import slickSettings from 'components/WheelSelect/slickSettings';

const WheelSelect = ({ data, multipleSelect }) => {
  const sliderRef = useRef(null);
  const elementTextClass = multipleSelect ? 'wheel-select__text wheel-select__text--multiple-select' : 'wheel-select__text'

  useEffect(() => {
    const selectedElement = document.getElementById('wheel-select__container--0');
    selectedElement.style.opacity = 1;

    window.addEventListener('wheel', (e) => {
      slideList(e.wheelDelta);
    });
  }, []);

  const beforeSlideChange = (currentSlide, nextSlide) => {
    const nextElement = document.getElementById(`wheel-select__container--${nextSlide}`);
    const currentElement = document.getElementById(`wheel-select__container--${currentSlide}`);
    nextElement.style.opacity = 1;
    nextElement.style.pointerEvents = 'auto';
    if( currentSlide !== nextSlide ){
      currentElement.style.opacity = 0.5;
      currentElement.style.pointerEvents = 'none';
    }
  };

  const sliderEvents = {
    beforeChange: (currentSlide, nextSlide) => beforeSlideChange(currentSlide, nextSlide),
  };

  const slickConfig = { ...slickSettings, ...sliderEvents };

  const slideList = (wheel) => {
    if (sliderRef.current) {
      wheel > 0 ? sliderRef.current.slickNext() : sliderRef.current.slickPrev();
    }
  };

  return (
    <div className='wheel-select'>
      <span className='wheel-select__selected-zone'/>
      <Slider { ...slickConfig } ref={ sliderRef }>
        { data.map(function (element, index) {
          return (
            <div className="wheel-select__element" key={ index }>
              <div id={ `wheel-select__container--${index}` } className="wheel-select__container" key={ index }>
                <div className={ elementTextClass }>{ element.display }</div>

                { multipleSelect && (
                  <div
                    className="wheel-select__checkbox-container"
                    id={ `wheel-select__checkbox--${index}` }
                  >
                    <input
                      type="checkbox"
                      id={ `checkbox-${index}` }
                      className="wheel-select__checkbox"
                    />
                    <label
                      aria-label="wheel-select__checkbox-label"
                      htmlFor={ `checkbox-${index}` }
                      className="wheel-select__checkbox-label"
                    />
                  </div>
                ) }
              </div>
            </div>
          );
        }) }
      </Slider>
    </div>
  );
};

export default WheelSelect;
