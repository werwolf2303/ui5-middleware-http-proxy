sap.ui.define(function() {
  "use strict";

  return {
    "name": "QUnit test suite for ui5-middleware-http-proxy",
    defaults: {
      page: "ui5://test-resources/ui5/middleware/http/proxy/test/Test.qunit.html?testsuite={suite}&test={name}",
      qunit: {
        version: 2
      },
      sinon: {
        version: 4
      },
      ui5: {
        language: "EN",
        theme: "sap_horizon"
      },
      loader: {
        paths: {
          "ui5/middleware/http/proxy/test": "../"
        }
      }
    },
    tests: {
      "unit/unitTests": {
        title: "Unit tests for ui5-middleware-http-proxy",
      },
    }
  }
})
