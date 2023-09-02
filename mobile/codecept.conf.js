const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: 'C:\\QAx\\projects\\healthxp-dual\\mobile\\app\\hxp-beta2.apk',
      platform: 'Android',
      device: 'emulator'
    }
  },
  include: {
    I: './steps_file.js',

    loginScreen: "./screens/login.js",
  },
  name: 'mobile'
}