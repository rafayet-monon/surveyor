// Build select options from the API response to show them in the UI
const SelectOptions = (surveyDetail, answers) => {
  const selectData = [];
  answers.map(function (value) {
    const answerDetail = surveyDetail.included.find(
      (data) => data.id === value.id
    );

    selectData.push({
      display: answerDetail.attributes.text,
      value: answerDetail.id
    });
  });

  return selectData;
};

export default SelectOptions;