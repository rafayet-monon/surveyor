import Api from 'utils/Api';

const SurveyDetailAdapter = (surveyId, token) => {
  return Api.get(`api/v1/surveys/${surveyId}`, {
    headers: {
      Authorization: token,
    },
  });
};

export default SurveyDetailAdapter;
