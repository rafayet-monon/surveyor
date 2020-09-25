const fs = require('fs');

const autoRecord = require('cypress-autorecord/plugin');

module.exports = (on, config) => {
  autoRecord(on, config, fs);
};
