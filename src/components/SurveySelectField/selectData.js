const SelectData = (surveyDetail, answers) => {
  const data = [];
  answers.map(function (value) {
    const answerDetail = surveyDetail.included.find(
      (data) => data.id === value.id
    );

    data.push({
      label: answerDetail.attributes.text,
      value: answerDetail.id
    });
  });

  return data;
};

export default SelectData;
