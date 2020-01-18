import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'

/**
 * @type{import('rollup').RollupOptions}
 */
const config = {
  input: 'src/vue.js',
  output: {
    file: 'dist/vue.js',
    format: 'esm',
  },
  plugins: [
    commonjs(),
    resolve(),
    replace({ 'process.env.NODE_ENV': "'development'" }),
  ],
}

export default config
