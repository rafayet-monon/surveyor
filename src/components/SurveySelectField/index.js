import React from 'react';

import SelectSearch from 'react-select-search/dist/cjs';

const SurveySelectField = ({ options }) => {
  return (
    <div className="survey-input-container">
      <SelectSearch
        options={ options }
        search
        emptyMessage="Not found"
        placeholder="Select suitable option"
        className="select-search"
      />
    </div>
  );
};

export default SurveySelectField;
