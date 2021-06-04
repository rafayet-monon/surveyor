import React, { useContext, useEffect, useRef, useState } from 'react';

import Slider from 'react-slick';

import SelectOptions from 'components/WheelSelect/selectOptions';
import slickSettings from 'components/WheelSelect/slickSettings';
import * as Constants from 'constants/surveyAnswer';
import { DetailsContext } from 'contexts/details';
import { SurveyAnswerContext } from 'contexts/surveyAnswer';
import QuestionObjectBuilder from 'helpers/questionObjectBuilder';


const WheelSelect = ({ multipleSelect, questionId, answers }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { dispatch } = useContext(SurveyAnswerContext);
  const detailsContext = useContext(DetailsContext);
  const wheelData = SelectOptions(detailsContext.surveyDetail, answers);
  const [currentQuestionId, setCurrentQuestionId] = useState(questionId);
  const sliderRef = useRef(null);

  const elementTextClass = multipleSelect
    ? 'wheel-select__text wheel-select__text--multiple-select'
    : 'wheel-select__text';

  useEffect(() => {
    // Pre select the answer for single select as single select comes a answer
    // selected as per the design
    // If new question of wheel component then re initialize the component state
    if (currentQuestionId === questionId) {
      if (!multipleSelect) {
        const currentSelected = wheelData[0].value;

        dispatch({
          type: Constants.SINGLE_ANSWER,
          data: QuestionObjectBuilder(questionId, currentSelected)
        });
      }
    } else {
      setCurrentQuestionId(questionId);
      sliderRef.current.slickGoTo(0);
    }
  }, [multipleSelect, questionId]);

  window.addEventListener('wheel', (e) => {
    setIsClicked(false)
    slideList(e.wheelDelta);
  });

  const sliderEvents = {
    afterChange: (current) => afterSlideChange(current),
    beforeChange: (currentSlide, nextSlide) =>
      beforeSlideChange(currentSlide, nextSlide)
  };

  const beforeSlideChange = (currentSlide, nextSlide) => {
    if (isClicked && multipleSelect && currentSlide === nextSlide) {
      const checkElement = document.getElementById(`checkbox-${currentSlide}`);
      checkElement.click();
    }
  };

  // Select the answe on slide change for single select type questions
  const afterSlideChange = (current) => {
    if (!multipleSelect) {
      const currentSelected = wheelData[current].value;

      dispatch({
        type: Constants.SINGLE_ANSWER,
        data: QuestionObjectBuilder(questionId, currentSelected)
      });
    }
  };

  const slickConfig = { ...slickSettings, ...sliderEvents };

  // Select the answer on checkbox check for multiple select type questions
  const checkboxChange = (e, index) => {
    const changedItem = wheelData[index].value;

    dispatch({
      type: Constants.MULTIPLE_ANSWER,
      data: QuestionObjectBuilder(questionId, changedItem)
    });
  };

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
              <div className="wheel-select__container" key={ index }>
                <div className={ elementTextClass } data-test-id="wheel-select">{ element.display }</div>

                { multipleSelect && (
                  <div
                    className="wheel-select__checkbox-container"
                    id={ `wheel-select__checkbox--${index}` }
                    data-test-id="wheel-multiple-select"
                  >
                    <input
                      type="checkbox"
                      id={ `checkbox-${index}` }
                      className="wheel-select__checkbox"
                      onChange={ (e) => checkboxChange(e, index) }
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
