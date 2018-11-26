import typescript from 'rollup-plugin-typescript';
import PrototypeMinify from "rollup-plugin-prototype-minify";
import es3 from "rollup-plugin-es3";


const merge = require("./config/merge");
const banner = require("./config/banner");
const plugin = typescript({
  "module": "es2015",
  "target": "es3",
  "lib": ["es2015", "dom"],
  "exclude": "node_modules/**",
  "sourceMap": true,
});
const defaultConfig = {
  plugins: [
    plugin, PrototypeMinify({sourcemap: true}), es3({sourcemap: true}),
  ],
  output: {
    banner,
    format: "es",
    freeze: false,
    exports: "named",
    interop: false,
    sourcemap: true,
  },
};

export default [
  {
    input: 'src/index.ts',
    output: {
      file: `./dist/utils.esm.js`,
    },
  },
  {
    input: 'src/index.ts',
    output: {
      format: "umd",
      name: "utils",
      file: `./dist/utils.js`,
    },
  },
].map(entry => merge(defaultConfig, entry, {
  plugins: "append",
  output: "append",
}));
