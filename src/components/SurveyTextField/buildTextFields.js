const BuildTextFields = (surveyDetail, answers) => {
  answers.map(function (value, index) {
    const answerDetail = surveyDetail.included.find(
      (data) => data.id === value.id
    );

    answers[index].placeholder = answerDetail.attributes.text;
  });

  return answers;
};

export default BuildTextFields;
