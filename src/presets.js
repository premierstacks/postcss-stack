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

import { PostcssStack } from './builder.js';

export function base(options = {}) {
  const {
    environment = process.env.NODE_ENV ?? 'production',
    env = true,
    stylex = false,
  } = options;

  let config = PostcssStack.create({
    environment,
  });

  if (env) {
    config = config.env();
  }

  if (stylex) {
    config = config.stylex();
  }

  return config;
}

export function stylex(options = {}) {
  return base({
    stylex: true,
    ...options,
  });
}
