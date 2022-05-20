//empty config
// module.exports = {};

// config for webpack
// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"]
//     });

//     return config;
//   }
// };

// config for next-images
const withImages = require("next-images");
module.exports = withImages();
