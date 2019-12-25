const plugins = [
  "@babel/plugin-transform-arrow-functions",
  [
    "@babel/plugin-transform-runtime",
    {
      "corejs": false,
      "helpers": true,
      "regenerator": true,
      "useESModules": false
    }
  ]
]

module.exports = function (api) {
  const isTest = api.env('test');
  api.cache(true);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            "browsers": "> 5%",
            "node": "current"
          },
          modules: isTest ? 'commonjs' : false,
          useBuiltIns: "usage",
        },
      ],
    ],
    plugins
  };
}
