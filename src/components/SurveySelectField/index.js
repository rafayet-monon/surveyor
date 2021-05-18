import React from 'react';

import SelectSearch from 'react-select-search/dist/cjs';

const SurveySelectField = ({ options }) => {
  // Adding some demo data for now to show components based on question type.
  const demoData = [
    { name: 'Bangladesh', value: 'BD' },
    { name: 'India', value: 'IN' },
    { name: 'Nepal', value: 'NP' },
    { name: 'Bhutan', value: 'BH' },
    { name: 'Thailand', value: 'TH' },
    { name: 'Singapore', value: 'SG' },
    { name: 'Vietnam', value: 'VN' }
  ];
  const selectData = options || demoData;

  return (
    <div className="survey-input-container">
      <SelectSearch
        options={ selectData }
        search
        emptyMessage="Not found"
        placeholder="Select suitable option"
        className="select-search"
      />
    </div>
  );
};

export default SurveySelectField;
