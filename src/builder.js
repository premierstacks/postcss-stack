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

import { createPostcssConfig, withPresetEnv } from './base.js';
import * as presets from './presets.js';
import { withPluginStylex } from './stylex.js';
import * as selectors from './selectors.js';

export class PostcssStack {
  #config;
  #options;

  constructor(config, options = {}) {
    this.#config = config;
    this.#options = options;
  }

  static create(options = {}) {
    const merged = {
      ...options,
      environment: options.environment ?? process.env.NODE_ENV ?? 'production',
    };

    return new PostcssStack(createPostcssConfig(merged), merged);
  }

  env(options = {}, override = {}) {
    return new PostcssStack(withPresetEnv(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  stylex(options = {}, override = {}) {
    return new PostcssStack(withPluginStylex(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  build() {
    return { ...this.#config };
  }

  options(options) {
    return new PostcssStack(this.#config, {
      ...this.#options,
      ...options,
    });
  }

  static get Presets() {
    return presets;
  }

  static get Selectors() {
    return selectors;
  }
}
