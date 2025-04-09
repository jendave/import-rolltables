const typescript = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { copy } = require('@guanghechen/rollup-plugin-copy');

const staticFiles = ['styles', 'templates', 'lang', 'module.json'];

const sourceDirectory = './src';
const distDirectory = './dist';

module.exports = {
  input: 'src/module/import-rolltables.ts',
  output: {
    dir: 'dist/module',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    typescript({}),
    copy({
      targets: [{ src: staticFiles.map((file) => `${sourceDirectory}/${file}`), dest: distDirectory }],
    }),
  ],
};
