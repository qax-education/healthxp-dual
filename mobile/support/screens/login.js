const { I } = inject();

class loginScreen {
  constructor() {
    //insert your locators
    // this.button = '#button'
  }

  with(enrollment_code) {
    I.seeAppIsInstalled('com.papitorocks.healthxp')

    I.fillField('#ipAddress', '192.168.68.116')
    I.fillField('#enrollment_code', enrollment_code)
    I.click('#btnLogin')
  }

}

// For inheritance
module.exports = new loginScreen();
