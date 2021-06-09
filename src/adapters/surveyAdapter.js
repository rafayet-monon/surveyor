import Api from 'helpers/api';

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

  static submit = (data, token) => {
    return Api.post('api/v1/responses', data,{
      headers: {
        Authorization: token
      }
    });
  };
}

export default SurveyAdapter;
