import Api from 'utils/Api';

class SurveyAdapter {
  static getList = (page, token) => {
    return Api.get(`api/v1/surveys?page[number]=${page}`, {
      headers: {
        Authorization: token
      }
    });
  };

  static get = (surveyId, token) => {
    return Api.get(`api/v1/surveys/${surveyId}`, {
      headers: {
        Authorization: token
      }
    });
  };
}

export default SurveyAdapter;
