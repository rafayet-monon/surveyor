import React, { useRef, useState } from 'react';

import Slider from 'react-slick';

import slickSettings from 'components/WheelSelect/slickSettings';

const WheelSelect = ({ options, multipleSelect }) => {
  const demoData = [
    {
      display: 'N0',
      value: 0
    },
    {
      display: 'Yes',
      value: 1
    }
  ];
  const wheelData = options || demoData;

  const [isClicked, setIsClicked] = useState(false);
  const sliderRef = useRef(null);
  const elementTextClass = multipleSelect
    ? 'wheel-select__text wheel-select__text--multiple-select'
    : 'wheel-select__text';

  window.addEventListener('wheel', (e) => {
    setIsClicked(false);
    slideList(e.wheelDelta);
  });

  const beforeSlideChange = (currentSlide, nextSlide) => {
    if (isClicked && multipleSelect && currentSlide === nextSlide) {
      const checkElement = document.getElementById(`checkbox-${currentSlide}`);
      checkElement.click();
    }
  };

  const sliderEvents = {
    beforeChange: (currentSlide, nextSlide) =>
      beforeSlideChange(currentSlide, nextSlide)
  };

  const slickConfig = { ...slickSettings, ...sliderEvents };

  const slideList = (wheel) => {
    if (sliderRef.current) {
      wheel > 0 ? sliderRef.current.slickNext() : sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="wheel-select">
      <span className="wheel-select__selected-zone" />
      <Slider { ...slickConfig } ref={ sliderRef }>
        { wheelData.map(function (element, index) {
          return (
            <div
              className="wheel-select__element"
              key={ index }
              role={ index }
              onClick={ () => setIsClicked(true) }
              onKeyPress={ () => setIsClicked(true) }
            >
              <div
                id={ `wheel-select__container--${index}` }
                className="wheel-select__container"
                key={ index }
              >
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
