import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/index.tsx",
  output: {
    format: "iife",
    file: "dist/blm-webflow-form.min.js",
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    resolve({ browser: true }),
    commonjs(),
    typescript({ lib: ["esnext", "dom"], target: "es5" }),
    uglify(),
  ],
};
