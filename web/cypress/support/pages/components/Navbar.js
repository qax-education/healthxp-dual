class Navbar {
    userLoggedIn(name) {
        cy.contains('aside .logged-user', 'Olá, ' + name)
            .should('be.visible')
    }

    goToEnrolls() {
        cy.get('a[href="/enrollments"]')
            .click()
    }
}

export default new Navbar()