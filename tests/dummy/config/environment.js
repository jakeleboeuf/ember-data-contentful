/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentfulSpace: '10uc2hqlkgax',
    contentfulAccessToken: 'cc086951ba89c5a39204506474a75446d1b7a6d418d3190cc77fa96bd91e0d82',
    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        environments: ['all'],
        config: {
          id: 'UA-2516077-7'
        }
      }
    ],
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.baseURL = '/ember-data-contentful/';

  }

  return ENV;
};
