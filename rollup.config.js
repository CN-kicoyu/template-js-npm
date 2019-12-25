import camelcase from 'camelcase'
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const PKG_NAME = camelcase(pkg.name)

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: PKG_NAME,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
    }
  ],
  plugins: [
    json(),
    commonjs(),
    resolve({
      mainField: ['jsnext', 'main'],
      browser: true,
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    terser(),
  ]
}
