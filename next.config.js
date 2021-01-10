const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const { nextI18NextRewrites } = require("next-i18next/rewrites");

const nextConfig = {
  devIndicators: {
  autoPrerender: false,
  }
}

const cssConfigs = {
  cssModules: true,
}

const localeSubpaths = {};

const langConfig = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};

module.exports = withPlugins([
    [withCSS, cssConfigs],
  ],
  nextConfig,
  langConfig,
)