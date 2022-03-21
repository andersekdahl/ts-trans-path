module.exports = (opts = {}) => {
  return {
    postcssPlugin: "rewrite-import-paths",
    AtRule: {
      import: r => {
        const params = r.params;
        if (params.indexOf('@anis-zuko_hmgroup') === -1) {
          r.params = params.replace('assets/', '@anis-zuko_hmgroup/react-library-webpack/dist/esm/assets/');
        }
      }
    }
  };
};
module.exports.postcss;
