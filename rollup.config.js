import merge from 'deepmerge';
import { createSpaConfig } from '@open-wc/building-rollup';

const baseConfig = createSpaConfig({
  developmentMode: process.env.ROLLUP_WATCH === 'true',
  injectServiceWorker: false,
});

export default merge(baseConfig, {
  input: './index.html',
  output: {
    sourcemap: false,
    dir: 'dist',
    entryFileNames: 'index.js',
  },
});