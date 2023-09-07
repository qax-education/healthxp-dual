const { I } = inject();

class helpOders {
  constructor() {
    //insert your locators
    // this.button = '#button'
  }

  submit(question) {
    I.click('Pedir ajuda')

    I.click('#btnHelperOrder')

    I.fillField('#textQuestion', question)
    I.click('#btnSubmit')
  }



}

// For inheritance
module.exports = new helpOders();
