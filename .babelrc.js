module.exports = function (api) {
  return {
    plugins: [
      ['@glimmer/babel-plugin-glimmer-env', { DEBUG: !api.env('production') }],
      '@glimmer/babel-plugin-strict-template-precompile',
    ],
  };
};
