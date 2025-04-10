const path = require('path');  // Import the 'path' module

module.exports = {
  webpack: {
    configure: {
      output: {
        path: path.resolve(__dirname, '2PAI-belier'),  // Replace with your target folder
      },
    },
  },
};
