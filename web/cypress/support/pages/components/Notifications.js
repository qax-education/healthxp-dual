class Notifications {

    haveQuestion(question) {
        cy.contains('.scrollbar-container p', question)
            .should('be.visible')
    }

    openQuestion(question) {
        cy.contains('.scrollbar-container p', question)
            .should('be.visible')
            .click()
    }

    sendAnswer(answer) {
        cy.get('textarea[name=answer]').type(answer)

        cy.contains('button', 'Enviar resposta')
            .click()
    }

}

export default new Notifications()