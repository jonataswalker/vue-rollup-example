import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';

const pkg = require('./package.json');
const external = Object.keys(pkg.dependencies);

export default {
  external,
  globals: { vue: 'Vue' },
  entry: 'src/entry.js',
  plugins: [
    resolve(),
    vue({ compileTemplate: true, css: true }),
    buble()
  ],
  targets: [
    { dest: 'dist/vue-rollup-example.cjs.js', format: 'cjs' },
    { dest: 'dist/vue-rollup-example.umd.js', format: 'umd' }
  ]
};
