import data from '../fixtures/questions.json'

import studentPage from '../support/pages/StudentPage'

describe('receber perguntas', () => {

    it('deve poder receber uma notificação com uma pergunta do aluno', () => {

        const dataTest = data.notification

        cy.resetStudent(dataTest.student)
        cy.createEnroll(dataTest)
        cy.createQuestion(dataTest.question)

        cy.adminLogin()

        studentPage.navbar.openNotifications()
        studentPage.notifications.haveQuestion(dataTest.question)
    })

    it('deve poder responder uma pergunta de alunos', ()=> {
        const dataTest = data.prof_answer

        cy.resetStudent(dataTest.student)
        cy.createEnroll(dataTest)
        cy.createQuestion(dataTest.question)

        cy.adminLogin()

        studentPage.navbar.openNotifications()
        studentPage.notifications.openQuestion(dataTest.question)
        studentPage.notifications.sendAnswer(dataTest.answer)

        studentPage.popup.haveText('Resposta enviada com sucesso')
    })

})