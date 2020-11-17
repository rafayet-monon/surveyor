import React, { useContext, useEffect, useRef, useState } from 'react';

import Slider from 'react-slick';

import SurveyAdapter from 'adapters/surveyAdapter';
import { AuthContext } from 'contexts/auth';
import { BackgroundContext } from 'contexts/background';
import slickSettings from 'screens/Home/slickSettings';

const SurveyList = ({ surveyResponse }) => {
  const surveyData = surveyResponse.data;
  const surveyMeta = surveyResponse.meta;
  const total_pages = surveyMeta.pages;

  const sliderRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(surveyMeta.page);
  const [list, setList] = useState(surveyData);
  const [currentBackground, setCurrentBackground] = useState(
    list[0].attributes.cover_image_url
  );

  const { dispatch } = useContext(BackgroundContext);
  const authContext = useContext(AuthContext);

  const sliderEvents = {
    beforeChange: (current, next) => beforeSlideChange(next),
    afterChange: (current) => afterSlideChange(current),
  };
  const slickConfig = { ...slickSettings, ...sliderEvents };

  useEffect(() => {
    var _scrollTimeout = null;

    window.addEventListener('wheel', (e) => {
      clearTimeout(_scrollTimeout);
      _scrollTimeout = setTimeout(function () {
        slideList(e.wheelDelta);
      }, 250);
    });

    dispatch({
      type: 'SURVEY',
      payload: currentBackground,
    });
  }, [currentBackground, dispatch]);

  const beforeSlideChange = (next) => {
    setCurrentBackground(list[next].attributes.cover_image_url);
  };

  const afterSlideChange = () => {
    if (currentPage < total_pages) {
      getList();
    }
  };

  const getList = async () => {
    const next_page = currentPage + 1;
    try {
      await SurveyAdapter.getList(
        next_page,
        authContext.state.authorization_token
      ).then(function (response) {
        if (response.status === 200) {
          const new_list = [...list, ...response.data.data];
          setList(new_list);
          setCurrentPage(response.data.meta.page);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const slideList = (wheel) => {
    wheel > 0 ? sliderRef.current.slickNext() : sliderRef.current.slickPrev();
  };

  return (
    <div className="survey-list">
      <Slider { ...slickConfig } ref={ sliderRef }>
        { list.map(function (slide) {
          return (
            <div key={ slide.id }>
              <img
                src={ slide.attributes.cover_image_url }
                alt={ slide.attributes.title }
                className="survey-list__image"
              />
              <h3 className="survey-list__title">{ slide.attributes.title }</h3>
              <p className="survey-list__description">
                { slide.attributes.description }
              </p>

              <div className="survey-list__navigation">
                <button className="button button--circle">
                  <span className="survey-list__detail-arrow" />
                </button>
              </div>
            </div>
          );
        }) }
      </Slider>
    </div>
  );
};

export default SurveyList;
