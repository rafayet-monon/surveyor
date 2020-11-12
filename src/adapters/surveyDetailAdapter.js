import Api from 'utils/Api';

const SurveyDetailAdapter = (page, token) => {
  return Api.get(`api/v1/surveys?page[number]=${page}`, {
    headers: {
      Authorization: token
    },
  });
};

export default SurveyDetailAdapter;
