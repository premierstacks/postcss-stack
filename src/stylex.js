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

import { SrcEcmaScript } from './selectors.js';

export function withPluginStylex(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

  const defaults = {
    include: SrcEcmaScript,
    useCSSLayers: false,
  };

  return {
    ...config,
    plugins: [
      ...config.plugins,
      [
        '@stylexjs/postcss-plugin',
        {
          ...defaults,
          ...override,
        },
      ],
    ],
  };
}
