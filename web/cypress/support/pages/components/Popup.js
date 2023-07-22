class Popup {

    content() {
        return cy.get('#swal2-content')
    }

    haveText(text) {
        this.content()
            .should('be.visible')
            .should('have.text', text)
    }

    confirm() {
        cy.get('.swal2-confirm')
            .click({ force: true })
    }

    back() {
        cy.get('.swal2-cancel')
            .click()
    }

}

export default new Popup()