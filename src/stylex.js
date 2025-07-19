/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2025 Tomáš Chochola <chocholatom1997@gmail.com>
 *
 * @license CC-BY-ND-4.0
 *
 * @see {@link https://creativecommons.org/licenses/by-nd/4.0/} License
 * @see {@link https://github.com/tomchochola} GitHub Personal
 * @see {@link https://github.com/premierstacks} GitHub Organization
 * @see {@link https://github.com/sponsors/tomchochola} GitHub Sponsors
 */

import { createPostcssConfigBase } from './base.js';

const def = {
  include: ['./src/**/*.{tsx,mts,ts,cts,jsx,mjs,js,cjs}'],
  useCSSLayers: false,
};

export function applyPostcssPluginStylex(config, options = def) {
  config.plugins = config.plugins ?? [];

  config.plugins.unshift([
    '@stylexjs/postcss-plugin',
    {
      ...def,
      ...options,
    },
  ]);

  return config;
}

export function createPostcssConfigStylex(options = def) {
  return applyPostcssPluginStylex(createPostcssConfigBase(), options);
}
