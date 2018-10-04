const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');

module.exports = withSass(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#f5222d",
      "@link-color": "#ff7875",
      "@success-color": "#fa541c",
      "@warning-color": "#a0d911",
      "@error-color": "#389e0d",
    },
  },
}));
