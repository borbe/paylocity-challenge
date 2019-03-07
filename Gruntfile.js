const dotenv = require('dotenv');

function Grunt(grunt) {
  dotenv.config({ path: `./env/${process.env.NODE_ENV}.env` });

  grunt.registerTask('default', [
    'exec',
    'protractor:test',
  ]);

  grunt.initConfig({
    exec: {
      webdriverUpdate: 'node_modules/protractor/bin/webdriver-manager update',
    },
    protractor: {
      options: {
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor:
                      false, // If true, protractor will not use colors in its output.
        configFile:
                      './node_modules/paylocity-test-fwk/protractor-grid.conf.js',
      },
      test: {
        options: {
          args: {
            specs: ['features/*.feature'],
          },
        },
      },
    },
  });

  // Load Task
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-protractor-runner');
}

module.exports = Grunt;
