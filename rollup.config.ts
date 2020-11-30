import nodeResolve from "@rollup/plugin-node-resolve";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

const input = "src/index.tsx";

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];

const plugins = [
  // Allow CSS files
  postcss(),

  // Allow json resolution
  json(),

  // Compile TypeScript files
  typescript({
    typescript: require("typescript")
  }),

  // Allow node_modules resolution, so you can use 'external' to control
  // which external modules to include in the bundle
  // https://github.com/rollup/rollup-plugin-node-resolve#usage
  nodeResolve({ browser: true }),

  // Resolve source maps to the original source
  sourceMaps()
];

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true
    },
    plugins,
    external
  },
  {
    input,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    plugins,
    external
  }
];
