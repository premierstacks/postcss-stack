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

import * as selectors from './selectors.js';

export class PostcssStack {
  config;

  constructor(config) {
    this.config = config;
  }

  get nodeEnv() {
    return process.env.NODE_ENV ?? 'production';
  }

  static create() {
    return new this({
      plugins: [],
    });
  }

  clone(config) {
    return new this.constructor(config);
  }

  base() {
    return this.clone({
      ...this.config,
    });
  }

  env(options = {}) {
    return this.clone({
      ...this.config,
      plugins: [
        ...this.config.plugins,
        ['postcss-preset-env', { ...options }],
      ],
    });
  }

  stylex(options = {}) {
    const defaults = {
      include: this.Selectors.SrcEcmaScript,
      useCSSLayers: false,
    };

    return this.clone({
      ...this.config,
      plugins: [
        ...this.config.plugins,
        [
          '@stylexjs/postcss-plugin',
          {
            ...defaults,
            ...options,
          },
        ],
      ],
    });
  }

  build() {
    return this.config;
  }

  get Selectors() {
    return selectors;
  }
}
