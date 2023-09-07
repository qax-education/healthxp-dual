/// <reference types='codeceptjs' />
type steps_file = typeof import('./support/steps_file.js');
type loginScreen = typeof import('./support/screens/login.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginScreen: loginScreen }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
